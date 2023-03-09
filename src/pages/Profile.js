// import { Link } from 'react-router-dom';

function Profile (props) {
    return (
        <div className='container'>
            <h1>Hello, {props.profile.displayName}</h1>
            <img src={props.profile.photo} alt={props.profile.displayName} />
            <h3>{props.profile.age} yrs</h3>
            <h3>{props.profile.location}</h3>
            <h3>Looking to meet: {props.profile.interestedIn}</h3>
            <h2>About Me:</h2>
            <p>{props.profile.bio}</p>
            <h2>Fun Fact!</h2>
            <p>{props.profile.funFact}</p>
            <h2>Hobbies:</h2>
            <ul>
                { props.profile.hobbies.map((hobby) => {
                    return <li>{hobby}</li>
                })
                }
            </ul>
        </div>
    );
}

export default Profile;
