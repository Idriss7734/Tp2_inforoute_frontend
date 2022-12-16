// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export class Selection extends Component {

    constructor(props) {
        super(props);
    }
    // Is the main page.
    render() {
        console.log('Loading Images');
        return <div>
            <NavBar isAdmin={this.props.isAdmin}/>
            <center className="d-flex flex-column">
                <Container className="bg-dark rounded-3 text-white" style={{ width: '200rem', height: '3rem'}}>
                    <h1 className="header mb-2">
                        <FontAwesomeIcon icon={faArrowUp} size="lg" className='text-info'/>
                        <b>CHOISIR UN TEXTE</b>
                        <FontAwesomeIcon icon={faArrowUp} size="lg" className='text-info'/>
                    </h1>
                </Container>
            </center>            
        </div>
        
    }
}