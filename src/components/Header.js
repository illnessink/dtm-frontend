import {login, logout} from '../firebase';
import { Link } from 'react-router-dom';

function Header (props) {
    return (
        <nav className="nav">
            <Link to="/">
            <div>DTM</div>
            </Link>
            { props.user ? 
            <Link to={`/profile/${props.user.uid}`}>
            <div>My Profile</div>
            </Link>
            :
            <div className='navInvis'>My Profile</div>
          }
           { props.user ? 
            <Link to={`/matches`}>
            <div>My Matches</div>
            </Link>
            :
            <div className='navInvis'>My Matches</div>
          }
            <ul>
              { props.user ? 
              <>
              <li> Welcome, {props.user.displayName}</li>
              <li>
                  <img src={props.user.photoURL} alt={props.user.displayName} />
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              </>
              :
              <li>
                <button onClick={login}>Login</button>
              </li>
            }
            </ul>
        </nav>
    );
  }
  
  export default Header;