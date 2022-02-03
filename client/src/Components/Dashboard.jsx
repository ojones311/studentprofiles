import React from 'react'
import {useState, useEffect} from 'react'

import '../Styles/Dashboard.css'
import StudentCard from './StudentCard'
import Searchbar from './Searchbar'

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

    useEffect(async() => {
        fetchStudentList()
        
    }, [])
    return(
        <>
            <Searchbar />
            <div className='main'>
                {studentList && studentList.students.map(elem => (
                    <>
                        <StudentCard student={elem}></StudentCard>
                    </>
                ))}
            </div>
        </>
    )
}

export default Dashboard