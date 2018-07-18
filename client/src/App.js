import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    state = {
        users: []
    };

    getUsers = () => {
        axios
            .get('/')
            .then(res => {
                this.setState({users: res.data});
                console.log('Data', res.data);
            });
    };

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.users.map((user) => {
                            return (
                                <li>${user}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;
