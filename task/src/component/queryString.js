import React, { useEffect } from "react";
import {useSearchParams} from 'react-router-dom'
import './useParams.css'

function SearchUser() {

  const [searchParams, setSearchParams] = useSearchParams();
  console.warn(searchParams.get('age'))
  console.warn(searchParams.get('city'))
  const age = searchParams.get('age')
  const city = searchParams.get('city')

  useEffect(()=>{
    console.log(age,city)
  },[age,city])

  return (
    <div>
      <h1>Age is:{age}</h1>
      <h1>city is:{city}</h1>
      <button className="btns" onClick={() => setSearchParams({age:'47',city:'vns'})}>Change!</button>
    </div>
  )
}

export default SearchUser




