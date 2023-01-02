import Card from './Card'
import '../components/layout/cards.css';
import one from '../assets/img/img1.jpg'
import two from '../assets/img/img2.jpg'
import three from '../assets/img/img3.jpg'
import four from '../assets/img/img4.jpg'
import five from '../assets/img/img5.jpg'
import six from '../assets/img/img6.jpg'
import seven from '../assets/img/img7.jpg'
import eight from '../assets/img/img8.jpg'
import nine from '../assets/img/img9.jpg'
import ten from '../assets/img/img10.jpg'
import eleven from '../assets/img/img11.jpg'
import twelve from '../assets/img/img12.jpg'

function Allcards(){
    return(
        <div><hr/>
            <div className="grid1"> 
                <div> <Card img={one}/> </div>
                <div> <Card img={two}/> </div>
                <div> <Card img={three}/> </div>
                <div> <Card img={four}/></div>
                <div> <Card img={five}/></div>
                <div> <Card img={six}/></div>  
            </div>

                <div className="quotes">
                    <h4><i><b>"A man who cannot tolerate small misfortunes can never accomplish great things."</b> <br/><small>~Chinese Proverbs~</small></i> </h4> 
                </div> 
            
            <div className="grid2">
                <div> <Card img={seven}/></div>
                <div> <Card img={eight}/></div>
                <div> <Card img={nine}/></div>
                <div> <Card img={ten}/></div>
                <div><Card img={eleven}/></div>
                <div> <Card img={twelve}/> </div>
            </div>
        </div> 
        
    
    
        
           
        
                
            
     );
}

export default Allcards;