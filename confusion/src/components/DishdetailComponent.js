import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    }

    renderComments(cmt){

        const commentBook = cmt.map((comment) => {
            return(
            <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>--- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </p>
            </li>
            )
        });

        if(cmt != null){
            return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentBook}
                </ul>
            </div>
            );
        }
        else{
            return <div></div>;
        }
    }

    render(){
    const dish = this.props.dish;

    if( dish != null){
    return (
        <div className="container">
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(dish)}
            </div>
            {this.renderComments(dish.comments)}
        </div>
        </div>
    );
    }
    else{ 
        return <div></div> 
    }
    }  
}

export default DishDetail;