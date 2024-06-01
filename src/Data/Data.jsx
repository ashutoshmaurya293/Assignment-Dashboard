import React, { useState } from "react";
import "./Data.css";
import Json from "../Json/Json";

const Data = () => {
console.log(Json);
  return (
    <div className="dashboard">
    <h1>Assignment Dashboard</h1>
    <table id="alerts-table">
      <thead>
        <tr className="headding">
          <th>Timestamp</th>
          <th>Source IP</th>
          <th>Source Port</th>
          <th>Signature</th>
          <th>Category</th>
        </tr>
      </thead>
      {Json.map((e,i)=>(
        <tbody key={i}>
        <tr className="data">
            <td>{new Date(e.timestamp).toLocaleString()}</td>
            <td>{e.src_ip}</td>
            <td>{e.src_port}</td>
            <td>{e.alert?.signature}</td>
            <td>{e.alert?.category}</td>
        </tr>
      </tbody>
      ))}
    </table>
  </div>
  
  );
};

export default Data;
