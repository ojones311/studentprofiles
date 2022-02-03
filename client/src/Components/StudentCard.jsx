import React from 'react'
import '../Styles/StudentCard.css'

// client/src/Styles/StudentCard.css
const StudentCard = ({student}) => {
    return(
        //Need id grades city name email and pic
        <div className='main-card'>
            <div className='left-side'>
                <img src={student.pic}></img>
                <h3>{student.firstName}{' '}{student.lastName}</h3>
                
            </div>
            <div className='right-side'>
                <h5>{student.skill}{' at '}{student.company}</h5>
                <h5>{student.email}</h5>
            </div>
        </div>
    )
}

export default StudentCard