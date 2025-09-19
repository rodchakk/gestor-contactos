import React from "react";

function ContactList({ contacts }) {
  return (
    <ul className="list-group">
      {contacts.length === 0 ? (
        <li className="list-group-item text-muted">No hay contactos aún</li>
      ) : (
        contacts.map((c) => (
          <li key={c.id} className="list-group-item">
            <strong>{c.name}</strong>
            <br />
            📞 {c.phone}
            <br />
            ✉️ {c.email}
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;
