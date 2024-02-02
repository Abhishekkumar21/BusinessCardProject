const express = require("express");
const { cardDataZodSchema } = require("./types");
const { BusinessCard } = require("./db");
const { default: mongoose } = require("mongoose");
const PORT = 3000;
const app = express();

main().catch(() => console.log("Failed to connect database!"));
async function main() {
  await mongoose.connect(
    "mongodb+srv://admin:tRJk2RIwv8TrXeOM@cluster0.mvnnweu.mongodb.net/BusinessCards"
  );
  console.log("Connected to Database");
}

app.use(express.json());

app.post("/api/businesscards", async (req, res) => {
  const cardData = req.body;

  try {
    const parsedCardData = cardDataZodSchema.safeParse(cardData);
    if (!parsedCardData.success) {
      res.status(400).json({ msg: "You sent the wrong input(s)." });
      return;
    }
    await BusinessCard.create(parsedCardData.data);
    res.status(200).json({ msg: "Business Card Successfully Added!" });
  } catch (error) {
    console.error("Error while creating entry into the database.");
    res.status(500).json({ msg: "Internal Server Error !" });
  }
});

app.get("/api/businesscards", async (req, res) => {
  try {
    const allBusinessCards = await BusinessCard.find();
    res.status(200).json({ allBusinessCards });
  } catch (err) {
    console.log("Error while fetching cards from database...");
    res.status(500).json({ msg: "Internal Server Error!" });
  }
});

app.put("/api/businesscards/:id", async (req, res) => {
  try {
    const cardId = req.params.id;
    const updatedCardData = req.body;
    await BusinessCard.findByIdAndUpdate(cardId, updatedCardData);
    res.status(200).json({ msg: "Your Card updated Successfully!" });
  } catch (err) {
    console.log("Error while updating the card details !");
    res.send(500).json({ msg: "Internal Server Error" });
  }
});

app.delete("/api/businesscards/:id", async (req, res) => {
  try {
    const cardId = req.params.id;
    await BusinessCard.findByIdAndDelete(cardId);
    res.status(200).json({ msg: "Your Card deleted Successfully!" });
  } catch (err) {
    console.log("Error while deleting the card!");
    res.send(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server is listening at port : ${PORT}`));
