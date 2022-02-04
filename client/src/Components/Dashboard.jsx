import React from 'react'
import {useState, useEffect} from 'react'

import '../Styles/Dashboard.css'
import StudentCard from './StudentCard'
import Searchbar from './Searchbar'

const Dashboard = () => {

    const [studentList, setStudentList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [input, setInput] = useState('')

    const fetchStudentList = async () => {
        try{
           const response = await fetch(`https://api.hatchways.io/assessment/students`)
           const students = await response.json()
           setStudentList(students)
           setFilteredList(students.students)
        }catch(error){
            console.log('error: ', error)
        }
    }

    const updateSearch = (input) => {
        let formattedInput = input.replace(/ /g, "").toLowerCase()
        let filteredList = studentList.students.filter((elem) => {
            let fullName = elem.firstName + elem.lastName
            return fullName.toLowerCase().includes(formattedInput)
        })
        setInput(input)
        setFilteredList(filteredList)
    }
    
    useEffect(async() => {
        fetchStudentList()
    }, [])

    return(
        <>
            <Searchbar 
                input={input} 
                onChange={updateSearch}
            />
            <div className='main'>

                {filteredList && filteredList.map(elem => (
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