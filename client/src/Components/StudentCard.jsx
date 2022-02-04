import React from 'react'
import {useState} from 'react'
import '../Styles/StudentCard.css'

const StudentCard = ({student}) => {

    const [expandCard, setExpandCard] = useState(false)

    const calculateAvgGrade = () => {
        let avgGrade = student.grades.reduce((a,b) => {
           return parseInt(a) + parseInt(b)
       }) / student.grades.length 
       return Math.round(avgGrade)
    }
    
    const toggleGrades = () => {
        setExpandCard(!expandCard)
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
            <div className='expand-button'>
                <button onClick={toggleGrades}>+</button> 
            </div>
            {expandCard ? (
                <div className='more-grades'>
                    <h5>{'Grades: '}</h5>
                    {student.grades.map((elem) => <p>{elem}</p>)}
                </div>
                ) : null
            }
        </div>
    )
}

export default StudentCard