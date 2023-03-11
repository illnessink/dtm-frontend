import { login } from '../firebase';
import { Link } from 'react-router-dom';

function Home (props) {
    return (
        <>
            <h1>Down to Match Home Page</h1>
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