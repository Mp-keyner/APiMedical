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
      nombre: "Juan Pérez",
      apellido: "López",
    },
    {
      nombre: "María Sánchez",
      apellido: "García",
    },
  ]);
});
