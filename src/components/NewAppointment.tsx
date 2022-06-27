import React, { Component } from "react";
import { AppointmentType } from "../AppointmentType";
import { v4 as uuidv4 } from "uuid";

type Props = {
  createNewAppointment: any;
};

type State = {
  appointment: AppointmentType;
  error: boolean;
};

const stateInitial = { 
  appointment: {
    id: "",
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
  },
  error: false,
}

export default class NewAppointment extends Component<Props, State> {
  state: State = {...stateInitial}

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { pet, owner, date, hour, symptoms } = this.state.appointment;

    // validate non-empty fields

    if (
      pet === "" ||
      owner === "" ||
      symptoms === "" ||
      date === "" ||
      hour === ""
    ) {
      this.setState({
        error: true,
      });
      return;
    }
    const newAppointment = { ...this.state.appointment };
    let myuuid = uuidv4();
    newAppointment.id = myuuid;
    this.props.createNewAppointment(newAppointment);
    this.setState({...stateInitial})
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-6">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">New Appointment</h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Please complete the form
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="mascota"
                  type="text"
                  className="form-control"
                  placeholder="Pet Name"
                  name="pet"
                  onChange={this.handleChange}
                  value={this.state.appointment.pet}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Pet Owner Name
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pet Owner Name"
                  name="owner"
                  onChange={this.handleChange}
                  value={this.state.appointment.owner}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.appointment.date}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder=""
                  name="hour"
                  onChange={this.handleChange}
                  value={this.state.appointment.hour}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Symptoms
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="symptoms"
                  placeholder="Describe the symptoms"
                  onChange={this.handleChangeTextArea}
                  value={this.state.appointment.symptoms}
                ></textarea>
              </div>
            </div>{" "}
            {/* form-group */}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Add New Appointment"
            />
          </form>
        </div>
      </div>
    );
  }
}
