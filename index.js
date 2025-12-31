const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("public"));

const IMAGE_DIR = path.join(__dirname, "public/images");

// đọc toàn bộ file ảnh 1 lần khi server start
const images = fs.readdirSync(IMAGE_DIR).filter(file =>
  file.endsWith(".png")
);

app.get("/api/random", (req, res) => {
  const randomImage =
    images[Math.floor(Math.random() * images.length)];

  res.json({
    image: "/images/" + randomImage
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("Server running on port " + PORT)
);
