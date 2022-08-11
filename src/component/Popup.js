import React from 'react'
import './pop.css';
import axios from 'axios';

export default function Popup(props) {
  const fupdate=(id,text)=>{
    axios.put("http://localhost:5000/api/v1/todo/"+id,{text})
      .then((res)=>{
        console.log(res.data);
        props.setTrigger(false)
      })
      .catch((err)=>{console.log(err);})
  }
  
  return (props.trigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <button className='close-btn' onClick={()=> props.setTrigger(false)}>close</button>
        <h4>Update</h4> 
        <br />
        <input type="text" value={props.text[1]}  onChange={(e)=>props.text[1]=e.target.value}/>
        <button className='update' onClick={()=>fupdate(props.text[0],props.text[1])}>update</button>    
      </div>
    </div>
  ):"";
}
