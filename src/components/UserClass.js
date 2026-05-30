import React from 'react'
import { useState } from 'react';

//? this is class based component 
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);


        //? ths is the way to create state var in class based component and it take a big Object  which will contain all the state variables 

        this.state = {

            count: 0,
            count2: 1,
            userInfo: {
                name: "Jon Doe",
                location: "New York",
                avatar_url: "https://as2.ftcdn.net/v2/jpg/02/44/43/69/1000_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
            }

        }
        console.log(this.props.name + "Child constructor is called");
    }


    async componentDidMount() {
        //? There we call API wnd Why ?
        //! BCZ of Child constructor is called
        //! Child render is called   
        //!Child componentDidMount is  called at the end very time
        console.log(this.props.name + "Child componentDidMount is called");
        const data = await fetch("https://api.github.com/users/rudrashivam0#");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        })

    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.name + "componentDidUpdate is called");
        if (this.state.count !== prevState.count) {
            //
        }
        if (this.state.count !== prevState.count2 ) {
            //
        }

    }

    componentWillUnmount() {
        console.log(this.props.name + "componentWillUnmount is called");
    }





    render() {
        console.log(this.props.name + "Child render is called   ");
        // const { name, location } = this.props;
        const { count, count2 } = this.state;

        const { name, login, location, avatar_url } = this.state.userInfo
        return (
            <div className='user-card1'>


                {/* <h2>Count : {count}</h2>
                <h2>Count : {count2}</h2> */}

                {/* <button onClick={() => {
                    //? NEVER Upd date state vae directly  like this.state.count += 1;

                    //! right way to do that 
                    this.setState({
                        count: count + 1,
                        count2: this.state.count2 + 2
                    })

                }}>Count Increase</button> */}

                <img className='avatar' src={avatar_url} alt="Image"></img>
                <h4>
                    Name: {this.state.userInfo.name}
                </h4>
                <h4>
                    UserName: {login}
                </h4>
                <h3>Location : {location} I ndia</h3>

                <h3>This is User Details</h3>

            </div>
        )
    }

}

export default UserClass