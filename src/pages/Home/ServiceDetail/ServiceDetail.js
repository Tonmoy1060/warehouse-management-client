import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
   const params= useParams();
   const [user,setUser] = useState({});
   useEffect(()=>{
      const url = `https://salty-bastion-99853.herokuapp.com/items/${params.itemId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
   },[])
   return (
      <Card className='w-25 mx-auto m-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.img} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
         {user.description}
        </Card.Text>
        <Button variant="primary">Delevered</Button>
      </Card.Body>
    </Card>
   );
};

export default ServiceDetail;