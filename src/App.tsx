import "./bootstrap.min.css";
import React, { Component } from "react";
import Header from "./components/Header";
import NewAppointment from "./components/NewAppointment";
import { AppointmentType } from "./AppointmentType";
import AppointementList from "./components/AppointementList";

type Props = {};

type State = {
  appointments: AppointmentType[];
};

export default class App extends Component<Props, State> {
  state: State = {
    appointments: [],
  };

  componentDidMount() {
    const appointmentsLS = localStorage.getItem("appointments");
    if (appointmentsLS) {
      this.setState({
          appointments: JSON.parse(appointmentsLS)
      });
    }
  }
  componentDidUpdate() {
    localStorage.setItem(
      "appointments",
      JSON.stringify(this.state.appointments)
    );
  }

  createNewAppointment = (data: AppointmentType) => {
    const appointments = [...this.state.appointments, data];
    this.setState({ appointments });
    console.log(data);
  };

  deleteAppointment = (id: any) => {
    console.log(id);
    const currentAppointments = [...this.state.appointments];
    const appointments = currentAppointments.filter((a) => a.id !== id);
    this.setState({ appointments });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Veterinary Patient Administrator" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment createNewAppointment={this.createNewAppointment} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointementList
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}
