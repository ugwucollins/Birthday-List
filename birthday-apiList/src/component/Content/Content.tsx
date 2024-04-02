'use client';
import React, {  useEffect, useState } from 'react'
import './content.css';
import Loading from '../Loading/Loading';
import { GrStatusGood } from "react-icons/gr";


const Content = ({birthInput,handleDelete,isLoading}:any) => {
  
  // const date = new Date();
  // const year = date.getFullYear().toString();
  // const dat = `${document.getElementById('data')?.innerText.toString()}`;
  // const al = dat.slice(0,4);
  // const sub = +year - +al;
 

  const[select,setselect] = useState(0);
  const[del,setdel] = useState(true);
  return (
    <>
    {birthInput.length || isLoading?
      <div className='content'>
        {isLoading?
        <>
          <div className='loading'>
          <Loading />
          </div>
        </>
      :
          <div className='content-List'>
              {birthInput.map((index:any,selectIndex:any) => <div key={index.id} 
              className={selectIndex === select?'content-List-active':'content-List-div' }
              onClick={() => {
                setselect(selectIndex);
                {del||selectIndex === select? null:setdel(true)};
                }}>
                <>
                  <p className='list'>{index.list}</p>
                  <p className='date' id='data'>{index.dat}</p>
                  <div className='button'>
                  {del || selectIndex  !== select?
                      <span onDoubleClick={() => {
                        setdel(false)
                        setselect(selectIndex)
                      }}> 
                        <GrStatusGood />
                      </span>
                      :
                      <button tabIndex={0} role='button' className='btn' onClick={() =>handleDelete(index.id)}>
                        Delete
                      </button>
                    }
                  </div>
                </>
              
              </div>)}
          </div>
      }
      </div>
      :
      <div className='empty'>
        Birthday Todolist is Empty
      </div>
      }
    </>

  )
}


export default Content;