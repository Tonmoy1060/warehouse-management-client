import React from 'react';
import useServices from '../../hooks/useServices';
import AllInventory from '../AllInventory/AllInventory';

const ManageInventory = () => {
   const [services, setServices] = useServices([]);
   const deleteButton = (id) => {
      const confirm = window.confirm("Are you sure to delete this ?");
      if (confirm) {
        fetch(`https://salty-bastion-99853.herokuapp.com/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setServices(services.filter((service) => service._id !== id));
          });
      }
    };
   return (
      <div className='services-container'>
         <h1 className='mt-0'>Manage Items</h1>
         <div className=''>
         {
            services.map(service => <AllInventory
               key={service._id}
               service={service}
               deleteButton={deleteButton}
            ></AllInventory>)
         }
         </div>
      </div>
   );
};

export default ManageInventory;