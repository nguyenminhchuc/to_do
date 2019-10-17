import React from "react"
import PropTypes from "prop-types"
import AllTasks from './AllTasks';
import NewTask from './NewTask';
class Body extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
    this.removeTask = this.removeTask.bind(this)
  }

  componentDidMount() {
    $.getJSON('/tasks.json', (response) => { this.setState({ tasks: response }) });
  }

  handleSubmit(task) {
    let newState = this.state.tasks.concat(task);
    this.setState({ tasks: newState })
  }

  handleDelete(id) {
    $.ajax({
      url: `/tasks/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeTask(id);
      }
    });
  }

  removeTask(id) {
    const newTasks = this.state.tasks.filter((task) => {
      return task.id != id;
    });

    this.setState({ tasks: newTasks });
  }

  render () {
    return (
      <React.Fragment>
        <NewTask handleSubmit={this.handleSubmit.bind(this)} />
        <AllTasks tasks={this.state.tasks} handleDelete={this.handleDelete}/>
      </React.Fragment>
    );
  }
}

export default Body
