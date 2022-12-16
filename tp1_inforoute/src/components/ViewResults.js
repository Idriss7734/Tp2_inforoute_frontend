// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavBar from './NavBar';

export class ViewResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        console.log('Loading Images');
        return <div>
            <NavBar isAdmin={this.props.isAdmin}/>
            <center className="d-flex flex-column">
                <Container className="bg-dark rounded-3 text-white" style={{ width: '200rem', height: '3rem'}}>
                    <h1 className="header mb-2">
                    <b>Resultats</b>
                    <br/>
                    <h2 className='text-black'>Utilisateur: 3e lien: 4/5</h2>
                    </h1>
                </Container>
            </center>            
        </div>
        
    }
}