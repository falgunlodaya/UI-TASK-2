import React from "react";
function StatCard({ icon, title, value }) {
  return (
    <div className="bs-stat-card">
      <div className="img-wrap">
        <img src={icon} alt="personal loan" />
      </div>
      <div className="title-value-wrap">
        <h4 className="title">{title}</h4>
        <p className="value">{value}</p>
      </div>
    </div>
  );
}

export default StatCard;
