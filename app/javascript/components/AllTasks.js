import React from "react"
import PropTypes from "prop-types"
class AllTasks extends React.Component {

  render() {
    var tasks = this.props.tasks.map((task, index) => {
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
