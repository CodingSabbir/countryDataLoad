import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import Card from "./Card";


const Data = () => {
    const [countris,setCountris]=useState([])
    const [card,setCard]=useState([])
    console.log(card)

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> {
        setCountris(data)
    const names=data.map(country => country.name)
        console.log(names)
       
        })
    },[]);
   
    const addCountry =(country)=>{
        const newCard=[...card,country]
        setCard(newCard)
    }
 
    return (
        <>
             <h1 className="font-bold text-center mt-5"> country name:{countris.length}</h1>
               <h2 className="text-center">Add Country:{card.length}</h2>
             <Card addCard={card}/>
                <ul>
                {
                    countris.map((cntName)=>(
                    //    console.log(cntName)
                       <Country handleAddCountry={addCountry} country= {cntName} key={cntName.timezones}/>
                       
                    ))
                }
                </ul>
      

        </>
    );
};

export default Data;