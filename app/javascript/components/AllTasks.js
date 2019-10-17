import React from "react"
import PropTypes from "prop-types"
class AllTasks extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [] };
  }

  componentDidMount() {
    $.getJSON('/tasks.json', (response) => { this.setState({ tasks: response }) });
  }

  render() {
    var tasks = this.state.tasks.map((task, index) => {
      return (
        <div key={task.id + index}>
          <h3>{task.name}</h3>
          <p><strong>status:</strong> {task.status}</p>
          <p>{task.details}</p>
        </div>
      )
    });

    return (
      <div>
        {tasks}
      </div>
    )
  }
}

export default AllTasks
