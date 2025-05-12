import React, { useEffect, useState } from 'react'

function Suggestions() {

    const [profile,setProfile]=useState(null);
    const [suggestions,setSuggestions]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/profile')
        .then(data=>data.json())
        .then(data=>setProfile(data))
        .catch(err=>console.log(err))

        fetch('http://localhost:3001/suggestions')
        .then(data=>data.json())
        .then(data=>setSuggestions(data))
        .catch(err=>console.log(err))

    },[]);

  return (
    <div>
        <div className="suggestions w-75 m-4">
        {profile ? 
        <div className="d-flex">
            <img className="dp rounded-circle" src={profile.profile_picture} alt="Profile" />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
        </div>
        : <p>Loading</p>}

        <div className="d-flex">
            <p>Suggested fo you</p>
            <b className="ms-auto">See all</b>
        </div>


        {suggestions.length>0?(
        <div>
           {suggestions.map((suggestion)=>(
            <div  key={suggestion.id}>
               <div className="d-flex">
               <img className="dp rounded-circle" src={suggestion.profile_picture} alt="Profile" />
               <h5>{suggestion.username}</h5>
               <p className="text-primary ms-auto">Follow</p>
               </div>  
            </div>
           ))}
        </div>
      ):(
        <div>
          Loading
        </div>
      )}


    </div>
    
    </div>
   
  )
}

export default Suggestions