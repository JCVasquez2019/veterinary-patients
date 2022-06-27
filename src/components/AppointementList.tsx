import React from "react";
import { AppointmentType } from "../AppointmentType";
import Appointment from "./Appointment";

type Props = {
  appointments: AppointmentType[]
  deleteAppointment:any
};

const AppointementList = (props: Props) => {

    const headerList = Object.keys(props.appointments).length === 0? 'No appointments':'Appointment List'

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{headerList}</h2>
        <div className="lista-citas">
            {props.appointments.map(appointment =>(
                 <Appointment
                 key = {appointment.id}
                 appointmentData = {appointment}
                 deleteAppointment = {props.deleteAppointment}
                 ></Appointment>   
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppointementList;
