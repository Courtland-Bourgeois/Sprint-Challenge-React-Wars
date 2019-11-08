import React from 'react';
import styled from 'styled-components';

const PeopleStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1%;
    width: 50%;
    height: auto;
    border-radius: 12px;
    background-color: #414a4c;
    color: #feda4a;
    box-shadow: 0px 5px 5px 0px;

        h1 {
            font-family: 'Merriweather Sans', sans-serif;
            font-size: 2rem;
            text-decoration: underline;
        }

        p {
            font-size: 1rem;
        }

`;

function People(props) {
    // console.log(props);
    return (

        <PeopleStyle> 
            <h1>{props.person.name}</h1>
            <p>Height: {props.person.height}</p>
            <p>Mass: {props.person.mass}</p>
            <p>Hair Color: {props.person.hair_color}</p>
            <p>Skin Color: {props.person.skin_color}</p>
        </PeopleStyle>
    )
}

export default People