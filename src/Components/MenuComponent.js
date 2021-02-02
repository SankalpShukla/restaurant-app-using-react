import React, { Component } from 'react'; 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetail'
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        this.onDishSelect=this.onDishSelect.bind(this)
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="500px" height="300px" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle style={{color:"black"}}>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div class="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish}/>
                 </div> 
            </div>
        );
    }
}
export default Menu;