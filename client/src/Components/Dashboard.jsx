import React from 'react'
import {useState, useEffect} from 'react'

import '../Styles/Dashboard.css'
import StudentCard from './StudentCard'
import Searchbar from './Searchbar'

const Dashboard = () => {

    const [studentList, setStudentList] = useState(null)
    const [input, setInput] = useState('')

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

    //Loop through student obj and see if searchTerm is included in the name 
    const updateSearch = (input) => {
        let filteredList =  studentList.filter((elem) => {
            
        })
        setInput(input)
    }

    useEffect(async() => {fetchStudentList()}, [])

    return(
        <>
            <Searchbar 
                input={input} 
                onChange={updateSearch}
            />
            <div className='main'>
                {studentList && studentList.students.map(elem => (
                    <>
                        <StudentCard 
                            key={elem.id} 
                            student={elem}
                        />
                    </>
                ))}
            </div>
        </>
    )
}

export default Dashboard