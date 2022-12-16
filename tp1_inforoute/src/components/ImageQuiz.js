// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import { getImagePaths } from './ImageWord';
import { getAudioName } from './ImageWord';
import { Container } from 'react-bootstrap';
import AudioTest from './Audio.js';

export function ImageQuiz(data, path, num) {
    const images = getImagePaths(require.context('./../images/', false, /\.(png|jpe?g|svg)$/));
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    let name = 'question';
    let nameReponse = 'response_1';
    let questionPath = "question_" + (num + 1);

    let pathQuiz = path.replace("Quiz", "")
    
    //data.reponse = shuffle(data.reponse);
    // Load question and all quiz response and return it.
    let choix =
        <Container id={data.phrase}>
            <center className='border rounded'>
                <h3><u><AudioTest path={pathQuiz + "/" + questionPath} name={name} /><b>{data.phrase}</b></u></h3>
            </center>
            {
                shuffle(data.reponse.map((choix, indexRep) => (
                    <div className="check" id={indexRep}>
                        {
                            choix.imageListe.map((imageName, indexImage) => (
                                <u key={indexImage}>
                                    {
                                        imageName == images ? (
                                            null
                                        ) : (
                                            <img id="imageWord" src={images[imageName + '.png']} />
                                        )
                                    }
                                </u>
                            ))
                        }
                        <br/>
                        <AudioTest path={pathQuiz + "/" + questionPath} name={nameReponse = getAudioName(nameReponse, indexRep)}/>
                        <input type="checkbox" value={indexRep} className={choix.checkbox}/>
                        {choix.phrase}
                    </div>
                )))    
            }
            
        </Container>
    return (choix);
}