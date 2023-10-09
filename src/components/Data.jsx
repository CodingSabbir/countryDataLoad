import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import Card from "./Card";
import facedata from "./Data.json"


const Data = () => {
    const [countris,setCountris]=useState([])
    const [card,setCard]=useState([])
    const [data,setData]=useState([])
    // console.log(card)
    console.log(data)
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> {
        setCountris(data)
    const names=data.map(country => country.name)
        console.log(names)
       
        })
    },[]);

 useEffect(()=>{
    setData(facedata)
 },[])
   
    const addCountry =(country)=>{
        const newCard=[...card,country]
        setCard(newCard)
    }
 
    return (
        <>
        <div>
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

                    {
                       
                        data.map((dataItems,i)=>(
                            <div className="border p-5 m-5" key={i}> 
                             <h1 className="text-[30px] font-mono">Team Builder</h1>
                            <h1> <span className="font-semibold">Email :</span> {dataItems.email}</h1>
                            <p> <span className="font-semibold">First Name :</span> {dataItems.first_name}</p>
                            </div>
                        ))
                    }
        </div> 
            
        </>
    );
};

export default Data;