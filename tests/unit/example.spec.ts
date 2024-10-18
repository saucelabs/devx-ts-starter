import { describe, expect, test } from "@jest/globals";
import { helloWorld } from "../../src";

describe("greetings", () => {
  test("says hello", () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});
