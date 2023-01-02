import {Link} from 'react-router-dom'
import './components/layout/nav.css';
// a = Link, href = to
function Navbar(){
    return(
        <div className="container-fluid">
            <ul class="topnav">
              <li><Link class="active" to="/">Home</Link></li>
              <li style={{float:'right'}}><Link to="/login">Login</Link></li>
              <li style={{float:'right'}}><Link to="/registration">Registration</Link></li>
              <li style={{float:'right'}}><Link to="/students">Students</Link></li>
              <li style={{float:'right'}}><Link to="/features">Features</Link></li>
          </ul>
        </div>  
    )
}


export default Navbar;