import ProductsDetails from './ProductsDetails'
const Home =()=>{

    return (
        <>
        <section>
            <div className="Container">
                <div className="Row" style={{display:"flex",textalign:"center", border:"outset"}}>
                    <div className="Col-md" style={{textAlign:"center",lineHeight:"0px",backgroundColor:"azure",margin:"0",width:"10000px" }}>
                    <img src="./images/shop.jpg" alt="shop"/>
                        <h6 style={{fontSize:"20px",fontWeight:"bold"}}>It's an</h6>
                        <h1 style={{fontSize:"40px",fontWeight:"bold"}}>Add to Cart</h1>
                        <h6 style={{fontSize:"20px",fontWeight:"bold"}}>Kind of Day</h6>
                        <button varient="primary">ShopNow</button>
                    </div>
                    <div className="Col-md" style={{width:"10000px"}}>
                        <img src="./images/shop1.jpg" height="550" width="700" alt="design"></img><br></br><br></br>
                    </div>
                </div>

           
            </div>
            
        </section><br></br>
        <h1 style={{textAlign:"center"}}>Shopping Always Good Idea</h1><br></br>
        <section>
            <div className="Container">
                <div className="Row" style={{display:"flex",textalign:"center", border:"outset"}}>
                    <div className="Col-md-2" >
                        <h3 style={{textAlign:"center"}}>Cloths</h3>
                    <button><a href={"ProductsDeatils"}><img src="./images/sale.jpg" height="400px" width="430px" alt="shop"></img></a>
   
                    </button>
                    </div>
                    <div className="Col-md-2">
                        <h3 style={{textAlign:"center"}}>Accessories</h3>
                        <button><a href={"ProductsDeatils"}><img src="./images/accessories.jpg" height="400px" width="430px" alt="accessories"></img></a></button>
                    </div>
                    <div className="Col-md-2" >
                        <h3 style={{textAlign:"center"}}>Shoes</h3>
                        <button><a href={"ProductsDeatils"}><img src="./images/cloths.jpg" height="400px" width="430px" ></img></a></button>
                    </div>
                </div>

           
            </div>
            
        </section>
        
       
       
        </>
    );
}

export default Home;