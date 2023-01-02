import '../layout/login.css';

function Login() {
    return(
        <div><hr/>
           <div className="container">
                <center><h2>Sign in</h2>
                <small>to proceed</small></center> <br/><br/>
                <form action="/action_page.php">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div> <br/>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="remember"/> Remember me</label>
                    </div><br/><br/>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Login;