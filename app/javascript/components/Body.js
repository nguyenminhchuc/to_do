import React from "react"
import PropTypes from "prop-types"
import AllTasks from './AllTasks';
class Body extends React.Component {
  render () {
    return (
      <React.Fragment>
        <AllTasks/>
      </React.Fragment>
    );
  }
}

export default Body
