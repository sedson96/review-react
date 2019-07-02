import React, {Component} from "react"

class People extends Component {
    constructor() {
        super()
        this.state = {
            people: [{
                name: "Samuel",
                age: 34,
            },{
                name: "James",
                age: 23,
            },{
                name: "Timothy",
                age: 39,
            },{
                name: "Tatiana",
                age: 21,
            },{
                name: "Steve",
                age: 28,
            }],
            name: "",
            age: null
        }
        this.handleAge = this.handleAge.bind(this)
        this.handleName = this.handleName.bind(this)
    }

    handleName(event) {
        this.setState({name: event.target.value})
    }
    handleAge(val) {
        this.setState({age: val})
    }
    handleClick = () => {
        let obj ={
            name: this.state.name,
            age: this.state.age
        }

        this.setState({people: [...this.state.people, obj]})
    }

    render() {
        let displayPeople = this.state.people.map(person => {
            return <li>{person.name} {person.age}</li>
        })
        return (
            <div>
                <input onChange={this.handleName}/>
                <input onChange={(event) => this.handleAge(event.target.value)}/>
                <button onClick={this.handleClick} >Add Person</button>
                <ul>
                    {displayPeople}
                </ul>
            </div>
        )
    }
}

export default People