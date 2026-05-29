import User from "./User"
import UserClass from "./UserClass"
const About = () => {

    return (
        <div>
            <h1>About</h1>
            <h2>This is all about the About Section </h2>
            {/* <User name={"Rudra (functional)"} /> */}

            <UserClass name={"Rudra (Class)"} location={"Varanasi (Clss Based)"} />
        </div>
    )
}

export default About;