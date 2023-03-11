// import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'

function Profile (props) {
    // const navigate = useNavigate();
    const { id } = useParams();
    const profiles = props.profiles;
    const profile = profiles ? profiles.find((p) => p.uid === id) : null;
    console.log(profile);

    const loaded = () => {
        return (
            <div className='container'>
                <h1>Hello, {profile.displayName}</h1>
                <img src={profile.photo} alt={profile.displayName} />
                <h3>{profile.age} yrs</h3>
                <h3>{profile.location}</h3>
                <h3>Looking to meet: {profile.interestedIn}</h3>
                <h2>About Me:</h2>
                <p>{profile.bio}</p>
                <h2>Fun Fact!</h2>
                <p>{profile.funFact}</p>
                <h2>Hobbies:</h2>
                <ul>
                    { profile.hobbies.map((hobby) => {
                        return <li>{hobby}</li>
                    })
                    }
                </ul>
            </div>
        );
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        {profile ? loaded() : loading()}
        </>
    )   

}

export default Profile;
