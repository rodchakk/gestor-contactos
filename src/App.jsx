import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

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

  // Función que recibe datos del formulario y añade el contacto
  const addContact = (form) => {
    setContacts([...contacts, { id: Date.now(), ...form }]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">📒 Gestor de Contactos</h1>
      <ContactForm onSave={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
