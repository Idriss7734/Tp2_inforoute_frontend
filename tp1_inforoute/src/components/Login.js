// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React, { Component } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Tasks from "../components/IsAdminTask";

//custom components
import { Navigation } from './Navigation';
import store from '../store/index.js'

/**
 * Is the component that handle the login page.
 * It let the user login into is account.
 */
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { inputType: "password", icon: faEyeSlash };
        this.show = false;
        this.inputUSRN = "";
        this.inputPWD = "";
    }

    toggleShow() {
        this.show = !this.show;
        this.setState({ inputType: this.show ? "text" : "password", icon: this.show ? faEye : faEyeSlash });
        
    }

    gotoCreateProfile() {
        this.props.navigate('/Inscription');
    }

    render() {
        let name = ""
        let error
        // Check if the user as an admin account.
        store.subscribe(() => {
            let state = store.getState()
            console.log(state)
            if (state.tasks.value == "admin") {
                 this.props.navigate('/Selection');
            }
            else if (state.tasks.value == "user") {
                 this.props.navigate('/Selection');
            } else
                error = "Mauvais nom d'utilisateur ou mot de passe. \nVeuillez réessayer.";
        })
        return (
            <center className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <Container className="ps-4 pb-4 pt-3 bg-dark rounded-3 text-white" style={{ width: '20rem', height: '20rem' }}>
                    <h1 className="header mb-2"><b>Connexion</b></h1>
                    <br />
                    <input type="text" id="usrn" placeholder="Nom d'utilisateur" ref={input => this.inputUSRN = input}></input>
                    <br /><br />
                    <input type={this.state.inputType} id="pwd" name="pwd" placeholder="Mot de passe" size="15" ref={input => this.inputPWD = input}></input>
                    <Button className="btn-secondary" onClick={this.toggleShow.bind(this)}>
                        <FontAwesomeIcon icon={this.state.icon}></FontAwesomeIcon>
                    </Button>
                    <br /><br />

                    <Button className="btn-secondary btn-xl mt-2" onClick={this.gotoCreateProfile.bind(this)}>
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </Button>
                    {/*the button below is for padding because bootstrap is a jerk and normal padding doesn't work*/}
                    <Button className="btn-dark btn-padding mt-2" disabled></Button>
                    <Tasks data={name}/>
                    
                    <div>{error}</div>
                </Container>
            </center>
        );
    }
}


export default Navigation(Login);
