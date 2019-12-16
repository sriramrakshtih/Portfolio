import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import dsce from '../Assets/dsce.png';
import fitness from '../Assets/fitness.png';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Fitness freak',
                    subTitle: 'The cookbook for fitness freaks',
                    imgSrc: fitness,
                    link: 'https://www.google.com/',
                    selected: false 

                },

                {
                    id: 1,
                    title: 'Sriram Rakshith Kolar',
                    subTitle: 'Software Developer',
                    imgSrc: dsce,
                    link: 'https://www.google.com/',
                    selected: false 
                },

            ]
            
        }
    }

    handleCardClick = (id,card) => {
        let items =[...this.state.items];
        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !==id) {
                item.selected=false
            }

        });

        this.setState({
            items
        });
    } 

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id))} key={item.id} />
        })
    }

    render(){
        return(
           <Container fluid={true} >
               <Row className ="justify-content-around">

                   {this.makeItems(this.state.items)}

               </Row>
           </Container>  
        );
    }

}

export default Carousel 