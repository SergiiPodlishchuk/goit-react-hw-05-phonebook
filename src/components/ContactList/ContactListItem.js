import React from "react";

import "./ContacList.css";

export default function ContactListItem({ name, number, onDeleteContact }) {
  return (
    <li className="phone_Item">
      <span className="phone_name">{name}</span>
      <span className="phone_number">{number}</span>
      <button type="button" onClick={onDeleteContact}></button>
    </li>
  );
}
