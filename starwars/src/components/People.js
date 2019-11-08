import React from 'react';

function People(props) {
    // console.log(props);
    return (
        <div> 
            <h1>{props.person.name}</h1>
            <p>Height: {props.person.height}</p>
            <p>Mass: {props.person.mass}</p>
            <p>Hair Color: {props.person.hair_color}</p>
            <p>Skin Color: {props.person.skin_color}</p>
        </div>
    )
}

export default People