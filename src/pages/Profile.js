import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function Profile(props) {
    // const navigate = useNavigate();
    const userID = props.user.uid;
    const { id } = useParams();
    const profiles = props.profiles;
    const profile = profiles ? profiles.find((p) => p.uid === id) : null;
    console.log(profile);
    console.log(props.user.uid)
    console.log({ id })

    const loaded = () => {
        return (
            <div className='container'>
                <div className="row align-items-center flex-row">
                    <div className="col-lg-6">
                        <img className='showPhoto' src={profile.photo || "https://i.imgur.com/56zrFKC.jpg"} alt={profile.displayName} />
                    </div>
                    <div className="col-lg-6 profile-info">
                        {profile.uid === userID ? 
                        <h1 className='profile-h1'>Hello, {profile.displayName}</h1>
                        :
                        <h1 className='profile-h1'>{profile.displayName}</h1>
                        }
                        <h4>Age: {profile.age}</h4>
                        <h4>Located in {profile.location}</h4>
                        <h4>Looking to meet: {profile.interestedIn}</h4>
                        <h3>About Me:</h3>
                        <p className="about-info">{profile.bio}</p>
                        <h3>Fun Fact!</h3>
                        <p className="about-info">{profile.funFact}</p>
                        <h3>Hobbies:</h3>
                        <p className="about-info">{profile.hobbies}</p>
                        {/* <ul>
                            {profile.hobbies.map((hobby) => {
                                return <li key="hobby">{hobby}</li>
                            })
                            }
                        </ul> */}
                        {profile.uid === userID ?
                            <Link to={`/profile/${props.user.uid}/edit`}>
                                <button type="button" class="btn btn-primary">Edit Profile</button>
                            </Link>
                            :
                            <Link to={`/chats/${props.user.uid}/${profile.uid}`}>
                                <button type="button" class="btn btn-primary">Chat with {profile.displayName}</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        );
    }

    const loading = () => {
        return (
            <Link to={'/profile/new'}>
                <button> Make a Profile </button>
            </Link>
        )
    }

    return (
        <>
            {profile && props.profiles && props.user.uid ? loaded() : loading()}
        </>
    )

}

export default Profile;