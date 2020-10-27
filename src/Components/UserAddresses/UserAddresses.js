import React from "react";
import { Col } from "react-bootstrap";
import { countryNameFind } from "../../Utility";
import {v4 as uuid} from "uuid"
const UserAddresses = ({ addressList = [] }) => {
  return (
    <React.Fragment>
      {addressList.length
        ? addressList.map(({ address, apt, country, postal }) => (
            <Col
            key={uuid()}
              md={10}
              className="bg-dark py-3 mx-3 my-3 d-flex align-items-center "
            >
              {
                <p className="text-white">
                  {" "}
                  {`${address}`} <br />
                  {` ${apt} , ${postal} `}
                  <br /> {` ${countryNameFind(country)}`}
                </p>
              }
            </Col>
          ))
        : "No addresses found"}
    </React.Fragment>
  );
};

export default UserAddresses;
