import React,{ useEffect } from 'react';
import axios from 'axios'
import {useSelector,useDispatch}from 'react-redux'

const ListStudent = () =>{
    const students = useSelector(state => state.student)
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
    let URL = 'http://localhost/api/students'
     useEffect(() => {
        getStudents()
      }, [])

    const getStudents = async () => {
        const result = await axios.get(URL)
        console.log(result.data)
        dispatch({type : 'GET_STUDENT',state: result.data})
    }
    const deleteStudent = async (student_no)=>{
        await axios.delete(`http://localhost/api/students/${student_no}`)
        
     dispatch(
         {type:'DELETE_STUDENT',
         no: student_no})
        getStudents();
    }
    const updateStudent = async (student_no)=>{
        await axios.put(`http://localhost/api/students/${student_no}`,form)
     dispatch({
         type:'UPDATE_STUDENT',
         no: student_no,
         student:{...form,no:student_no}
        })

        getStudents();
    }

   

    const printStudent = () =>{
        if(students && students.length){
            return students.map((student,index)=>{
                return (
                    <li key = {index}>
                    {student.name} {student.surname}:
                    {student.id} Major: {student.Major} GPA:{student.GPA}<br/>
                    <button class="btn btn-warning" onClick = {()=>deleteStudent(student.no)}>delete </button>
                    <button class="btn btn-success" onClick = {()=>updateStudent(student.no)}>update </button>
                    </li>
                )
            })
        }
        else{
            return(<h1>No Data</h1>)
        }}
    
        return(
            <div>
            <ul>
                {printStudent()} 
            </ul>
            </div>
        )
            
    }

    
   

export default ListStudent