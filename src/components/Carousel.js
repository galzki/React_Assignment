import '../components/layout/carousel.css';
import eight from '../assets/img/mc1.jpg'
import seven from '../assets/img/mc2.jpg'
import six from '../assets/img/mc3.jpg'
import im1 from '../assets/img/im1.jpg'
import im2 from '../assets/img/im2.jpg'
import im3 from '../assets/img/im3.jpg'
import im4 from '../assets/img/im4.jpg'
import im5 from '../assets/img/im5.jpg'
import im6 from '../assets/img/im6.jpg'


function Carousel(img){
    return(
        <div><hr/>
            <div id="carouselIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={eight} className="d-block w-100" alt="eight"/>
                    </div>
                    <div className="carousel-item">
                        <img src={seven} className="d-block w-100" alt="seven"/>
                    </div>
                    <div className="carousel-item">
                        <img src={six} className="d-block w-100" alt="six"/>
                    </div>
                </div>

{/* <--corousel control--> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> 


{/* <--some images--> */}
            
                <div>           
                <div className="frontimages">
                <div className="box">
                    <div className="imgbox"> <img src={im1} className="d-block w-100" alt="pic1"/></div>
                    <div className="content">
                        <div>
                            <h2>Image One</h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgbox"> <img src={im2} className="d-block w-100" alt="pic2"/></div>
                    <div className="content">
                        <div>
                            <h2>Image Two</h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgbox"> <img src={im3} className="d-block w-100" alt="pic3"/></div>
                    <div className="content">
                        <div>
                            <h2>Image Three</h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgbox"> <img src={im4} className="d-block w-100" alt="pic4"/></div>
                    <div className="content">
                        <div>
                            <h2>Image Four</h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgbox"> <img src={im5} className="d-block w-100" alt="pic5"/></div>
                    <div className="content">
                        <div>
                            <h2>Image Five</h2>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgbox"> <img src={im6} className="d-block w-100" alt="pic6"/></div>
                    <div className="content">
                        <div>
                            <h2>Image Six</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>

      
        )
    }

    export default Carousel;
