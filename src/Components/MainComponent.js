import React,{Component} from "react"
import { Navbar,NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {Route,Redirect} from 'react-router-dom'
import { Switch } from "react-router-dom";
class Main extends Component{
  constructor(props){
    super(props)
    this.state={
      dishes: DISHES
    }
  }
  
  render(){
    const HomePage=()=>{
      return(
        <div>
          <Home />
        </div>
      )
    }
    return(
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />}/>
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;
