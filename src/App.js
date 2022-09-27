import './App.css';
import Item from './component/Item';
import axios from 'axios';
import Popup from './component/Popup'
import {useState, useEffect} from 'react';

function App() {

  const [text,setText] = useState("");
  const [pop,setPop] = useState(false);
  const [utext,setUtext] = useState([]);
  const [todo,setTodo] = useState([]);
  

  useEffect(()=>{
    axios.get("https://todo-list-pr.herokuapp.com/api/v1/todo")
    .then((res)=>{setTodo(Object.values(res.data.todo))})
    .catch((err)=>{console.log(err);})
  })


  const addUpdate=()=>{

      axios.post("https://todo-list-pr.herokuapp.com/api/v1/todo",{text})
      .then((res)=>{
        console.log(res.data);
        setText("")
      })
      .catch((err)=>{console.log(err);})
  }

  const deleteTodo=(_id)=>{
    axios.delete("https://todo-list-pr.herokuapp.com/api/v1/todo/"+_id)
      .then((res)=>{
        console.log(res.data);
        setText("")
      })
      .catch((err)=>{console.log(err);})
  }
  const updateTodo=(id , text)=>{
     setPop(true)
     setUtext([id,text]);
  }

  

  return (
    <div>

      

      <div className="container">
      <h1>ToDo List</h1>
      <div className="top">
      <input type="text" placeholder="Write something..." value={text}
        onChange={(e)=>setText(e.target.value)}
      />
    <div className="add" onClick={addUpdate}>Add</div>
      </div>
      
    <div className="list"> 
      {
      todo.map(item=> <Item 
      key={item._id} 
      text={item.text}
      remove={()=>deleteTodo(item._id)}
      update={()=>updateTodo(item._id, item.text)}
      /> )}
    </div>
    </div>
    
    
    <Popup trigger ={pop} text={utext} setTrigger={setPop}>
        
        </Popup>

    </div>
  );
}

export default App;
