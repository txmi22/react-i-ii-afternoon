import React, {Component} from 'react'
import '../App.css';

function Display(props){
    let list = props.data.favoriteMovies.map((element, index) =>{
        return(
            <li key={index}>{element}</li>
        )
    })
    return(
        <div className='container-one'>
        <h2 className='cardNumber'>1/25</h2>
            <h2 className='name'><u>{props.data.name.first} {props.data.name.last}</u></h2>
            <p className='bold'>From:</p> <span className='reg'>{props.data.city}, {props.data.country}</span>
            <p className='bold'>Job Title:</p> <span className='reg'>{props.data.title}</span>
            <p className='bold'>Employer:</p> <span className='reg'>{props.data.employer}</span>
            <p className='bold'>Favorite Movies:</p> <ol className='reg'>{list}</ol>
        </div>
    )
}
export default Display