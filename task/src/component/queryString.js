import React from "react";
import {useSearchParams} from 'react-router-dom'

function SearchUser() {

  const [searchParams] = useSearchParams();
  console.warn(searchParams.get('age'))
  console.warn(searchParams.get('city'))
  const age = searchParams.get('age')
  const city = searchParams.get('city')

  return (
    <div>
      <h1>Age is:{age}</h1>
      <h1>city is:{city}</h1>
    </div>
  )
}

export default SearchUser




