import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import useAddContact from "./hooks/useAddContact";

function App() {
  // 1) Inicializar desde localStorage UNA sola vez
  const [contacts, setContacts] = useState(() => {
    try {
      const raw = localStorage.getItem("contacts");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // 2) Guardar cuando cambie la lista
  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (e) {
      console.error("No se pudo guardar en localStorage:", e);
    }
  }, [contacts]);

  // 3) Hook personalizado: NO le pases 'contacts' para evitar cierres obsoletos
  const addContact = useAddContact(setContacts);

  // 4) Eliminar por id
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">📒 Gestor de Contactos</h1>

      <ContactForm onSave={addContact} />

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Buscar contacto..."
          disabled
        />
      </div>

      <p className="text-muted">👥 Contactos guardados: {contacts.length}</p>

      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
