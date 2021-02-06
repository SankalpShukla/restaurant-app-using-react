import React,{ Component } from "react"
import { Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem } from 'reactstrap'
import {NavLink} from "react-router-dom"
class Header extends Component{
    constructor(){
        super()
        this.state={isNavOpen:false}
        this.toggleNav=this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(
            //using React.Fragment this automatically wraps all content inside a div
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href=""><img src="../assets/images.logo.png" alt="Foodies Restaurant" height="30" width="41" /></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                        <span class="fa fa-home fa-lg"></span>Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                        <span class="fa fa-info fa-lg"></span>About Us
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/menu">
                        <span class="fa fa-list fa-lg"></span>Menu
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                        <span class="fa fa-address-card fa-lg"></span>Contact Us
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
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