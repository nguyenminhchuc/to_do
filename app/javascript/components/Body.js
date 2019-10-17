import React from "react"
import PropTypes from "prop-types"
import AllTasks from './AllTasks';
import NewTask from './NewTask';
class Body extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  componentDidMount() {
    $.getJSON('/tasks.json', (response) => { this.setState({ tasks: response }) });
  }

  handleSubmit(task) {
    let newState = this.state.tasks.concat(task);
    this.setState({ tasks: newState })
  }

  render () {
    return (
      <React.Fragment>
        <NewTask handleSubmit={this.handleSubmit.bind(this)} />
        <AllTasks tasks={this.state.tasks} />
      </React.Fragment>
    );
  }
}

export default Body
