import React from 'react';

const AddItem = () => {const submitButton = (event) => {
   event.preventDefault();
   const name = event.target.name.value;
   const details = event.target.details.value;
   const img = event.target.img.value;
   const price = event.target.price.value;
   const quantity = event.target.quantity.value;
   const suplier = event.target.suplier.value;

   const data = {name,details,price,img,quantity,suplier};

   event.target.reset();

   fetch("https://salty-bastion-99853.herokuapp.com/items", {
     method: "POST", // or 'PUT'
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   })
     .then((response) => response.json())
     .then((data) => {
       console.log("Success:", data);
     })
     .catch((error) => {
       console.error("Error:", error);
     });
 };

 return (
   <div className="w-25 mx-auto mt-5">
     <h2 className="text-primary text-center">Add New Service</h2>
     <form onSubmit={submitButton} className="mt-4">
       <div className="mb-3">
         {/* <label htmlFor="exampleInputEmail1" className="form-label">
           Service Name
         </label> */}
         <input
           type="text"
           name="name"
           className="form-control"
           id="exampleInputName"
           aria-describedby="emailHelp"
           required
           placeholder="Name"
         />
       </div>
       <div className="mb-3">
         {/* <label htmlFor="exampleInputEmail1" className="form-label">
           Service Detail
         </label> */}
         <textarea
           type="text"
           name="details"
           className="form-control"
           id="exampleInputDetails"
           aria-describedby="emailHelp"
           required
           placeholder="Service Details"
         />
       </div>
       <div className="mb-3">
         {/* <label htmlFor="exampleInputPassword1" className="form-label">
           Password
         </label> */}
         <input
           type="img"
           name="img"
           className="form-control"
           id="exampleInputImg"
           required
           placeholder="Image"
         />
       </div>
       <div className="mb-3">
         {/* <label htmlFor="exampleInputPassword1" className="form-label">
           Password
         </label> */}
         <input
           type="number"
           name="price"
           className="form-control"
           id="exampleInputPassword1"
           required
           placeholder="Price"
         />
       </div>
       <div className="mb-3">
         {/* <label htmlFor="exampleInputPassword1" className="form-label">
           Password
         </label> */}
         <input
           type="number"
           name="quantity"
           className="form-control"
           id="exampleInputPassword1"
           required
           placeholder="Qantity"
         />
       </div>
       <div className="mb-3">
         {/* <label htmlFor="exampleInputPassword1" className="form-label">
           Password
         </label> */}
         <input
           type="text"
           name="suplier"
           className="form-control"
           id="exampleInputPassword1"
           required
           placeholder="Supplier"
         />
       </div>

       <button type="submit" className="btn btn-primary">
         Add Service
       </button>
     </form>
   </div>
 );
};

export default AddItem;