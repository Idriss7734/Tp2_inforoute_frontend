// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

/**
 * Create a component that on click validate the quiz answer.
 */
class QuizValide extends React.Component {

  constructor(props) {
    super();
    this.state = {
      score: ""
    }
  }

  // Validate the quiz.
  validateQuiz = () => {
    let boxGood = document.getElementsByClassName(true);
    let boxBad = document.getElementsByClassName(false);

    let score = 0;

    for (const element of boxGood) {
      if (element.checked) {
        score++;
      } else {
        score--;
      }
    }
    for (const element of boxBad) {
      if (element.checked) {
        score--;
      }
    }
    alert(score)
    return score
  }

  onClick() {
    this.setState({score: this.validateQuiz()});
    
  }

  render(props) {
    let score
    
    return (
      <div><center><br/>
        <Button className="btn-success" onClick={ score = this.onClick.bind(this)}>
          <b>Vérifier les réponses </b>
          <FontAwesomeIcon icon={faCheck} id="Quiz" ></FontAwesomeIcon>    
        </Button>
      </center></div>
    );
  }
}

export default QuizValide;