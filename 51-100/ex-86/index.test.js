import {checkAngle, terms} from "./index.js";

describe("поведение задачи 86", () => {
    it("когда ноль вернуть acute", () => {
        expect(checkAngle(0)).toBe(terms.acute)
    });
})