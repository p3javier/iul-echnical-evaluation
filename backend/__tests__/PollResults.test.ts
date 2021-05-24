const supertest = require("supertest");

const appTest = require("../app");

const { matchers, matchersWithOptions } = require("jest-json-schema");

const schema = require("../schema.json");

expect.extend(matchers);

expect.extend(
  matchersWithOptions({
    verbose: true,
  })
);

describe("GET /polls", () => {
  it("should respond with a 200 status code", async () => {
    const response = await supertest(appTest).get("/polls");
    expect(response.statusCode).toBe(200);
  });

  it("should specify json in the content type header", async () => {
    const response = await supertest(appTest).get("/polls");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});

describe("JSON schema validation module", () => {
  it("has the correct JSON schema", async () => {
    const response = await supertest(appTest).get("/polls");
    expect(response.body).toMatchSchema(schema);
  });
});
