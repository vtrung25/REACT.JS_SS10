import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    const user = {
        fullName: "Nguyễn Việt Trung",
        sex: "nam",
        date: "25/09/2006",
        email: "vtrugdzvcl2509@gmail.com",
        address: "Thanh Xuân, Hà Nội",
    };
    return (
      <>
      <h1>Thông tin cá nhân</h1>
      <ul>
        <li>
          Họ và tên: <b>{user.fullName}</b>
        </li>
        <li>
          Gioi tính: <b>{user.sex}</b>
        </li>
        <li>
          Ngày sinh: <b>{user.date}</b>
        </li>
        <li>
          Email: <b>{user.email}</b>
        </li>
        <li>
          Địa chỉ: <b>{user.address}</b>
        </li>
      </ul>
      </>
    )
  }
}
