import {checkAngle, terms} from "./index.js";

describe("поведение задачи 86", () => {
    it("returns acute", () => {
        expect(checkAngle(0)).toBe(terms.acute)
    });

    it("return acute", () => {
        expect(checkAngle(76)).toBe(terms.acute)
    });

    it("returns right", () => {
        expect(checkAngle(90)).toBe(terms.right)
    });

    it("returns obtuse", () => {
        expect(checkAngle(150)).toBe(terms.obtuse)
    });

    it("returns stright", () => {
        expect(checkAngle(180)).toBe(terms.straight)
    });

    it("returns error", () => {
        expect(checkAngle(209)).toThrow()
    });
});