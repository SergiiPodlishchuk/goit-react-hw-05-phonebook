import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "./ContactListItem";

import "./ContacList.css";

export default function ContactList({ items, onRemove }) {
  return (
    <TransitionGroup component="ul" className="contact_list">
      {items.map(({ id, ...props }) => (
        <CSSTransition key={id} timeout={250} classNames="list">
          <ContactListItem {...props} onDeleteContact={() => onRemove(id)} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
