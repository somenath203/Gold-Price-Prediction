import React from 'react'
import '../Styles/form.css'
import {Link} from 'react-router-dom'
const Content = () => {
  return (
    <div className='main-container'>
        <h1 className='header'>Gold Price Prediction</h1>
        
            <form className='form-container'>
                <label for="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <label for="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/><br/>
                <br/>
                <Link to='/result'>
                <input className='btn-2' type="submit" value="Submit"/>
                </Link>
            </form>
    </div>
  )
}

export default Content