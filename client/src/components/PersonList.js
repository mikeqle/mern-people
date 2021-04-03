import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {

    const { people, removeFromDom } = props;
    
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    };

    return (
        <div>
            {people.map((person, idx)=>{
                return <p key={idx}>{person.lastName}, {person.firstName}
                    <Link to={"/people/" + person._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                </p>
                
            })}
        </div>
    )
}
export default PersonList;