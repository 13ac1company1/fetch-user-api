import React, { Component } from 'react'
import '../src/App.css'
class App extends Component {

  state = {
    loading: true,
    person: null,
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    this.setState({
      person: data.results[0], loading: false
    })
  }

  render() {
    return (
      <div className={`App`}>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
          <hr/>
            <div>Name
              <div>
                Title: {this.state.person.name.title}<br />
                First Name: {this.state.person.name.first}<br />
                Last Name: {this.state.person.name.last}</div></div>
            <hr/> 

            <div>DOB
              <div>
                Birth date: {this.state.person.dob.date}<br />
                Age: {this.state.person.dob.age}</div></div>
            <hr/>

            <div>Location
              <div>
                Country: {this.state.person.location.country}<br />
                Street: {this.state.person.location.street.number + ' ' + this.state.person.location.street.name}<br />
                City: {this.state.person.location.city}<br />
                State: {this.state.person.location.state}<br />
                Postcode: {this.state.person.location.postcode}<br />
                Coordinates:  Lat {this.state.person.location.coordinates.latitude}  Long{this.state.person.location.coordinates.longitude}</div></div>
            <hr/>

            <div>Contact
              <div>
                Email: {this.state.person.email}<br/>
                Phone: {this.state.person.phone}<br/>
                Cell: {this.state.person.cell}</div></div>
            <hr/>

            <div>Current Photo:
              <div>
                <img src={this.state.person.picture.large} alt='' /></div></div>
            <hr/>

            <div>Login
              <div>
                User Name: {this.state.person.login.username}<br/>
                Password: {this.state.person.login.password}</div></div>
            <hr/>

            <div></div>
            <div></div>
          </div>

        )}
      </div>
    )
  }
}

export default App
