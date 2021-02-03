import React,{ Component } from "react"
import { Navbar,NavbarBrand,Jumbotron } from 'reactstrap'
class Header extends Component{
    render(){
        return(
            //using React.Fragment this automatically wraps all content inside a div
            <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="">Foodies Restaurant</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div class="container">
                    <div class="row row-header">
                        <div class="col-12 col-sm-6">
                            <h1>Foodies Restaurant</h1>
                            <p>We take inspiration from the world's best cuisine to create lip smacking recipes to tickle your culinary senses.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        )
    }
}
export default Header