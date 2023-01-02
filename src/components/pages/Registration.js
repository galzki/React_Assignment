import {Link} from 'react-router-dom'
import '../layout/reg.css';


function Registration() {
    return(
   
        <div><hr/>
             {/* <!-- Container Start --> */}
            <div   style={{marginLeft:'700px', marginRight:'700px', marginTop:'50px', marginBottom:'150px', padding:'150'}}>
                {/* <!-- Form Wrap Start --> */}
                <div class="form-wrap">
                <h1>Sign Up</h1>
                <p>to register new account</p><br/>
                {/* <!-- Form Start --> */}
                <form>
                    <div class="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" name="firstname" id="first-name"/>
                    </div>
                    <div class="form-group">
                    <label for="last-name">Last Name</label>
                    <input type="text" name="firstname" id="last-name"/>
                    </div>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    </div>
                    <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="firstname" id="first-name"/>
                    </div>
                    <div class="form-group">
                    <label for="cpass">Confirm Password</label>
                    <input type="password" name="firstname" id="first-name"/>
                    </div>
                    <button type="submit">Sign Up</button>
                    <p class="bottom-text">
                    By Clicking the Sign Up Button, you agree to our
                    <Link to="#">Term & Conditions</Link> and <Link to="#">Primary Policy</Link>
                    </p>
                </form>
                {/* <!-- Form Close --> */}
                </div>
                {/* <!-- Form Wrap Close --> */}
            </div> <br/> <br/><br/>
        </div>

             
       
    
                   
           )
}

export default Registration;