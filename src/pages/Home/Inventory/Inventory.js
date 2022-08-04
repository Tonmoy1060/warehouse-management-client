import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Inventory.css';

const Inventory = () => {

   const [services, setServices] = useServices([]);

   return (
      <div className='services-container'>
         <h1 className='mt-0'>Inventory</h1>
         <div className='service-container'>
         {
            services.slice(0,6).map(service => <Service
               key={service._id}
               service={service}
            ></Service>)
         }
         </div>
      </div>
   );
};

export default Inventory;