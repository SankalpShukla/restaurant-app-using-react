import React from "react"
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

   
   function RenderDish(props) {
        const dish=props.selectedDish
        if (dish != null)
            {return(
                <Card key={dish.id}> 
                    <CardImg top src={dish.image} width="500px" hright="300px" alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );}
        else
            return(
                <div></div>
            );
    }
    function RenderComment(props){
      const dish=props.selectedDish
      if(dish!=null)
      {const info=dish.comments.map((comm)=>{
        return(
            <div>
                <ul class="list-unstyled">
                    <li>{comm.comment}</li> 
                    <li>--{comm.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
                </ul>
            </div>
        )
    })
    return(
        <div>
            <h5>Comments</h5>
            {info}
        </div>
    )}
    else
      return(<div></div>)
    }
    const DishDetail=(props)=>{
        return(
        <div class="container">
           <div class="row">
                <div class="col-12 col-md-5">
                    <RenderDish selectedDish={props.selectedDish} />
                </ div>
                <div class="col-12 col-md-5">
                    <RenderComment selectedDish={props.selectedDish} />
                </div>
            </div>
        </div>
        
        )}  
     

    
export default DishDetail
