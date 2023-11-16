const express = require("express");
const app = express();
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

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
      profession: "Radiologia",
      qualification: 9,
      nationality: {
        name: "Colombia",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F4.png?alt=media&token=8e842824-5dfd-4e22-a5f4-92650de0f4c1",
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
      nationality: {
        name: "Chile",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F7.png?alt=media&token=e01d1d92-c38c-4efe-9a18-fc2376dc56d7",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F1.png?alt=media&token=d90a9e3c-74c1-4aa1-94d4-22c9cda37bff",
    },
    {
      id: 3,
      name: ["Carlos", "Gomez"],
      age: 30,
      profession: "Psiquiatria",
      qualification: 9,
      nationality: {
        name: "Argentina",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F2.png?alt=media&token=244509a0-c0b3-4117-815d-3f29fcbeaed8",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F10.png?alt=media&token=c34171bb-a7d9-4c16-9a7c-557ce23921d4",
    },
    {
      id: 4,
      name: ["Ana", "Rodriguez"],
      age: 35,
      profession: "Radiologia",
      qualification: 7,
      nationality: {
        name: "República Dominicana",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F3.png?alt=media&token=9674d926-c87e-42e3-8df8-578a2cde29b6",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F2.png?alt=media&token=cf4441b6-e521-491d-94f4-9f394b8d6959",
    },
    {
      id: 5,
      name: ["Luis", "Martinez"],
      age: 32,
      profession: "Pediatria",
      qualification: 8,
      nationality: {
        name: "Bolivia",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F6.png?alt=media&token=f13dedd6-e1ab-494e-ac7b-fb8d757f0880",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F12.png?alt=media&token=763ead81-6dca-4f16-ad5a-c3d5ab6915ac",
    },
    {
      id: 6,
      name: ["Sofia", "Perez"],
      age: 29,
      profession: "Odontología",
      qualification: 9,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F5.png?alt=media&token=196f931a-5f2f-473e-967d-0466f80c0a8b",
    },
    {
      id: 7,
      name: ["Diego", "Ramirez"],
      age: 27,
      profession: "Medico",
      qualification: 8,
      nationality: {
        name: "Ecuador",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F5.png?alt=media&token=54c3f694-7cbf-46d8-bdc4-2259048cc759",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F13.png?alt=media&token=25d4d73a-78a1-40b9-81ea-d8f5275bef2c",
    },
    {
      id: 8,
      name: ["Pedro", "Gutierrez"],
      age: 31,
      profession: "Psicriatia",
      qualification: 9,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F14.png?alt=media&token=d8ef4d27-5076-42d6-b43e-5678df9ff26e",
    },
    {
      id: 9,
      name: ["Miguel", "Diaz"],
      age: 26,
      profession: "Otra Profesión",
      qualification: 7,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      id: 10,
      name: ["Isabella", "Fernandez"],
      age: 33,
      profession: "Otra Profesión",
      qualification: 10,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      id: 11,
      name: ["Gabriel", "Torres"],
      age: 34,
      profession: "Otra Profesión",
      qualification: 8,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      id: 12,
      name: ["Elena", "Garcia"],
      age: 29,
      profession: "Radiologo",
      qualification: 7,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      id: 13,
      name: ["Juan", "Hernandez"],
      age: 31,
      profession: "Psiquiatra",
      qualification: 8,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      id: 14,
      name: ["Carmen", "Lopez"],
      age: 28,
      profession: "Odontología",
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
      id: 15,
      name: ["Mateo", "Ramirez"],
      age: 36,
      profession: "Pediatra",
      qualification: 9,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
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
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://a-pi-medical.vercel.app",
    changeOrigin: true,
  })
);
