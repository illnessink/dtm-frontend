import { login, logout } from '../firebase';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header(props) {
  return (
    <>
      <Navbar id="nav-color" className="nav-bar" collapseOnSelect fixed='top' expand='sm' variant='dark' fluid>
        <Container className='nav-container'>
          <Link to="/">
            <div>
              <img src="https://i.imgur.com/KrOXWVb.png" alt="down to match logo" id="logo" height="60"></img>
            </div>
          </Link>
          <Navbar.Toggle aria-controls='resonsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="me-auto">
              {props.user ?
                <Link to={`/profile/${props.user.uid}`} className="nav-link">
                  <div>My Profile</div>
                </Link>
                :
                <div className='navInvis'>My Profile</div>
              }
              {props.user ?
                <Link to={`/matches`} className="nav-link">
                  <div>My Matches</div>
                </Link>
                :
                <div className='navInvis'>My Matches</div>
              }
            </Nav>
            <Nav>
              <div className='user-nav d-flex'>
                {props.user ?
                  <>
                    <div id="welcome" className="nav-item">Welcome, {props.user.displayName}</div>
                      <img className="rounded-circle" src={props.user.photoURL} alt={props.user.displayName} height="50" />

                      <button className="home-button" onClick={logout}>Logout</button>
                  </>
                  :
                    <button className="home-button" onClick={login}>Login</button>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

// function Header(props) {
//   return (
//     <nav id="nav-color" className="navbar navbar-expand-lg navbar-dark">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-mdb-toggle="collapse"
//           data-mdb-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars"></i>
//         </button>
//           <Link to="/" className="navbar-brand mt-2 mt-lg-0">
//             <div>
//               <img src="https://i.imgur.com/KrOXWVb.png" alt="down to match logo" id="logo" height="60"></img>
//             </div>
//           </Link>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               {props.user ?
//                 <Link to={`/profile/${props.user.uid}`} className="nav-link">
//                   <div>My Profile</div>
//                 </Link>
//                 :
//                 <div className='navInvis'>My Profile</div>
//               }
//             </li>
//             <li className="nav-item">
//               {props.user ?
//                 <Link to={`/matches`} className="nav-link">
//                   <div>My Matches</div>
//                 </Link>
//                 :
//                 <div className='navInvis'>My Matches</div>
//               }
//             </li>
//             <li className="nav-item">
//               {props.user ?
//                 <Link to={`/profile/new`} className="nav-link">
//                   <div>New Profile</div>
//                 </Link>
//                 :
//                 <div className='navInvis'>New Profile</div>
//               }
//             </li>
//             <li className="nav-item">
//               {props.user ?
//                 <Link to={`/quiz`} className="nav-link">
//                   <div>Take Quiz</div>
//                 </Link>
//                 :
//                 <div className='navInvis'>Take Quiz</div>
//               }
//             </li>
//           </ul>
//         </div>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">

//           <ul className="navbar-nav navbar-dark ms-auto align-items-center">
//             {props.user ?
//               <>
//                 <li id="welcome" className="nav-item"> Welcome, {props.user.displayName}</li>
//                 <li>
//                   <img className="rounded-circle" src={props.user.photoURL} alt={props.user.displayName} height="50"/>
//                 </li>
//                 <li>
//                   <button onClick={logout}>Logout</button>
//                 </li>
//               </>
//               :
//               <li>
//                 <button onClick={login}>Login</button>
//               </li>
//             }
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

export default Header;