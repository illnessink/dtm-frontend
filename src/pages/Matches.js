import { Link } from 'react-router-dom';

function Matches (props) {
  // loaded function
  const loaded = () => {
    return props.profiles.map((profile) => (
      <div key={profile.uid} className="col-sm-12 col-md-6 col-lg-3" >
        <div className='card'>
        <Link to={`/profile/${profile.uid}`}>
          <h1 className='card-title'>{profile.displayName}</h1>
        </Link>
        <img src={profile.photo} alt={profile.displayName} />
        <h3>Age: {profile.age}</h3>
        </div>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }


  return (
    <div className='container'>
      <h1>Swoon... Check out your Matches</h1>
      <div className='row'>
      {props.profiles ? loaded() : loading}
      </div>
    </div>
  )
  }
  
  export default Matches;