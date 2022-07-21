import { useState } from "react";
export default function UseEffectAPI(){
    const UseEffectAPI=(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then((response)=> response.json())
        .then(products=>{
        console.log(products);
    })
    },[]);
   

return(
    <>
    
    <div className="container" style={{backgroundColor:"azure"}}>
        <h1 style={{textAlign:"center", fontSize:"30px",paddingTop:"3px"}}>Products Details</h1>
        <section>
            <div className="Container"><br></br>
            <h1 style={{textAlign:"center"}}>Womens Wear</h1>
                <div className="Row" style={{display:"flex",textalign:"center", border:"outset"}}><br></br>
                    <div className="Col-md-4" style={{width:"500px",marginLeft:"30px" }}><br></br>
            
                    <img src="./images/indian.jpg" alt="indian" height="300px" width="200"/><br></br>
                    <span>Lehnga</span>
                    <div className="container" style={{display:"flex"}}>
                    <span>$ 1500</span>
                    <button>Add</button>
                    </div>
                    </div>
                    <div className="Col-md-4" style={{width:"500px"}}><br></br>
                        <img src="./images/dress.jpg" alt="design" height="300px" width="200"></img><br></br>
                        <span>Gown</span>
                       <div>
                         <span>$ 700</span>
                        <button>Add</button>
                       </div>
                    </div>

                    <div className="Col-md-4" style={{width:"500px"}}><br></br>
                        <img src="./images/indowestern.jpg"  alt="design" height="300px" width="200"></img><br></br>
                        <span>Dress</span>
                    <div>
                    <span>$ 1000</span>
                    <button>Add</button>
                    </div>
                    </div>
                    <div className="Col-md-4" style={{marginRight:"30px"}}><br></br>
                        <img src="./images/Tops.jpg"  alt="design" height="300px" width="200"></img><br></br>
                        <span>Tops</span>
                    <div>
                    <span>$ 1000</span>
                    <button>Add</button>
                    </div>
                    </div>
                </div>

           
            </div>
            
        </section><br></br>
        <section>
            <div className="Container"><br></br>
            <h1 style={{textAlign:"center"}}>Mens Wear</h1>
                <div className="Row" style={{display:"flex",textalign:"center", border:"outset"}}><br></br>
                    <div className="Col-md-4" style={{width:"800px",marginLeft:"30px" }}><br></br>
            
                    <img src="./images/mes.jpg" alt="indian" height="300px" width="200"/><br></br>
                    <span>Formal</span>
                    <div>
                    <span>$ 2000</span>
                    <button>Add</button>
                    </div>
                    </div>
                    <div className="Col-md-4" style={{width:"800px"}}><br></br>
                        <img src="./images/mens1.jpg" alt="design" height="300px" width="200"></img><br></br>
                        <span>Casuals</span>
                       <div>
                         <span>$ 2500</span>
                        <button>Add</button>
                       </div>
                    </div>

                    <div className="Col-md-4" style={{width:"800px",marginRight:"30px"}}><br></br>
                        <img src="./images/mens.jpg"  alt="design" height="300px" width="200"></img><br></br>
                        <span>IndianS</span>
                    <div>
                    <span>$ 1700</span>
                    <button>Add</button>
                    </div>
                    </div>
                    <div className="Col-md-4" style={{marginRight:"30px"}}><br></br>
                        <img src="./images/Sports.jpg"  alt="design" height="300px" width="200"></img><br></br>
                        <span>Sports Suit</span>
                    <div>
                    <span>$ 700</span>
                    <button>Add</button>
                    </div>
                    </div>
                </div>

           
            </div>
            
        </section><br></br>
        <section>
            <div className="Container"><br></br>
            <h1 style={{textAlign:"center"}}>Accessories</h1>
                <div className="Row" style={{display:"flex",textalign:"center", border:"outset"}}><br></br>
                    <div className="Col-md-4" style={{width:"600px",marginLeft:"30px" }}><br></br>
            
                    <img src="./images/Watch.jpg" alt="indian" height="300px" width="200"/><br></br>
                    <span>Watch</span>
                    <div>
                    <span>$ 1500</span>
                    <button>Add</button>
                    </div>
                    </div>
                    <div className="Col-md-4" style={{width:"600px"}}><br></br>
                        <img src="./images/shoes1.jpg" alt="design" height="300px" width="200"></img><br></br>
                        <span>Shoes</span>
                       <div>
                         <span>$ 3000</span>
                        <button>Add</button>
                       </div>
                    </div>

                    <div className="Col-md-4" style={{width:"600px",marginRight:"30px"}}><br></br>
                        <img src="./images/Bags.jpg"  alt="design" height="300px" width="200"></img><br></br>
                        <span>Bags</span>
                    <div>
                    <span>$ 10000</span>
                    <button>Add</button>
                    </div>
                    </div>
                    <div className="Col-md-4" style={{marginRight:"30px"}}><br></br>
                        <img src="./images/Decoration.jpg"  alt="design" height="300px" width="200"></img><br></br>
                        <span>Decoration</span>
                    <div>
                    <span>$ 500</span>
                    <button>Add</button>
                    </div>
                    </div>
                </div>

           
            </div>
            
        </section><br></br><br></br><br></br>
    <h2 style={{textAlign:"center"}}>Happiness is Not in Money But in Shopping</h2>
    <div class="container" style={{textAlign:"center",lineHeight:"1px"}}>
    <img src="./images/logo1.jpg" alt="logo"/>
    </div>
    </div>

    </>
);
}
