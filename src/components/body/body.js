import React, { useState } from 'react'

import './body.css';
const Body = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    // event.preventDefault();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log("ngfdngtfvfuyjh", wordEntered)

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div className="text">Create Your Own </div>
      <div className="text-1">Opportunity</div>
      <div className="landing">
        Complete your profile,apply for jobs- Get rewards in DRP
        <div><a className='anchors-1' href="/terms">*T&C apply</a></div>
      </div>
      <div className="body-inputs">
        <div>
          <input className='body-job'
            type="text"
            name="Job"
            placeholder="Job title or keyword"
          />
        </div>
        <div>
          <input className='body-location'
            type="text"
            name="Job"
            placeholder="Location"
          />
        </div>
      </div>
      <div>
      <button className='body-btn'>Search</button>
      </div>
    </div>
  )
}

export default Body