import { Component } from "react";

export default class UserInfo extends Component {
  render() {
    const user = {
      fullName: "Đinh Quang Huy",
      gender: "Nam",
      dob: "04/03/2006",
      email: "Huidinne@gmail.com",
      address: "Hưng yên",
    };
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <ul>
          <li><b>Họ và tên:</b> {user.fullName}</li>
          <li><b>Giới tính:</b> {user.gender}</li>
          <li><b>Ngày sinh:</b> {user.dob}</li>
          <li><b>Email:</b> {user.email}</li>
          <li><b>Địa chỉ:</b> {user.address}</li>
        </ul>
      </div>
    );
  }
}