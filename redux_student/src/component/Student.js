import React from 'react'
import ListStudent from './ListStudent'
import axios from 'axios'
import {useSelector,useDispatch}from 'react-redux'


const Student =()=>{
    const dispatch = useDispatch();
    const form = useSelector(state=>state.form)
    const students = useSelector(state=>state.student)

    const addStudent = async ()=>{
        await axios.post(`http://localhost/api/students`,form)
        dispatch({
            type: 'ADD_STUDENT',student:{
                no: students.length > 0 ? students[students.length-1].no+1 : 0,
                ...form
            }
        })
    }


    
    return(
        <div>
            <ListStudent/>
            {form.name} {form.surname} {form.id} {form.Major} {form.GPA} 
            <br/>
            <input
                type = "text"
                placeholder = "Name"
                onChange={(e)=>dispatch({type:'CHANG_NAME',name: e.target.value})}
            /><br/>
             <input
                type = "text"
                placeholder = "Surname"
                onChange={(e)=>dispatch({type:'CHANG_SURNAME',surname: e.target.value})}
            /><br/>
            <input
                type = "text"
                placeholder = "ID"
                onChange={(e)=>dispatch({type:'CHANG_ID',id: e.target.value})}
            /><br/>
            <input
                type = "text"
                placeholder = "Major"
                onChange={(e)=>dispatch({type:'CHANG_MAJOR',Major: e.target.value})}
            /><br/>
            <input
                type = "number"
                placeholder = "GPA"
                onChange={(e)=>dispatch({type:'CHANG_GPA',GPA: e.target.value})}
            /><br/>
            <button class="btn btn-secondary" onClick = {addStudent}>add </button>

        </div>
    )
}
export default Student