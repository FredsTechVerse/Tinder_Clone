import React,{useState,useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios';//Makes http request super simple to work with.


function TinderCards() {

//This state or this object array keeps track of all the people.
    const [people,setPeople]= useState([]);

useEffect(()=>{
    const fetchData= async () =>{
 const req= await axios.get('tinder/cards');

 console.log(req);

 setPeople(req.data);
    }
fetchData()
},[])



    const swiped = (direction,nameToDelete)=> {

        console.log(`removing ${nameToDelete} , ${direction}`)

    }
 
    const outOfFrame = (name)=>{
        console.log(` ${name} left the screen! `)

    }
    return (
        <div className="tinderCards">

            {/* We kinda loop over the object array and render a tinder card for every person that is in like our box>So lets go... */}
        <div className="tinderCards_cardContainer">
          
            {people.map((person)=>{
                return (
                      
                <TinderCard 
                className ="swipe"
                key = {person.name} 
                preventSwipe= {["up","down"]} 
                onSwipe = {(dir)=>swiped(dir,person.name)} 
                onCardLeftScreen= {()=>{outOfFrame(person.name)}}
                >
               
                <div style ={{backgroundImage:`url(${person.imgUrl})`}} 
                className = "card">

                    <h3>{person.name}</h3>
                </div>
                </TinderCard>

            )})}
             
            </div>


        </div>
    );
}

export default TinderCards;
