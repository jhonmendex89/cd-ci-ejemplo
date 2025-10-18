import app from "./index.js";
import request from "supertest";
import test from "node:test";

describe("Prueba de los endpoint de express", () => {
  test("GET / devolver un mensaje de bienvenida con estado 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
