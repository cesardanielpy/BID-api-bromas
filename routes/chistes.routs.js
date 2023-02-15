const express = require("express");
const { listarChistes, crearChistes, actualizarChiste, eliminarChiste, chisteRandom } = require("../controllers/chistes.controllers");
const Chistes = require("../models/chistes.models");
const app = express();

app.get("/api/jokes/new",listarChistes )

app.post("/api/jokes/new", crearChistes)

app.put("/api/jokes/new/:id", actualizarChiste)

app.delete("/api/jokes/new/:id", eliminarChiste)

app.get("/api/jokes/new/:id", chisteRandom)


module.exports = app;