const faker = require("faker");

export default (req, res) => {
  const data = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      id: i + 1,
      replies: faker.random.number({ min: 0, max: 100 }),
      title: faker.name.title(),
      image: faker.random.image(),
      status: faker.random.arrayElement(["ongoing", "scheduled", "ended"]),
      date: faker.date.recent(),
    });
  }

  res.status(200).json(data);
};
