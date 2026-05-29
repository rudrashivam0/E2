import React from 'react'
import { useState } from 'react';

//? this is class based component 
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // const [count] = useState()
        console.log(props);
        //? ths is the way to create state var in class based component and it take a big Object  which will contain all the state variables 
        this.state = {
            count: 0,
            count2: 1,
        }
    }
    render() {

        const { name, location } = this.props;
        const { count, count2 } = this.state;
        return (  
            <div className='user-card1'>
                <h2>Count : {count}</h2>
                <h2>Count : {count2}</h2>
                <button onClick={() => {
                    //? NEVER Upd date state vae directly  like this.state.count += 1;

                    //! right way to do that 
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })

                }}>Count Increase</button>
                <h2>
                    Name:{name}
                </h2>
                <h3>Location :{location}</h3>
                <h3>This is User Details</h3>
            </div>
        )
    }

}

export default UserClass