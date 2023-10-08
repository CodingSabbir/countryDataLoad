import React from 'react';

const Card = (props) => {
    const card= props.addCard

    // let totallPopulation = 0;
    // for(let i = 0; i < card.length; i++) {
    //  const country= card[i]
    //  totallPopulation= totallPopulation + country.population
   
    // }
    
    const totallPopulation=card.reduce((sum,country)=>sum+country.population,0)
    return (
        <div>
            <h2 className='text-center'>This is  Card : {card.length}</h2>
            <p className='text-center'>country population :{totallPopulation}</p>
        </div>
    );
};

export default Card;




