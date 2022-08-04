import React from "react";
import { Button } from "react-bootstrap";
import useServices from "../../hooks/useServices";

const AllInventory = ({ service , deleteButton }) => {
//   const [services, setServices] = useServices([]);
  const { _id, name, img, price, description, quantity, suplier,} = service;

  return (
    <div
      style={{ background: "rgba(97, 94, 255, 0.306)" }}
      className="w-50 border border-info rounded mx-auto p-1 m-3 d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center ">
        <img
          style={{ height: "60px" }}
          className="w-25 rounded-circle me-2"
          src={img}
          alt=""
        />
        <h6 className="text-center">Name: {name}</h6>
      </div>
      <div>
        <Button
          onClick={() => deleteButton(service._id)}
          className="btn btn-danger"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AllInventory;
