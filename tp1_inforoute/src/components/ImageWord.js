// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import { ImageQuiz } from './ImageQuiz';
import AudioTest from './Audio.js';
import { Accordion } from 'react-bootstrap';

export function ImageWord(path, isQuiz) {

    let lienData = require('./../texte/' + path + '.json');
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    let images = getImagePaths(require.context(("./../images/"), false, /\.(png|jpe?g|svg)$/));
    let name = 'sentence_0';
    let test;
    let ret;
    
    // Check if the phrase is a question or not, then load the texte and image that is link to the texte.
    if(!isQuiz){// quiz = false
        ret = 
        <div>
            <h1><AudioTest path={path} name="title"></AudioTest><b><u>{lienData.titre}</u></b></h1>
            {
                test = lienData.texte?.map((phrase, index) => (
                        <>
                            <div key={index}>
                                <br />
                                {
                                    phrase.imageListe?.map((imageName, indexImage) => (
                                        <u key={imageName} id={imageName}>
                                            <u key={indexImage}>
                                                <img id="imageWord" src={images[imageName + '.png']} />
                                            </u>
                                        </u>

                                    ))
                                }
                                <br />
                                <AudioTest path={path} name={(name = getAudioName(name, index))} />
                                {phrase.phrase}
                            </div>
                    </>
                ))
            }
        </div>
    }else{ //quiz = true
        test = lienData.texte?.map((phrase, index) => (
                <Accordion.Body>
                    {//je sais pas ca sert a quoi mais ca fait un genre de titre underlined pour les images des questions?????
                        // phrase.imageListe?.map((imageName, indexImage) => (
                        //     <u key={imageName} id={imageName}>
                        //         {/* <u key={indexImage}>
                        //             {imageName}
                        //         </u> */}
                        //     </u>
                        // ))
                    }
                    {ImageQuiz(phrase, path, index)}
                </Accordion.Body>
            ))
        test = shuffle(test);
        
        let questions = test.map((question, index) => (
            <Accordion.Item eventKey={index}>
                <Accordion.Header>Question {index+1}</Accordion.Header>  
                {question}
            </Accordion.Item>
        ))
        
        ret =
        <div>
            <center><h1><b>Questionnaire</b></h1></center>
            <Accordion defaultActiveKey="0">
                {questions}
            </Accordion>
        </div>
        
    }
    return (ret);
}

export function getAudioName(name, index) {
    name = name.replace(index.toString(), (index + 1).toString())
    return name;
}

export function getImagePaths(i) {
    let images = {};
    i.keys().map((item) => { images[item.replace('./', '')] = i(item); });
    return images;
}
