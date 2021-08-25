import { faBath, faBed, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import timeIcon from "../../../image/clock.svg";
import locationIcon from "../../../image/map-pin.svg";
import "./RecentlyAdded.css";

const RecentCard = (props) => {
  const { name, image, _id, description, price, beds, bath } = props.propsData;

  return (
    <div className="col-xl-4 col-md-6 mt-4">
      <Link to={"/property-detail/" + _id}>
        <div className="card-sl">
          <div className="card-image custom_card">
            <img
              src={image}
              style={{ height: "250px" }}
              className="img-fluid"
              alt=""
            />
          </div>

          <a className="card-action" href="#"></a>
          <div className="card-heading">{name}</div>
          <div className="card-text">{description}</div>
          <div className="card-text d-flex align-items-center justify-content-between">
            <div className="d-flex ">
              <p>
                <strong>
                  <FontAwesomeIcon icon={faBed} /> {beds}
                </strong>
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faBath} /> {bath}
                </strong>
              </p>
            </div>

            <p>$ {price}</p>
          </div>
          <a href="#" className="card-button">
            Explore
          </a>
        </div>
      </Link>
    </div>
  );
};

export default RecentCard;
