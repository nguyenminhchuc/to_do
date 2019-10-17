import React from "react"
import PropTypes from "prop-types"
class NewTask extends React.Component {
  handleClick() {
    let name    = this.refs.name.value;
    let details = this.refs.details.value;

    $.ajax({
      url: '/tasks',
      type: 'POST',
      data: { task: { name: name, details: details } },
      success: (response) => {
        this.props.handleSubmit({name: name, details: details, status: 0});
      }
    });
  }
  render () {
    return (
      <React.Fragment>
        <div>
        <input ref='name' placeholder='Enter name of task' />
        <input ref='details' placeholder='Details' />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
      </React.Fragment>
    );
  }
}

export default NewTask
