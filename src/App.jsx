import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import useAddContact from "./hooks/useAddContact";


function App() {
  const [contacts, setContacts] = useState([]);

  // Cargar desde LocalStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("contacts");
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }, []);

  // Guardar en LocalStorage cada vez que cambie la lista
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // usamos el hook personalizado
  const addContact = useAddContact(contacts, setContacts);

  // Función que elimina un contacto por id
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">📒 Gestor de Contactos</h1>

      {/* Formulario */}
      <ContactForm onSave={addContact} />

      {/* Barra de búsqueda (solo visual por ahora) */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Buscar contacto..."
          disabled
        />
      </div>

      {/* Contador de contactos */}
      <p className="text-muted">👥 Contactos guardados: {contacts.length}</p>

      {/* Lista */}
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
