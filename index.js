const express = require("express");
const app = express();
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/", (req, res) => {
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
      profession: "Medico",
      qualification: 7,
      nationality: {
        name: "Brasil",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F1.png?alt=media&token=2b3376b6-81ad-4505-b856-f3d7374615c4",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F15.png?alt=media&token=112dfe2e-af0a-47e1-9f88-f0e3be93aa84",
    },
    {
      id: 10,
      name: ["Andres", "Fernandez"],
      age: 33,
      profession: "Psiquiatria",
      qualification: 10,
      nationality: {
        name: "República Dominicana",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F3.png?alt=media&token=9674d926-c87e-42e3-8df8-578a2cde29b6",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F3.png?alt=media&token=72f4a18e-1075-422f-bc35-47e9a0a17291",
    },
    {
      id: 11,
      name: ["Oswaldo", "Perez"],
      age: 40,
      profession: "Radiologia",
      qualification: 8,
      nationality: {
        name: "Colombia",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F4.png?alt=media&token=8e842824-5dfd-4e22-a5f4-92650de0f4c1",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F4.png?alt=media&token=a9c6b891-281e-46dd-ab4d-0a9f91e9c521",
    },
    {
      id: 12,
      name: ["Elena", "Garcia"],
      age: 29,
      profession: "Pediatria",
      qualification: 7,
      nationality: {
        name: "Ecuador",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F5.png?alt=media&token=54c3f694-7cbf-46d8-bdc4-2259048cc759",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F6.png?alt=media&token=444cc8b9-0035-4893-adf9-f273fd5be168",
    },
    {
      id: 13,
      name: ["Carmen", "Lopez"],
      age: 31,
      profession: "Psiquiatria",
      qualification: 8,
      nationality: {
        name: "argentina",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F2.png?alt=media&token=244509a0-c0b3-4117-815d-3f29fcbeaed8",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F7.png?alt=media&token=599323ca-633a-484d-a93b-19bc76674fc8",
    },
    {
      id: 14,
      name: ["Juan", "Lopez"],
      age: 28,
      profession: "Odontología",
      qualification: 9,
      nationality: {
        name: "Bolivia",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F6.png?alt=media&token=f13dedd6-e1ab-494e-ac7b-fb8d757f0880",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F8.png?alt=media&token=7025fbe0-beb8-44f7-9b4d-02949c57919f",
    },
    {
      id: 15,
      name: ["Mateo", "Ramirez"],
      age: 36,
      profession: "Pedriatia",
      qualification: 9,
      nationality: {
        name: "Chile",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Banderas%2F7.png?alt=media&token=e01d1d92-c38c-4efe-9a18-fc2376dc56d7",
      },
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F9.png?alt=media&token=f481d5e5-d594-4a7e-86e7-170cf83573c9",
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

app.get("/pie", (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Archbivo_1.png',
      date: '2024-02-07',
      img: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/pie%2FOIG1%20(1).jpg?alt=media&token=453a2503-52ba-4081-aa66-7cc2e1d5aa01',
    },
    {
      id: 1,
      name: 'Archbivo_2.png',
      date: '2024-02-07',
      img: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/pie%2FOIG1%20(2).jpg?alt=media&token=91d44757-616b-442b-aed5-3685523aa7fd',
    },
    {
      id: 1,
      name: 'Archbivo_2.png',
      date: '2024-02-07',
      img: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/pie%2FOIG1%20(3).jpg?alt=media&token=3a226dd5-dc91-4990-a4c7-65e9283767c5',
    },
  ]);
});

app.get("/testimony", (req, res) => {
  res.send([
    {
      id: 1,
      name: ["Victor", "Fontalvo"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
      testimony:
        "Mi experiencia con el servicio fue excepcional. Desde el primer momento, recibí una atención cálida y personalizada que generó confianza. Los profesionales médicos mostraron un profundo conocimiento y empatía, abordando cada una de mis inquietudes con detalle y claridad. La instalación, equipada con tecnología de punta, garantizó un diagnóstico preciso y eficiente. En resumen, me sentí cuidado, comprendido y en manos de expertos comprometidos con mi bienestar integral. Una experiencia que superó todas mis expectativas.",
    },
    {
      id: 2,
      name: ["Luis", "Hernandez"],
      qualification: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F12.png?alt=media&token=763ead81-6dca-4f16-ad5a-c3d5ab6915ac",
      testimony:
        "Excelente atención y profesionalismo. Los médicos me brindaron un servicio de alta calidad, demostrando su compromiso con la salud de los pacientes. El trato personalizado y la dedicación a cada detalle hicieron que mi experiencia fuera positiva y reconfortante. Recomiendo ampliamente este servicio a todos aquellos que buscan atención médica de primera.",
    },
    {
      id: 3,
      name: ["María", "González"],
      qualification: 7,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F13.png?alt=media&token=25d4d73a-78a1-40b9-81ea-d8f5275bef2c",
      testimony:
        "Estoy agradecida por la excelente atención que recibí. El equipo médico demostró un alto nivel de conocimiento y habilidad en su campo. La clínica cuenta con instalaciones modernas y bien equipadas, lo que contribuyó a mi sensación de comodidad y confianza. Recomiendo a estos profesionales comprometidos con la salud y el bienestar de sus pacientes.",
    },
    {
      id: 4,
      name: ["Andrea", "Ramírez"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F14.png?alt=media&token=d8ef4d27-5076-42d6-b43e-5678df9ff26e",
      testimony:
        "Mi experiencia con el servicio médico fue extraordinaria. El personal mostró un alto nivel de profesionalismo y dedicación. La atención personalizada y el ambiente acogedor de la clínica crearon una experiencia positiva. Estoy agradecida por la calidad del servicio y la atención integral brindada por estos profesionales de la salud.",
    },
    {
      id: 5,
      name: ["Carlos", "Martínez"],
      qualification: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F15.png?alt=media&token=ea6d2d2f-1259-41c1-bb44-1d2da8d7694a",
      testimony:
        "Excelente servicio médico. Los médicos demostraron un profundo conocimiento y un enfoque centrado en el paciente. La clínica cuenta con tecnología de última generación, lo que garantiza un diagnóstico preciso y eficiente. Mi experiencia fue positiva y me sentí bien atendido en todo momento. Recomiendo este servicio a quienes buscan atención médica de calidad.",
    },
    {
      id: 6,
      name: ["Laura", "Fernández"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F16.png?alt=media&token=fa7f52e8-dc9f-4b0d-9de4-3096b7ac1c23",
      testimony:
        "La atención médica que recibí superó mis expectativas. Los profesionales de la salud demostraron un alto nivel de compromiso y dedicación. La clínica cuenta con instalaciones modernas y un ambiente acogedor. Recomiendo a estos médicos a quienes buscan atención médica de calidad en un entorno cálido y profesional.",
    },
    {
      id: 7,
      name: ["Sofía", "Pérez"],
      qualification: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F17.png?alt=media&token=bbe55b2a-2d94-4bf3-8c36-91a6e3f7778e",
      testimony:
        "Mi experiencia en esta clínica fue excepcional. Los médicos demostraron un profundo conocimiento y empatía. El servicio fue personalizado y centrado en el paciente. La clínica cuenta con instalaciones modernas y bien equipadas. Estoy agradecida por la atención médica de calidad que recibí.",
    },
    {
      id: 8,
      name: ["Juan", "Torres"],
      qualification: 7,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F18.png?alt=media&token=c9720c33-9ea2-4c41-bc2c-285b271a89ef",
      testimony:
        "Recomiendo ampliamente este servicio médico. Los profesionales de la salud mostraron un alto nivel de competencia y cuidado. La clínica cuenta con instalaciones modernas y un ambiente amigable. Mi experiencia fue positiva y me sentí bien atendido en todo momento. Gracias por su dedicación y profesionalismo.",
    },
    {
      id: 9,
      name: ["Carmen", "Gómez"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F19.png?alt=media&token=ff840dc4-2643-4932-aac8-9f74cda0a2d2",
      testimony:
        "La atención médica que recibí fue excepcional. Los médicos mostraron un alto nivel de conocimiento y empatía. La clínica cuenta con tecnología de última generación, lo que garantiza un diagnóstico preciso. Estoy agradecida por el servicio personalizado y la calidad de la atención recibida. Recomiendo a estos profesionales comprometidos con la salud.",
    },
    {
      id: 10,
      name: ["Miguel", "Rodríguez"],
      qualification: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F20.png?alt=media&token=48840c7b-cf1b-4461-9f8e-6633a2be4f16",
      testimony:
        "Excelente atención médica. Los médicos mostraron un profundo conocimiento y un enfoque centrado en el paciente. La clínica cuenta con instalaciones modernas y un ambiente acogedor. Mi experiencia fue positiva y me sentí bien atendido en todo momento. Recomiendo este servicio a quienes buscan atención médica de calidad.",
    },
    {
      id: 11,
      name: ["Elena", "Martínez"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F21.png?alt=media&token=80a99fb4-c1e9-418f-8a5d-40f25d5fb6c3",
      testimony:
        "Mi experiencia en esta clínica fue positiva en todos los aspectos. Los profesionales de la salud demostraron un alto nivel de competencia y dedicación. La clínica cuenta con tecnología de última generación, lo que contribuye a la precisión de los diagnósticos. Estoy agradecida por la atención médica de calidad y el trato personalizado.",
    },
    {
      id: 12,
      name: ["Pedro", "Fernández"],
      qualification: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F22.png?alt=media&token=32aaf4a1-e125-4a4f-95c7-c26f4d7497a0",
      testimony:
        "Recomiendo este servicio médico a todos. Los médicos demostraron un alto nivel de conocimiento y empatía. La clínica cuenta con instalaciones modernas y un ambiente amigable. Mi experiencia fue positiva y me sentí bien atendido en todo momento. Gracias por su compromiso con la salud de los pacientes.",
    },
    {
      id: 13,
      name: ["Isabella", "Hernández"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F23.png?alt=media&token=0f6dbd26-2edf-4702-bb19-630e9996e7f1",
      testimony:
        "Estoy agradecida por la excelente atención que recibí en esta clínica. Los profesionales de la salud mostraron un alto nivel de competencia y cuidado. La clínica cuenta con tecnología de última generación, lo que garantiza un diagnóstico preciso. Recomiendo a estos médicos comprometidos con la salud y el bienestar de sus pacientes.",
    },
    {
      id: 14,
      name: ["Gabriel", "Torres"],
      qualification: 8,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F24.png?alt=media&token=3c727c9c-5a05-46d8-bbfa-32a71789a30d",
      testimony:
        "Mi experiencia en esta clínica fue positiva en todos los aspectos. Los médicos demostraron un alto nivel de conocimiento y empatía. La clínica cuenta con tecnología de última generación, lo que contribuye a la precisión de los diagnósticos. Estoy agradecido por la atención médica de calidad y el trato personalizado.",
    },
    {
      id: 15,
      name: ["Ana", "Gómez"],
      qualification: 9,
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F25.png?alt=media&token=6c4409f4-cab2-49f0-8cd9-47d65dcbf191",
      testimony:
        "Recomiendo este servicio médico a todos. Los médicos demostraron un alto nivel de conocimiento y empatía. La clínica cuenta con instalaciones modernas y un ambiente amigable. Mi experiencia fue positiva y me sentí bien atendido en todo momento. Gracias por su compromiso con la salud de los pacientes.",
    },
  ]);
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
