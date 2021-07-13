// create your App component here

import React from "react";

export default class App extends React.Component {
    state = {
        people: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                people: json.people
            })
        })
    }

    render(){
        return(
            <p>{this.people}</p>
        )
    }
}
