import React from 'react'
import {useState, useEffect} from 'react'

import StudentCard from './StudentCard'

const Dashboard = () => {

    const [studentList, setStudentList] = useState(null)

    const fetchStudentList = async () => {
        try{
           const response = await fetch(`https://api.hatchways.io/assessment/students`)
           const students = await response.json()
           console.log(students)
           setStudentList(students)
        }catch(error){
            console.log('error: ', error)
        }
    }

    const displayStudentList = () => {
        // Iterate through arr and display each key/value as a card 
    }
    useEffect(async() => {
        fetchStudentList()
        
    }, [])
    return(
        <div className='main'>
            <ul>
                {studentList && studentList.students.map(elem => (
                    <li>{elem.firstName}</li>
                ))}
            </ul>
            <p>Testing123</p>
        </div>
    )
}

export default Dashboard