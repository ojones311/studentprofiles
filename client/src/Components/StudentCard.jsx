import React from 'react'

const StudentCard = ({student}) => {
    return(
        //Need id grades city name email and pic
        <div>
            <div>
                <p>{student.lastName}</p>
                <p>{student.firstName}</p>
                <h2></h2>
                <h5></h5>
                <p></p>
            </div>
            <div>
                <h5>{student.company}</h5>
            </div>
        </div>
    )
}

export default StudentCard