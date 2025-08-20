import React from 'react'
function formatName(user:{
    firstName: string;
    lastName: string;
}): string{
    return `${user.firstName} ${user.lastName}`;
}
function FormatName() {
    const user = {
        firstName: "Việt Trung",
        lastName: "Nguyễn",
    }
  return (
    <>
    Họ và tên: {formatName(user)}
    </>
  )
}

export default FormatName