import React from "react";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className="list-group">
      {contacts.length === 0 ? (
        <li className="list-group-item text-muted">No hay registros</li>
      ) : (
        contacts.map((c) => (
          <li
            key={c.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <i className="bi bi-person-circle me-2"></i>
              <strong>{c.name}</strong>
              <br />
              <i className="bi bi-telephone-fill me-2 text-primary"></i>
              {c.phone}
              <br />
              <i className="bi bi-envelope-fill me-2 text-success"></i>
              {c.email}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(c.id)}
            >
              Eliminar
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;
