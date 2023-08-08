import React from 'react'
import {Link} from 'react-router-dom'
const Result = () => {
  return (
    <div className='main-container'>
        <h1 className='header'>Gold Price Prediction Result</h1>
        
            <form className='form-container'>
               
                <Link to='/content'> 
               <input className='btn-2 mar' type="submit" value="Ok !"/>
                </Link>
            </form>
    </div>
  )
}

export default Result