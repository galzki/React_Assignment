import './layout/footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return(
        <div>
            <footer >
                <div>
                    <Link to="#" class="fa fa-facebook"> </Link>
                    <Link to="#" class="fa fa-linkedin"></Link> 
                    <Link to="#" class="fa fa-google"></Link> 
                    <Link to="#" class="fa fa-github"></Link> 
                </div><br/>
                <p>KodeGo_WD20P_SoftwareChasers_Pascual <br/>
                <small><i>&copy;Copyright 2022 | ReactJS_Assignment</i></small></p>
            </footer>     
        </div>
               
                      
       
            
        
        )
    }
    







    export default Footer;
