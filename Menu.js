import React from "react";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.chosenValue = this.chosenValue.bind(this);
  }
  chosenValue(e) {
    const value = e.target.value;
    this.props.onClick(value);
  }
  render() {
    return (
      <form onClick={this.chosenValue}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
