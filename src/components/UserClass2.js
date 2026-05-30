import React from 'react'

class UserClass2 extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent co nstructor is called for the Cllass2");
    }

    componentDidMount() {
        console.log("Parent componentDidMount is called for the Cllass2");
    }


    render() {
        console.log("Parent render is called for the Cllass2   ");
        return (
            <div>
                <h1>Class Component</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.props.location}</h2>
            </div>
        )
    }
}

export default UserClass2