import React from 'react'
import {useEffect} from 'react'
import '../Styles/StudentCard.css'

// client/src/Styles/StudentCard.css
const StudentCard = ({student}) => {

    const calculateAvgGrade = () => {
        let avgGrade = student.grades.reduce((a,b) => {
           return parseInt(a) + parseInt(b)
       }) / student.grades.length 
       return Math.round(avgGrade)
    }
    
    return(
        //Need id grades city name email and pic
        <div className='main-card'>
            <div className='left-side'>
                <img src={student.pic}></img>
                <h4>{student.firstName}{' '}{student.lastName}</h4>
                
            </div>
            <div className='right-side'>
                <h5>{student.skill}{' at '}{student.company}</h5>
                <h5>{student.email}</h5>
                <h5>{'Average: '}{calculateAvgGrade()}</h5>
            </div>
        </div>
    )
}

export default StudentCard