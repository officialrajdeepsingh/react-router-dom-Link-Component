import React,{Component} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom'



export default class Cards extends Component {
    
   state={
        name:'rajdeep singh',
        love:'coding',
        earn:'null'
    }
    
  render(){ 

  return (
    <>
    <h3 className='mt-3' > Card  </h3>
    
  
           
           <CardGroup className='m-3'>
                    <Card>
                      <Card.Img  variant="top" style={{width:'100%',height:'400px', margin:'auto'}} src="https://source.unsplash.com/daily
" />
                      <Card.Body>
                        <Card.Title>Card title here babby.. </Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>

                      {/* Link tag With out parameter */}

                      <Link to="/about">About
                     
                            <Card.Link  >Another Link</Card.Link>

                        </Link>

                    
                        </Card.Footer>
                    </Card>
              </CardGroup>
    </>
  );
 
}
}
