import React,{Component} from "react"
import { Navbar,NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishDetail'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {Route,Redirect} from 'react-router-dom'
import { Switch } from "react-router-dom";
import Contact from './ContactComponent'
class Main extends Component{
  constructor(props){
    super(props)
    this.state={
      dishes: DISHES,
      comments: COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    }
  }
  
  render(){
    const HomePage=()=>{
      return(
        <div>
          <Home 
          dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          promo={this.state.promotions.filter((promo)=>promo.featured)[0]}
          lead={this.state.leaders.filter((lead)=>lead.featured)[0]}
          />
        </div>
      )
    }
    return(
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />}/>
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;
