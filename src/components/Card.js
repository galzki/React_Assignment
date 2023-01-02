function Card(img){
    return(
        <div>
            <div className="card shadow" style={{width:"16rem", textAlign:'center', fontFamily:'italics', padding:'10px'}}>
                <img src={img.img} className="card-img-top" alt="text"/>
                <div className="card-body">
                    <h5 className="card-title">images</h5>
                </div>    
            </div>
        </div>
        
       
    )
}

export default Card;