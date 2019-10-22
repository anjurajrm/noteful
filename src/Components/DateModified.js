import React from "react";

class DateModified extends React.Component {
  render() {
    return (
      <div className="date-modified">
        <p>Date Modified: {this.props.date.substring(0, 10)}</p>
      </div>
    );
  }
}
export default DateModified;
