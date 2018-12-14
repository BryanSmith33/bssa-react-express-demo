import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
	state = {
		friendName: '',
		friendAge: '',
		friendCountry: ''
	}
	handleGetFriends = () => {
		axios.get('/api/sendFriends').then((res) => {
			console.log(res.data)
		})
	}
	handleFriendNameUpdate = (evt) => {
		this.setState({
			friendName: evt.target.value
		})
	}
	handleFriendAgeUpdate = (evt) => {
		this.setState({
			friendAge: evt.target.value
		})
	}
	handleFriendCountryUpdate = (evt) => {
		this.setState({
			friendCountry: evt.target.value
		})
	}
	handlePostFriend = (evt) => {
		evt.preventDefault()
		axios.post('/api/addFriend', {
      name: this.state.friendName,
      age: this.state.friendAge,
      country: this.state.friendCountry
    }).then((res) => {
			console.log(res)
		})
  }
  handleGetRandomFriend = () => {
    axios.get('/api/getRandomFriend')
    .then((res) => {
      console.log(res);
    })
  }
	render() {
		return (
			<div className='App'>
				<button onClick={this.handleGetFriends}>Get Friends</button>

				<form onSubmit={(e) => this.handlePostFriend(e)}>
					<input
						type='text'
						placeholder='name'
						value={this.state.friendName}
						onChange={(e) => this.handleFriendNameUpdate(e)}
					/>
					<input
						type='text'
						placeholder='age'
						value={this.state.friendAge}
						onChange={(e) => this.handleFriendAgeUpdate(e)}
					/>
					<input
						type='text'
						placeholder='country'
						value={this.state.friendCountry}
						onChange={(e) => this.handleFriendCountryUpdate(e)}
					/>
					<button>Add Friend</button>
				</form>
        <button onClick={this.handleGetRandomFriend}>Get Random Friend</button>
			</div>
		)
	}
}

export default App
