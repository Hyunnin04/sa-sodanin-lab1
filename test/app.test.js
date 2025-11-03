const request = require("supertest"); // Import the Supertest library for HTTP assertions
const app = require("../app"); // Import the Express application instance
const { expect } = require("chai"); // Import the Chai assertion library

describe("GET /", () => {
  it("should reture Hello, GitHub Actions!", async () => {
    const res = await request(app).get("/"); // Make a GET request to the root route
    expect(res.status).to.equal(200);
    expect(res.text).to.equal("Hello, GitHub Actions!"); // Assert the response text
  });
});
