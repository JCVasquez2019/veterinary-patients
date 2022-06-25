import "./bootstrap.min.css";
import React, { Component } from "react";
import Header from "./components/Header";
import NewAppointment from "./components/NewAppointment";
import { Appointment } from "./AppointmentType";
type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  state = {
    appointments: [],
  };

  createNewAppointment = (data: Appointment) => {
    const appointments = [...this.state.appointments, data];
    this.setState({ appointments });
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Veterinary Patient Administrator" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment createNewAppointment={this.createNewAppointment} />
          </div>
        </div>
      </div>
    );
  }
}
