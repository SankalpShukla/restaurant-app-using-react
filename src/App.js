import React,{Component} from "react"
import { Navbar,NavbarBrand } from 'reactstrap'
import Menu from './Components/MenuComponent'
class App extends Component{
  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="">My Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    )
  }
}

export default App;
