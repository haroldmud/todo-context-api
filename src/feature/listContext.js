import { createContext, useEffect, useState } from "react";

export const ListContext = createContext();


const ProvideList =(props)=>{
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [check, setCheck]=useState(-1);
  const [edit, setEdit] = useState(null); 
  const [alerte, setAlerte] = useState(false)
  const [limit, setLimit] = useState(false)
  const [newItem, setNewItem] = useState("")
  useEffect(()=>{
    const display = setTimeout(()=>{
      setAlerte(false)
    }, 3000)

    return ()=> clearTimeout(display);
  },[alerte])
  useEffect(()=>{
    const displaying = setTimeout(()=>{
      setLimit(false)
    }, 3000)
    return ()=> clearTimeout(displaying);
  },[limit])
  function handleList(e){
    e.preventDefault();
    item.split("").length < 1 ? setAlerte(true) : item.split("").length > 20 ? setLimit(true) : setList(current => [...current, {text: item, checked: false, trash: false}]);
    item.split("").length > 20 ? setItem(current => current) : setItem("");
  }

  function handleDeletion(index){
    const newList = [...list];newList.splice(index,1);
    setList(newList);setCheck(-1)
  }

  function handleItem(behavior){
    setItem(behavior.target.value);
  }

  function handleCheck(collection, idx){
      if(check !== idx) {
        setCheck(idx)
        collection.checked = true
      }else{setCheck(null)
        collection.checked = false
      } 
  }

  function handleNewItem(x){
    setNewItem(x.target.value)
  }

  function handleEdit(collection, idx){
    if(edit !== idx){
      setEdit(idx);
      setNewItem(collection.text)
    } else {setEdit(null)}
}

function handleDiverse(){
  setEdit(null); setCheck(null); setNewItem("");
}

const value = {list,item,check,edit,alerte,limit,newItem, handleList, handleCheck, handleDeletion, handleEdit, handleItem, handleNewItem, handleDiverse}
    return(
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}

export default ProvideList