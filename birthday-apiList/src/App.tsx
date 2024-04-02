import './App.css';
//http://localhost:3000/dateInput
import Content from "./component/Content/Content";
import Form from './component/Form/Form';
import { ReactNode, useEffect, useState } from "react";
import apiRequest from './component/apiRequest/apiRequest';
import Footer from './component/footer/Footer';

const localdate:any = localStorage.getItem('BirthApi');
const getingLocal = JSON.parse(localdate);

function App() {
  const API_URL = "http://localhost:3000/birthInput";
  
  const [birthInput,setbirthInput] = useState(getingLocal||[]);
  const [addBirth,setaddBirth] = useState('');
  const [addDate,setaddDate] = useState('');
  const [isLoading,setisLoading] = useState(true);
  const [erruse,seterruse] = useState(null);
  const [errAdd,seterrAdd] = useState<ReactNode>();
  const [isvalid,setisvalid] = useState(false);

birthInput.sort((a:any,b:any) => b.id - a.id);

 
useEffect(() => {
 const fetchBirth = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const birth = await response.json();
    // if (!response.ok) throw Error('Did not receive the expected data')
    setbirthInput(birth);
    seterruse(null);
  } catch (error:any) {
    console.log(error.stack);
    seterruse(error.message);
  }finally{
    setisLoading(false);
  }
 }

 setTimeout(() => {
  //fetchBirth();
  (async () => await fetchBirth())();
 },2000)
},[])


  

const addingBirth = async(list:any,dat:any) => {
  const id = birthInput.length ? birthInput[birthInput.length - 1].id + 1 : 1;
  const myBirth = {id , list, dat}
  const listBirth = [...birthInput, myBirth]
  setbirthInput(listBirth);
  //localStorage.setItem('BirthApi', JSON.stringify(listBirth))


  
  const postOptions = {
    method: 'post',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(myBirth)
  }

  const result = await apiRequest(API_URL, postOptions);
  if (result) seterruse(result);
}

const handleDelete = async(id:any) => {
  if (!id) return;
  const del = birthInput.filter((dat:any) => dat.id !== id);
  setbirthInput(del);
  //localStorage.setItem('BirthApi', JSON.stringify(del))
  console.log(`key has been deleted${id}`);

  const deleteOptions = { method: 'DELETE' };
  const requrl = `${API_URL}/${id}`;
  const result = await apiRequest(requrl, deleteOptions);
  if (result) seterruse(result);

}
const vals = () => {
  try {
    if (addBirth === '' || addDate === '') {
        setisvalid(false);
         throw Error;
    } else if(addDate >= '2006-01-01') {
      setisvalid(false);
      throw  Error;
    } else {
      setisvalid(true);
      addingBirth(addBirth,addDate);
    }
  } catch (error:any) {
    seterrAdd(`Your FullName And Date is rquired! And aslo don't register if you are under the age of 18`);
  }
}
const handleSubmit = (e:any) => {
  e.preventDefault();
  console.log(addBirth);
  console.log(addDate);
  vals();
  setaddBirth('')
  setaddDate('')
}

  return (
    <main className="App">
     <div className='App-center'>
      <div className='App-center-div'>
        <h1 className='App-center-div-h1'>Birthday TodoList</h1>
        
        <Form addBirth={addBirth} addDate={addDate} setaddDate={setaddDate}
        setaddBirth={setaddBirth} birthInput={birthInput} handleSubmit={handleSubmit} errAdd={errAdd} isvalid={isvalid} />
        {erruse &&
        <div className='error'>
          <div className='err'>
            Did not receive the expected data
          </div>
        </div>
        }

        <Content birthInput={birthInput} handleDelete={handleDelete} 
        isLoading={isLoading} />

        <Footer />
      </div>
     </div>
    </main>
  )
}

export default App;
