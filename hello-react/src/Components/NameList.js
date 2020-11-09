import React from 'react';
import Person from './Person';

const NameList =  () => {
    const Names = [
        {
            id: 1,
            name: 'Apurva',
            age: 20,
            skill: 'Django', 
        },
        {
            id: 2,
            name: 'Shubh',
            age: 20,
            skill: 'NodeJS', 
        },
        {
            id: 3,
            name: 'Devesh',
            age: 21,
            skill: 'Java', 
        },
        {
            id: 4,
            name: 'Manas',
            age: 20,
            skill: 'DSA', 
        }
    ]

    const personList = Names.map(person => <Person key={person.id} person={person}/>)
    return (
        <div> {personList} </div>
    );
}

export default NameList