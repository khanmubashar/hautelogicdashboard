const Homepage = {
  slug: "Homepage",
  fields: [
    {
      name: "Hero Title", // required
      type: "text", // required
      required: true,
    },
    {
      name: "backgroundImage", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
  ],
};

export default Homepage;
