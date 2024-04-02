import React, { useState } from 'react'
import './Form.css'
const Form = ({addBirth,setaddBirth,handleSubmit,addDate,setaddDate,errAdd,isvalid,birthInput}:any) => {
  
  const all = birthInput.map((list:any) => list.list);
  return (
    <div className='Form'>
     {isvalid ? 
     <>
        <div className='con'>
          <p style={{fontWeight:'bold'}}>Congratulation: &nbsp;<span>{all[0]}</span>!</p>
        </div>
        <form action="" method="get" className='Form-inputs' onSubmit={handleSubmit}>

            <div className='Form-inputs-div'>
              <label className='Form-inputs-div-label' htmlFor="name">Name:</label>
              <input className='Form-inputs-div-input' type="text" 
              value={addBirth} placeholder='Your FullName' id='name' autoFocus  maxLength={30} minLength={10} 
              onChange={(e) => {
                setaddBirth(e.target.value)
              }}
              />
            </div>
            
            <section className='Form-inputs-section'>
              <div className='Form-inputs-section-div'>
                <label className='Form-inputs-section-div-label' htmlFor="Date">Date:</label>
                <input  className='Form-inputs-section-div-input' type="Date" placeholder='Your FullName' id='Date' 
                value={addDate}
                onChange={(e) => {
                  setaddDate(e.target.value)
                }}
                />
              </div>
              <button type="submit" className='Form-inputs-section-btn'>Add</button>
            </section>

          </form> 
          {errAdd ?
        <p style={{color:'red',fontSize:'18px',fontWeight:'normal',marginTop:'10px',marginBottom:'0px',transition:'all 1s',textTransform:'capitalize'}}>{errAdd}</p>
        :
        null}
      </>
      :
      <>
      <form action="" method="get" className='Form-inputs' onSubmit={handleSubmit}>

          <div className='Form-inputs-div'>
            <label className='Form-inputs-div-label' htmlFor="name">Name:</label>
            <input className='Form-inputs-div-input' type="text" 
            value={addBirth} placeholder='Your FullName' id='name' autoFocus  maxLength={30} minLength={10} 
            onChange={(e) => {
              setaddBirth(e.target.value)
            }}
            />
          </div>
          
          <section className='Form-inputs-section'>
            <div className='Form-inputs-section-div'>
              <label className='Form-inputs-section-div-label' htmlFor="Date">Date:</label>
              <input  className='Form-inputs-section-div-input' type="Date" placeholder='Your FullName' id='Date' 
              value={addDate}
              onChange={(e) => {
                setaddDate(e.target.value)
              }}
              />
            </div>
            <button type="submit" className='Form-inputs-section-btn'>Add</button>
          </section>

        </form> 
        <p style={{color:'red',fontSize:'18px',fontWeight:'normal',marginTop:'10px',marginBottom:'0px',transition:'all 1s',textTransform:'capitalize'}}>{errAdd}</p>

      </>
     }
    </div>
  )
}

export default Form;