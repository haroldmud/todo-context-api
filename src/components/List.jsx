import React from 'react'
import { useContext } from 'react'
import {VscDiffAdded} from "react-icons/vsc"
import {GrFormTrash} from  "react-icons/gr"
import {RiCheckboxBlankCircleLine} from "react-icons/ri"
import {RiCheckboxCircleLine} from "react-icons/ri"
import {AiOutlineEdit} from "react-icons/ai"
import {BiCheck} from "react-icons/bi"
import { ListContext } from '../feature/listContext'


function List() {
  
  const {list,item,check,edit,alerte,limit,newItem, handleList, handleCheck, handleDeletion, handleEdit, handleItem, handleNewItem, handleDiverse} = useContext(ListContext)
  return (
    <section className="flex justify-center">
      <div className="flex flex-col w-5/12 h-[100vh] justify-center">
        <div className=" border border-gray-500 h-[45rem]">
          <h1 className="text-center text-gray-200 font-bold text-7xl underline mt-6">TODO</h1>
          <div className="flex justify-center">
            <form className="border border-gray-500 w-3/5 flex gap-21 mt-12">
              <div className="w-11/12 flex flex-col justify-center p-2">
                <input value={item} onChange={(e)=>handleItem(e)} className="outline-none"  type="text" />
              </div>
              <div className="flex flex-col justify-center">
                <button onClick={handleList}><VscDiffAdded/></button>
              </div>
            </form>
          </div>
        <p className={`${alerte ? "block" : "hidden"} text-red-500 text-[0.7rem] italic ml-28`}>the field is empty</p>
        <p className={`${limit ? "block" : "hidden"} text-red-400 text-[0.7rem] italic ml-28`}>There must be less than 20 characters</p>
          <div className="flex justify-center">
            <div className={`flex w-6/12 h-[10rem] ${list.length < 6 ?"":"scroll overflow-y-scroll"}  justify-center mt-6`}>
              <ul className="border w-full h-fit flex flex-col gap-2">
                { list.map((collection, idx)=>
                  <li key={idx} className="group relative hover:bg-slate-400 flex justify-between px-1">
                    <label className="flex gap-4">
                      <div className="flex flex-col justify-center" onClick={()=> handleCheck(collection,idx)}>
                        {collection.checked ? <RiCheckboxCircleLine/> : <RiCheckboxBlankCircleLine/>}
                      </div>
                      <p className={`${idx === check || collection.checked===true ? "line-through":"underline" }`}>{ idx === edit && newItem.split("").length > 0 ? collection.text = newItem  : collection.text}</p>  
                    </label>
                    <div className={`${idx === edit ? "flex" :"hidden"} absolute w-full justify-center bg-slate-400 border -ml-1 gap-8`}>
                      <input
                        value={newItem}
                        onChange={(e)=>handleNewItem(e)}
                        className="w-9/12 placeholder:text-gray-500  placeholder:italic placeholder:text-[0.7rem] bg-slate-400 outline-none pl-8 border-blue-500 z-10 "  type="text" />
                      <div>
                      <button onClick={()=>{ handleDiverse(),collection.checked = false}} className="my-auto"><BiCheck/></button>
                      </div>
                    </div>
                  <div className="flex  justify-center gap-1">
                    <button className={check === idx || collection.checked === true ? "block text-[0.75rem] my-auto" : "hidden"} onClick={()=>handleEdit(collection,idx)}><AiOutlineEdit/></button>
                    <button className={check === idx || collection.checked === true ? "block" : "hidden"} onClick={()=>handleDeletion(idx)}><GrFormTrash/></button>
                  </div></li>) }
              </ul>
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default List