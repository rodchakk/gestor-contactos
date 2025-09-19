import React from "react";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className="list-group">
      {contacts.length === 0 ? (
        <li className="list-group-item text-muted">No hay contactos aún</li>
      ) : (
        contacts.map((c) => (
          <li
            key={c.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{c.name}</strong>
              <br />
              📞 {c.phone}
              <br />
              ✉️ {c.email}
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
