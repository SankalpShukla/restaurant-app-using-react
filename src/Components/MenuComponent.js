import React, { Component } from 'react'; 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class Menu extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card onClick={()=>this.props.onClick(dish.id)} key={dish.id}>
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
            </div>
        );
    }
}
export default Menu;