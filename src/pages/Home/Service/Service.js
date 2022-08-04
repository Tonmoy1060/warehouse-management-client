import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, price, description, quantity, suplier } = service;

  const navigate = useNavigate();

  const HandleServiceDetail = (id) => {
    navigate(`/items/${id}`);
  };
  return (
    <div className="service">
      <img style={{ height: "230px" }} src={img} alt="" />
      <div className="card-text p-3 text-start">
        <h5 className="pt-0 text-center">{name}</h5>
        <small>{description}</small>
        <p>Price: {price}$</p>
        <p>Suplier: {suplier}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button
        onClick={() => HandleServiceDetail(_id)}
        className="btn btn-primary"
      >
        Ubdate
      </button>
    </div>
  );
};

export default Service;
