import express from "express";

const app = express();
const port = 3000;

const estudiantes = [
  {
    id: 1,
    nombre: "Jhon",
    apellido: "mendez",
  },
  {
    id: 2,
    nombre: "Javier",
    apellido: "ramirez",
  },
  {
    id: 3,
    nombre: "julian",
    apellido: "alvarez",
  },
];

app.get("/", (req, res) => {
  const data = {
    message: "app inicial",
  };
  res.json(data);
});

app.get("/estudiantes", (req, res) => {
  res.json(estudiantes);
});

app.post("/estudiantes", (req, res) => {
  const body = req.body;
  estudiantes.push(body);
  res.json({
    message: "estudiante creado",
    data: body,
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

export default app;
