import React from "react";

const CompaniesItem = (props) => {
  return (
    <div className="row ">
      <div className="col-lg-4">
        <h1>{props.item.name}</h1>
        <p>{props.item.email}</p>
        <p> {props.item.country}</p>
      </div>

      <div className="col-lg-4">
        {
          props.item.contact.gender === 'male' ? (<h1 className="text-uppercase">Contact Man<i className="fa fa-male"></i></h1>) :
          <h1 className="text-uppercase">Contact Woman <i className="fa fa-female"></i></h1>
        }
        <p>
          {props.item.contact.firstname} {props.item.contact.lastname}
        </p>
        <p>{props.item.contact.email}</p>
        <p>{props.item.contact.phone}</p>
      </div>
      <div className="col-lg-4">
        <h1>Adresses</h1>
        {props.item.addresses.map((address,index)=><p><span className="fw-bold">{address.city}</span> {address.stret}</p>)}
      </div>
    </div>
  );
};

export default CompaniesItem;
