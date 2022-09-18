import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserDetailPage.css";
import { Button } from "./Button";

export const UserDetailPage = () => {
  const [userDetail, setUserDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((response) => response.json())
      .then((json) => setUserDetail(json));
  }, [params]);

  return (
    <div className="UserDetailPage">
      <h1>Users Details</h1>
      <div className="card_container">
        {userDetail && (
          <div className="detail_card" key={userDetail.id}>
            <ul>
              <li> name: {userDetail.name}</li>
              <li> username: {userDetail.username}</li>
              <li className="detail_email"> email: {userDetail.email}</li>
              <li> phone: {userDetail.phone}</li>
              <li> company: {userDetail.company?.name}</li>
              <li> website: {userDetail.website}</li>
              <li>
                {" "}
                address:
                <ul className="detail_address">
                  <li>street: {userDetail.address?.street}</li>
                  <li>suite: {userDetail.address?.suite}</li>
                  <li>city: {userDetail.address?.city}</li>
                  <li>zipcode: {userDetail.address?.zipcode}</li>
                </ul>
              </li>
              <Button to={"/"} label={"Back to Home Page"} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
