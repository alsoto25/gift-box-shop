import React, { useState, useEffect } from "react";
import PageWrapper from "../components/global/PageWrapper";
import styles from "../styles/pages/Orders.module.scss";
import { stepsResponse } from "../test/shopStepsResponse.js";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState();
  const stepsList = { ...stepsResponse };
  const isActive = false;

  useEffect(() => {
    //Fetch/Axios Request API
    console.log(stepsList);
    axios
      .get("http://localhost:3001/shopSteps/getOrders")
      .then((res) => {
        if (res.request.statusText === "OK") {
          console.log("RES", res.data.ordersResponse);
          setOrders(res.data.ordersResponse);
        } else if (res.request.statusText === "INTERNAL_SERVER_ERROR") {
          console.log("ERROR", res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getOrder = (userChoices) => {
    return (
      <>
        {userChoices["box-contents-dropdown"] && (
          <div className={` ${styles["choice"]}`}>
            {isActive && (
              <aside>
                <img
                  src={
                    "https://cdn.shopify.com/s/files/1/0063/5942/products/Rose_Gold_with_Gold_Foil_Beau_Bella_2000x.jpg?v=1591294565"
                  }
                />
                <p>Response</p>
              </aside>
            )}
            <aside>
              <div>
                {stepsResponse.steps.map((step, index) => {
                  if (
                    stepsResponse.steps.find(
                      (stp) => stp.id === step.id && step.id !== "review-step"
                    )
                  ) {
                    return (
                      <div key={step.id}>
                        <h3>{step.title}</h3>
                        {step.options &&
                          step.options.map((option) =>
                            option.dropdowns.map((dropdown) => {
                              if (
                                dropdown.options.find(
                                  (opt) =>
                                    userChoices[dropdown.id] === opt.id &&
                                    dropdown.options.find(
                                      (opti) =>
                                        userChoices[dropdown.id] === opti.id
                                    ).price
                                )
                              ) {
                                return (
                                  <div key={option.id}>
                                    <div>
                                      <span>
                                        {userChoices[dropdown.id] &&
                                          dropdown.options.find(
                                            (opt) =>
                                              userChoices[dropdown.id] ===
                                              opt.id
                                          ).title}
                                      </span>
                                    </div>
                                  </div>
                                );
                              } else if (
                                dropdown.options.find(
                                  (opt) => userChoices[dropdown.id] === opt.id
                                )
                              ) {
                                return (
                                  <div>
                                    <span>
                                      {userChoices[dropdown.id] &&
                                        dropdown.options.find(
                                          (opt) =>
                                            userChoices[dropdown.id] === opt.id
                                        ).title}
                                    </span>
                                  </div>
                                );
                              }
                            })
                          )}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </aside>
          </div>
        )}
      </>
    );
  };

  return (
    <PageWrapper>
      <div className={styles["orderContainer"]}>
        {orders ? (
          orders.map((order) => (
            <div className={styles["order"]}>
              <div className={`${styles["personal"]}`}>
                <p>
                  From: <h3>{order["personal-info"].nameFrom}</h3>
                </p>
                <p>To : {order["personal-info"].nameTo}</p>
                <p>Email: {order["personal-info"].email}</p>
              </div>
              <div className={`${styles["delivery"]}`}>
                <p>
                  Date: <h4>{order["delivery-info"].date}</h4>
                </p>
                <p>Province: {order["delivery-info"].province}</p>
                <p>Zip Code: {order["delivery-info"].zipCode}</p>
                <p>Adress1: {order["delivery-info"].address1}</p>
                <p>Adress2: {order["delivery-info"].address2}</p>
              </div>
              {getOrder(order.userChoices)}
            </div>
          ))
        ) : (
          <h4 style={{ color: "#f8f8f8" }}>No pending requests.</h4>
        )}
      </div>
    </PageWrapper>
  );
}
