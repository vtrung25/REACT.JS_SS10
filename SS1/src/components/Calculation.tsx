import React, { Component } from 'react'

export default class Calculation extends Component {
  render() {
    const sum = (firstNum: number, secondNum: number): number =>{
        return firstNum + secondNum
      }
    const subtraction = (firstNum: number, secondNum: number): number =>{
        if(firstNum>=secondNum){
            return firstNum - secondNum
        }else{
            return secondNum - firstNum
        }
      }
      const multiplication = (firstNum: number, secondNum: number): number =>{
        return firstNum * secondNum
      }
      const division = (firstNum: number, secondNum: number): number =>{
        return firstNum / secondNum
      }
    return (
      <>
      <h1>Danh sách kết quả</h1>
      <ul>
        <li><h2>10+10={sum(10,10)}</h2></li>
        <li><h2>10-10={subtraction(10,10)}</h2></li>
        <li><h2>10*10={multiplication(10,10)}</h2></li>
        <li><h2>10/10={division(10,10)}</h2></li>
      </ul>
      </>
    )
  }
}
