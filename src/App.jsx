import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)

  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
        { featPupId && (
        <div className='PupInfo'>
          <h2 className='PupName'>{featuredPup.name}</h2>
          <ul className='PupInfoList'>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    </>
  )
}

export default App
