// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/TasksActions";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
//images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


/**
 * 
 * @param {*} props 
 * @returns A bottun that send user information on logging to the redux store.
 * TODO: communication with database for user validation.
 */
const AddTask = (props) => {
  return (
    <Button className="btn-secondary btn-xl mt-2" onClick={() => props.add(document.getElementById("usrn").value) } id="submit">
      <FontAwesomeIcon icon={faArrowRight} size="lg" />
    </Button>
  );
};

export default connect(null, { add: addTask })(AddTask);