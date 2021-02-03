import React from 'react'; 
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function RenderMenuItem({dish,onClick}){
    return(
        <Card onClick={()=>onClick(dish.id)} key={dish.id}>
            <CardImg width="500px" height="300px" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle style={{color:"black"}}>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}
const Menu = (props)=>{
        const menu = props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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

export default Menu;