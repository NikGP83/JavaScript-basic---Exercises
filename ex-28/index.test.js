import {
  checkTwoNums
} from "./index.js";
describe("Поведение решения задачи 28", () => {
  describe("когда оба числа в пределах диапазона", () => {
    const a = 50;
    const b = 99;
    it("возвращает true", () => {
      expect(checkTwoNums(a, b)).toBe(true);
    });
  });
  describe("когда первое из чисел меньше нижней границы диапазона", () => {
    it("возвращает true", () => {
      const a = 50 - 1;
      const b = 99;
      expect(checkTwoNums(a, b)).toBe(true);
    });
  });
  describe("когда первое из чисел больше верхней границы диапазона", () => {
    it("возвращает true", () => {
      const a = 99 + 1;
      const b = 99;
      expect(checkTwoNums(a, b)).toBe(true);
    });
  });
  describe("когда когда второе число ниже нижней границы вне диапазона",()=>{
    it("возвращает false",()=>{
      const a = 50;
      const b = 50-1;
      expect(checkTwoNums(a,b)).toBe(true);
    });
  })
  describe("когда когда второе число выше верхней границы вне диапазона",()=>{
    it("возвращает false",()=>{
      const a = 50;
      const b = 99+1;
      expect(checkTwoNums(a,b)).toBe(true);
    });
  });
  it("когда оба числа вне диапазона",()=>{
    const a = 50-1;
    const b = a;
    expect(checkTwoNums(a,b)).toBe(false)
  })
})