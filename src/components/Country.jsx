

const Country = (props) => {
const country = props.country
const addCountry = props.handleAddCountry
console.log(props)


    return (
        <>
         <div className="text-center my-20">
            <h1 className="mt-5 font-semibold">{country.altSpellings[1]}</h1>
            <p>{country.latlng[0]}</p>
            <img className="mx-auto" src={country.flags.png} alt="" />
            <button className="border bg-slate-300 mt-3 p-3" onClick={()=> addCountry(props.country)}>Add Country:</button>
         </div>
        </>
    );
};

export default Country;



  