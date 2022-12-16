// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import { ImageWord } from './ImageWord';
import NavBar from './NavBar';
import QuizValide from './QuizValide';

export function Text(props) {
    //props.isAdmin
    
    return (
        <>
            <NavBar isAdmin={props.isAdmin}/>
            {ImageWord(props.page, false)}
            {ImageWord(props.page + "Quiz", true)}
            <QuizValide/>
        </>
    )
}
