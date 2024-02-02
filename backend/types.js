const z = require("zod");

const cardDataZodSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(1).max(255),
  interests: z.array(z.string()),
  socialsLinks: z.array(z.string().url()),
});

module.exports = {
  cardDataZodSchema,
};
