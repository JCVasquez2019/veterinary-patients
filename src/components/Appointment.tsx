import React from 'react'
import { AppointmentType } from "../AppointmentType";

type Props = {
    key:any,
    appointmentData:AppointmentType,
    deleteAppointment:any
}

const Appointment = (props: Props) => {
  return (
    <div className='media mt-3'>
        <div className='media-body'>
        <h3 className="mt-0">{props.appointmentData.pet}</h3>
            <p className="card-text"><span>Pet Owner Name: </span> {props.appointmentData.owner} </p>
            <p className="card-text"><span>Date: </span> {props.appointmentData.date} </p>
            <p className="card-text"><span>Hour: </span> {props.appointmentData.hour} </p>
            <p className="card-text"><span>Symptoms: </span> </p>
            <p className="card-text">{props.appointmentData.symptoms}</p>

            <button
                className="btn btn-danger"
                onClick={() => props.deleteAppointment(props.appointmentData.id)}
            >Borrar &times;</button>
        </div>
    </div>
  )
}

export default Appointment