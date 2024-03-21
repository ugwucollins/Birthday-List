import React, { useState } from 'react'
import './Form.css'

const Form = ({addBirth,setaddBirth,handleSubmit,addDate,setaddDate}:any) => {
 
  return (
    <div className='Form'>
      <form action="" method="get" className='Form-inputs' onSubmit={handleSubmit}>

        <div className='Form-inputs-div'>
          <label className='Form-inputs-div-label' htmlFor="name">Name:</label>
          <input className='Form-inputs-div-input' type="text" 
          value={addBirth} placeholder='Your FullName' id='name' autoFocus required maxLength={30} minLength={10} 
          onChange={(e) => {
            setaddBirth(e.target.value)
          }}
           />
        </div>
        
        <section className='Form-inputs-section'>
          <div className='Form-inputs-section-div'>
            <label className='Form-inputs-section-div-label' htmlFor="Date">Date:</label>
            <input  className='Form-inputs-section-div-input' type="Date" placeholder='Your FullName' id='Date' required
            value={addDate}
            onChange={(e) => {
              setaddDate(e.target.value)
            }}
            />
          </div>
          <button type="submit" className='Form-inputs-section-btn'>Add</button>
        </section>

      </form>
    </div>
  )
}

export default Form;