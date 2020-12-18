import React, { useContext, useState } from 'react'
import './Filter.css'
import { StoryContext } from '../StoryContext';



function Filter() {

  const { startDate,setStartDate} = useContext(StoryContext)

  console.log("datttttaes", startDate)

    return (
        <div className="container">
        <h4>Filter</h4>
        <div className="filterContainer">    

          <input 
            type="date" 
            name="start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            max="2020-12-31"       
          />
          
                    
        </div>
      </div>
    )
}

export default Filter
