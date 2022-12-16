// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React, {Component} from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
//custom components
import {Navigation} from './Navigation';


/**
 * The class endle user account creation.
 */
class CreationCompte extends Component {

    constructor(){
        super();
        this.state = {inputType : "password", icon : faEyeSlash, inputType2 : "password", icon2 : faEyeSlash};
        
        this.show = false;
        this.show2 = false
        this.inputUSRN = "";
        this.inputPWD = "";
        this.inputPWD2 = "";
        this.inputDate = "";
    }
    
    toggleShow(){
        this.show = !this.show;
        this.setState({inputType : this.show ? "text" : "password", icon : this.show ? faEye : faEyeSlash});
    }

    toggleShow2(){
        this.show2 = !this.show2;
        this.setState({inputType2 : this.show2 ? "text" : "password", icon2 : this.show2 ? faEye : faEyeSlash});
    }

    gotoConnection(){
        this.props.navigate('/');
    }

    createProfile(){
        if(this.inputPWD.value == this.inputPWD2.value){
            alert('Votre profile à été créé. \nVous pouvez vous connecter.');
            this.props.navigate('/');
        }else{
            alert('Votre mot de passe doit être le même dans les 2 champs.');
        }

       
    }

    render(){
        return (
            <center className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <Container className="ps-4 pb-4 pt-3 bg-dark rounded-3 text-white" style={{ width: '20rem', height: '27rem'}}>
                    <h1 className="header mb-2"><b>Inscription</b></h1>
                    <br/>
                    {/*input username*/}
                    <input type="text" id="usrn" placeholder="Nom d'utilisateur" ref={input => this.inputUSRN = input}></input>
                    <br/><br/>
                    {/*input password*/}
                    <input type={this.state.inputType} id="pwd" name="pwd" placeholder="Mot de passe" size="15" ref={input => this.inputPWD = input}></input>
                    <Button className="btn-secondary" onClick={this.toggleShow.bind(this)}>
                        <FontAwesomeIcon icon={this.state.icon}></FontAwesomeIcon>
                    </Button>
                    <br/><br/>
                    {/*input repeat password*/}
                    <input type={this.state.inputType2} id="pwd2" name="pwd2" placeholder="Confirmer le mot de passe" size="15" ref={input2 => this.inputPWD2 = input2}></input>
                    <Button className="btn-secondary" onClick={this.toggleShow2.bind(this)}>
                        <FontAwesomeIcon icon={this.state.icon2}></FontAwesomeIcon>
                    </Button>
                    <br/>
                    {/*label birthdate*/}
                    <label>Date de naissance</label>
                    <br/>
                    {/*input birthdate*/}
                    <input type="date" id="date" name="date" className="text-center" ref={input => this.inputDate = input} style={{ width: '13.5rem'}}></input>
                    <br/><br/>
                    {/*btn go back to connection page*/}
                    <Button className="btn-secondary btn-xl mt-2" onClick={this.gotoConnection.bind(this)}>
                        <FontAwesomeIcon icon={faRotateLeft} size="lg"/>
                    </Button>
                    {/*the button below is for padding because bootstrap is a jerk and normal padding doesn't work*/}
                    <Button className="btn-dark btn-padding mt-2" disabled></Button>
                    {/*btn create profile*/}
                    <Button className="btn-secondary btn-xl mt-2" onClick={this.createProfile.bind(this)}>
                        <FontAwesomeIcon icon={faCheck} size="lg"/>
                    </Button>
                </Container>
            </center>
        );
    }
}

export default Navigation(CreationCompte);
