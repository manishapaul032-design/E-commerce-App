import express from 'express';

const app = express();



app.get("/", (req, res) => {
  res.json("TrendSphere Backend is running!");
});

app.listen(8000, () => {
  console.log(`Server running on..................`);
});