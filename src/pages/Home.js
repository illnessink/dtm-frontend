import { login } from '../firebase';
import { Link } from 'react-router-dom';

function Home (props) {
    return (
        <>
            <img src="https://i.imgur.com/KrOXWVb.png" alt='down to match' ></img>
            <br></br>
        { !props.user ?
            
            <button onClick={login}>Signup or Login!</button>
            :
            <Link to={`/profile/${props.user.uid}`}>
                <button>Go To Profile!</button>
            </Link>
        }
        </>

    )
  }
  
  export default Home;