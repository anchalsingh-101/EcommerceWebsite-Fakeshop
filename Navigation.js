
export default function Navigation(){

    return(
        <>
        <nav className="container" style={{textAlign:"left"}}>
            <div className="container">
                <a href='/'>
                <img src="./images/logo.jpg" alt="logo" style={{position:"left",height:"100px",width:"100"}}  />
                </a>

                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/Productsdetails'>Products Details</a></li>
                    <li>
                        <a href="/cart" style={{ position:"right",height:"10",width:"10"}}>
                            <div>
                                <span>10</span>
                                <img src="./images/cart.jpg" alt="cart-icon" style={{ position:"right",height:"40px",width:"40px"}}/>
                            </div>
                        </a>
                    </li>
                </ul>
                
            </div>

        </nav>
        </>
    );
}
 