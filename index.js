const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/usuarios", (req, res) => {
  res.send([
    {
      id: 1,
      name: ["Keyner", "Jose"],
      age: 25,
      profession: "Radiologo",
      qualification: 9,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      id: 2,
      name: ["Maria", "Lopez"],
      age: 28,
      profession: "Odontología",
      qualification: 8,
    },
    {
      id: 3,
      name: ["Carlos", "Gomez"],
      age: 30,
      profession: "Psiquiatra",
      qualification: 9,
    },
    {
      id: 4,
      name: ["Ana", "Rodriguez"],
      age: 35,
      profession: "Pediatra",
      qualification: 7,
    },
    {
      id: 5,
      name: ["Luis", "Martinez"],
      age: 32,
      profession: "Radiologo",
      qualification: 8,
    },
    {
      id: 6,
      name: ["Sofia", "Perez"],
      age: 29,
      profession: "Odontología",
      qualification: 9,
    },
    {
      id: 7,
      name: ["Diego", "Ramirez"],
      age: 27,
      profession: "Psiquiatra",
      qualification: 8,
    },
    {
      id: 8,
      name: ["Laura", "Gutierrez"],
      age: 31,
      profession: "Pediatra",
      qualification: 9,
    },
    {
      id: 9,
      name: ["Miguel", "Diaz"],
      age: 26,
      profession: "Otra Profesión",
      qualification: 7,
    },
    {
      id: 10,
      name: ["Isabella", "Fernandez"],
      age: 33,
      profession: "Otra Profesión",
      qualification: 10,
    },
    {
      id: 11,
      name: ["Gabriel", "Torres"],
      age: 34,
      profession: "Otra Profesión",
      qualification: 8,
    },
    {
      id: 12,
      name: ["Elena", "Garcia"],
      age: 29,
      profession: "Radiologo",
      qualification: 7,
    },
    {
      id: 13,
      name: ["Juan", "Hernandez"],
      age: 31,
      profession: "Psiquiatra",
      qualification: 8,
    },
    {
      id: 14,
      name: ["Carmen", "Lopez"],
      age: 28,
      profession: "Odontología",
      qualification: 9,
    },
    {
      id: 15,
      name: ["Mateo", "Ramirez"],
      age: 36,
      profession: "Pediatra",
      qualification: 9,
    },
  ]);
});

app.get("/1", (req, res) => {
  res.send({
    id: 1,
    name: ["Keyner", "Jose"],
    age: 25,
    profession: "Radiologo",
    qualification: 9,
    nationality: {
      name: "Brasil",
      photo:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
  });
});

// app.get("/usuarios", (req, res) => {
//   res.send([]);
// });
const errorHandler = require("express-async-handler");

app.use(
  errorHandler(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      error: err.message,
    });
  })
);
