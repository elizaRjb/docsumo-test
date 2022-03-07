import { validator } from "./validator";

test("Verifies that field with value '   ' is empty", () => {
  const testInput = "   ";
  const expectedOutput = true;

  expect(validator.checkIsEmpty(testInput)).toBe(expectedOutput);
});

test("Verifies that field with value 'test' is not empty", () => {
  const testInput = "test";
  const expectedOutput = false;

  expect(validator.checkIsEmpty(testInput)).toBe(expectedOutput);
});

test("Verifies that email with value '   ' is not valid", () => {
  const testInput = "   ";
  const expectedOutput = {
    isValid: false,
    msg: "Please enter your email address",
  };

  expect(validator.validateEmail(testInput)).toStrictEqual(expectedOutput);
});

test("Verifies that email with value 'test@c.o' is not valid", () => {
  const testInput = "test@c.o";
  const expectedOutput = {
    isValid: false,
    msg: "Please enter a valid email address",
  };

  expect(validator.validateEmail(testInput)).toStrictEqual(expectedOutput);
});

test("Verifies that email with value 'abc_test@example.com' is valid", () => {
  const testInput = "abc_test@example.com";
  const expectedOutput = {
    isValid: true,
  };

  expect(validator.validateEmail(testInput)).toStrictEqual(expectedOutput);
});
