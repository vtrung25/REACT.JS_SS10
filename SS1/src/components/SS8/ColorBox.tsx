import { Component } from "react";
interface Props {
  color: string;
}
export default class ColorBox extends Component<Props> {
  render() {
    const { color } = this.props;
    const boxStyle = {
      width: "200px",
      height: "200px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    };
    return <div style={boxStyle}>Box</div>;
  }
}