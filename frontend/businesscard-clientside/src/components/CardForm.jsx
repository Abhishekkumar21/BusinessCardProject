import React from "react";
import { useState } from "react";
export function CardForm({ card, onSubmit }) {
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [intrestList, setInterestList] = useState([]);
  // const [socialLinkList, setSocialLinkList] = useState([])

  const { formData, setFormData } = useState({
    name: "",
    description: "",
    interests: [],
    socialLinks: [],
  });

  function handleNameChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  function handleDescriptionChange(e) {
    setFormData({ ...formData, description: e.target.value });
  }

  function handleInterestChange(e) {
    const interestArray = e.target.value.split(",");
    setFormData({ ...formData, interests: interestArray });
  }

  function handleSocialLinkChange(e) {
    const socialLinkArray = e.target.value.split(",");
    setFormData({ ...formData, socialLinks: socialLinkArray });
  }

  async function handleSubmit() {
    const response = await fetch("/api/businessCards", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    onSubmit(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
          ></input>
        </label>

        <label>
          Description:{" "}
          <input
            type="text"
            name="descriptioon"
            value={formData.description}
            onChange={handleDescriptionChange}
          ></input>
        </label>

        <label>
          Interests:{" "}
          <input
            type="text"
            name="interests"
            value={formData.interests.join(",")}
            onChange={handleInterestChange}
          ></input>
        </label>

        <label>
          LinkedIn:{" "}
          <input
            type="text"
            name="socialLinks"
            value={formData.socialLinks[0] || ""}
            onChange={handleSocialLinkChange}
          ></input>
        </label>

        <label>
          X:{" "}
          <input
            type="text"
            name="socialLinks"
            value={formData.socialLinks[1] || ""}
            onChange={handleSocialLinkChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//name -> onchange event
//Decription -> onchange event
//[Interests] -> onchange event
//[Socials] -> onchnage event
//submit-> Button :  OnClick sends Post req to server to add a new card into the database
