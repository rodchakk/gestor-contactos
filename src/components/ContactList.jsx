import React from "react";

function ContactList({ contacts }) {
  return (
    <ul className="list-group">
      {contacts.length === 0 ? (
        <li className="list-group-item text-muted">No hay registros</li>
      ) : (
        contacts.map((c) => (
          <li key={c.id} className="list-group-item">
            <i className="bi bi-person-circle me-2"></i>
            <strong>{c.name}</strong>
            <br />
            <i className="bi bi-telephone-fill me-2 text-primary"></i>
            {c.phone}
            <br />
            <i className="bi bi-envelope-fill me-2 text-success"></i>
            {c.email}
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;
