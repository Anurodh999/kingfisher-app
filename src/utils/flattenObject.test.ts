import { flattenObject } from "./flattenObject";

describe("flattenObject utility", () => {
it("flattens a deeply nested object", () => {
const obj = {
a: 1,
b: { c: "hello", d: { e: true } },
f: [{ g: "world" }]
};

const result = flattenObject(obj);

expect(result).toEqual({
"a": 1,
"b.c": "hello",
"b.d.e": true,
"f.0.g": "world"
});
});

it("handles empty object", () => {
expect(flattenObject({})).toEqual({});
});

it("handles arrays of primitives", () => {
const obj = { nums: [10, 20] };
const result = flattenObject(obj);
expect(result).toEqual({ "nums.0": 10, "nums.1": 20 });
});

it("handles null and undefined", () => {
const obj = { x: null, y: undefined };
expect(flattenObject(obj)).toEqual({ "x": null, "y": undefined });
});
});