import { Component } from "react";

export default class Calculation extends Component {
  render() {
    function sum(num1: number, num2: number): number {
      return num1 + num2;
    }
    function sub(num1: number, num2: number): number {
      return num1 - num2;
    }
    function mul(num1: number, num2: number): number {
      return num1 * num2;
    }
    function divide(num1: number, num2: number): number | string {
      if (num2 == 0) {
        return `không xác định`;
      }
      return num1 / num2;
    }
    return (
      <>
        <h2>Danh sách kết quả</h2>
        <ul>
          <li>10 + 10 = {sum(10, 10)}</li>
          <li>10 - 10 = {sub(10, 10)}</li>
          <li>10 * 10 = {mul(10, 10)}</li>
          <li>10 / 10 = {divide(10, 10)}</li>
        </ul>
      </>
    );
  }
}