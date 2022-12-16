// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16



import React, { Component } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import {faCheck, faX} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation } from './Navigation';
import Dropzone from './DragDrop';



class AdminEdit extends Component{
    constructor(props){
        super(props);
        this.state = {phrases : [], questions : []};
        this.idPhrases = 0;
        this.idQuestions = 0;
        this.idAnswer = 0;
        this.prevPage = this.props.location.state.loc;
        this.clearBtn = false;
        
        if(this.prevPage == '/Selection' || this.prevPage == '/Results'){
            this.addPhrases();
            this.addQuestions();
        }else{
            let lienData = require('./../texte' + this.prevPage + '.json');
            let lienDataQuiz = require('./../texte' + this.prevPage + 'Quiz.json');

            lienData.texte?.map((phrase) => (
                this.addPhrases(phrase.phrase)
            ))

            lienDataQuiz.texte?.map((question)  => (
                this.addQuestions(question.phrase, question.reponse)
            ))
            this.clearBtn = true;
        }
    }

    addPhrases(input){
        if(typeof input != "string"){
            input = null;
        }
        let arr = this.state.phrases;
        arr.push(<div><input className="awap" type="text" id={"p" + this.idPhrases} placeholder="Nouvelle phrase" value={input}></input><Dropzone /></div>); 
        
        this.setState({phrases : arr});
        
        this.idPhrases++;
    }

    addQuestions(qinput, rinput){
        if(rinput == null){
            qinput = null;
            rinput = new Array(4).fill("");
        }
        let arr = this.state.questions;
        arr.push(
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                                <Accordion.Header>Question {this.idQuestions + 1}</Accordion.Header>
                                <Accordion.Body>
                                    <input className="awap" type="text" id={"q" + this.idQuestions} placeholder="Nouvelle question" value={qinput}></input>
                                    <Dropzone />
                                </Accordion.Body>
                                <Accordion.Body>
                                    <FontAwesomeIcon icon={faCheck} className="text-success"></FontAwesomeIcon>
                                    <input className="awap" type="text" id={"a" + this.idAnswer} placeholder="Réponse 1 (bonne réponse)"  value={rinput[0].phrase}></input>
                                    <Dropzone />
                                </Accordion.Body>
                                <Accordion.Body>
                                    <FontAwesomeIcon icon={faX} className="text-danger"></FontAwesomeIcon>
                                    <input className="awap" type="text" id={"a" + (this.idAnswer + 1)} placeholder="Réponse 2"  value={rinput[1].phrase}></input>
                                    <Dropzone />
                                </Accordion.Body>
                                <Accordion.Body>
                                    <FontAwesomeIcon icon={faX} className="text-danger"></FontAwesomeIcon>
                                    <input className="awap" type="text" id={"a" + (this.idAnswer + 2)} placeholder="Réponse 3" value={rinput[2].phrase}></input>
                                    <Dropzone />
                                </Accordion.Body>
                                <Accordion.Body>
                                    <FontAwesomeIcon icon={faX} className="text-danger"></FontAwesomeIcon>
                                    <input className="awap" type="text" id={"a" + (this.idAnswer + 3)} placeholder="Réponse 4" value={rinput[3].phrase}></input>
                                    <Dropzone />
                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
            </div>
        ); 
        
        this.setState({questions : arr});
        this.idQuestions++;
        this.idAnswer += 4;
    }

    showTxt(){
        let txt = "Phrases:\n";
        let indAns = 0;

        for(let i = 0; i < this.idPhrases; i++){
            txt+= '\t'+ document.getElementById("p" + i).value + '\n';
        }

        txt += "Questions:\n"

        for(let i = 0; i < this.idQuestions; i++){
            txt+= '\t'+ document.getElementById("q" + i).value + ":\n";
            for(let j = 0; j < 4; j++){
                txt+= '\t\t'+ document.getElementById("a" + (j + indAns)).value + "\n";
            }
            indAns += 4;
        }
        alert(txt);
    }

    clearData(){
        this.setState({phrases : [], questions : []});
        this.idPhrases = 0;
        this.idQuestions = 0;
        this.idAnswer = 0;
    }

    render(){
        let ret;
        
        if(true){//add prop isadmin
            ret =
                <>
                    <NavBar/><br/>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" id="test">
                            <Accordion.Header>Phrases</Accordion.Header>
                            <Accordion.Body id="item1">{this.state.phrases}</Accordion.Body>
                            <Accordion.Body><Button className='btn-light' onClick={this.addPhrases.bind(this)}>add phrase</Button></Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" id="item2">
                            <Accordion.Header>Questions et réponse</Accordion.Header>
                            <Accordion.Body>{this.state.questions}</Accordion.Body>
                            <Accordion.Body><Button className='btn-light' onClick={this.addQuestions.bind(this)}>add question</Button></Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br/><Button className="btn-success" onClick={this.showTxt.bind(this)}>show text</Button>
                    <Button className="btn-success" onClick={this.clearData.bind(this)}>clear text</Button>
                </>
        }   
        return(ret)
    }
    
}

export default Navigation(AdminEdit);