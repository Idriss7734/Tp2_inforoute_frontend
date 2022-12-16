// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
//custom component
import store from '../store/index.js'

/**
 * Is the navbar component.
 * Let the user navigate on the website.
 * @returns Add navigation bar to user interface.
 */
export default function NavBar() {


    let titres = require('./../texte/Titres.json');
    const titresTxt = [];
    const btnEdit = [];
    let state = store.getState()
    let accountName = "Utilisateur";
    const location = useLocation();


    // Add texte title to navbar.
    titres.forEach(data =>{
        titresTxt.push(
            <Dropdown.Item>
                <Nav.Link as={NavLink} exact to={"/" + factor(data.Titre)} replace><b className='text-black'>{data.Titre}</b></Nav.Link>
            </Dropdown.Item>
        )
    });

    // Check if the user is admin.
    if(state.tasks.value == "admin"){
        let pathname = location.pathname;
        
        btnEdit.push(<Nav.Link as={NavLink} exact to='/AddText' state={{loc: pathname}} replace><div className='text-danger text-center'><u>Modifier texte</u></div></Nav.Link>);
        btnEdit.push(<Nav.Link as={NavLink} exact to='/Results' replace><div className='text-danger text-center'><u>Voir Resutlats</u></div></Nav.Link>);

        //add "ajouter texte" in the dropdown if isAdmin
        titresTxt.push(
            <Dropdown.Item>
                <Nav.Link as={NavLink} exact to='/AddText' state={{loc: "/Selection"}} replace><b className='text-danger text-center'><u>Ajouter un texte</u></b></Nav.Link>
            </Dropdown.Item>
        )

        accountName = "Admin";
    }

    return(
        <Nav className="me-auto bg-light border rounded-0" expand="lg">
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic" className='border rounded-0'>
                    <b>{accountName}</b>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Nav.Link className="border" as={NavLink} exact to="/SettingsCompte" replace>
                            <FontAwesomeIcon className='text-black' icon={faGear}></FontAwesomeIcon><b className='text-black'> Settings</b>
                        </Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Nav.Link className="border" as={NavLink} exact to="/" replace>
                            <FontAwesomeIcon className='text-black' icon={faArrowUpFromBracket} style={{transform: 'rotate(270deg)' }}></FontAwesomeIcon><b className='text-black'> Déconnexion</b>
                        </Nav.Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic" className='border rounded-0'>
                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                    <b> Textes</b>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {titresTxt}
                </Dropdown.Menu>
            </Dropdown>
            {btnEdit}
        </Nav>
    )
}

// Normalize texte title. 
export function factor(t) {
    t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    while(t.includes(" ")){
        t = t.replace(" ", '');
    }
    return t;
}
