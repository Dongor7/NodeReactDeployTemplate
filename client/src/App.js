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
                this.setState({users: res.data.users});
                console.log('Data', res.data.users);
            });

        console.log('Axios');
    };

    componentDidMount() {
        this.getUsers();
    }

    render() {

        console.log('Render: ', this.state);

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
