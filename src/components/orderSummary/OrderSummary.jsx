import React from "react";
import "./orderSummary.css";

function OrderSummary() {
  return (
    <div className="orderSummary">
      <img
        src="assets/images/pattern-background-desktop.svg"
        className="bg-top"
      />
      <img
        src="assets/images/pattern-background-desktop-bottom.svg"
        className="bg-bottom"
      />
      <div className="orderWrapper">
        <div className="orderBanner">
          <img
            src="assets/images/illustration-hero.svg"
            alt=""
            className="orderBannerImg"
          />
        </div>
        <div className="orderBox">
          <div className="orderContent">
            <h2 className="orderContentTitle">Order Summary</h2>
            <p className="orderContentDesc">
              You can now listen to milions of songs, audiobooks, and podcasts
              on any device anywere you like!
            </p>
          </div>
          <div className="orderPlan">
            <div className="orderPlanLeft">
              <img src="assets/images/icon-music.svg" alt="" className="orderPlanImg" />
              <div className="orderPlanMiddle">
                <h3 className="orderPlanMiddleTitle">Annual Plan</h3>
                <p className="orderPlanMiddleDesc">$59.99/year</p>
              </div>
            </div>
            <p className="orderPlanChange">Change</p>
          </div>
          <button className="orderButton">Proceed to Payment</button>
          <button className="cancelOrderButton">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
