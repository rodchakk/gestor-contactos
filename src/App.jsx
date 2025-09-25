import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import useAddContact from "./hooks/useAddContact";

function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const raw = localStorage.getItem("contacts");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (e) {
      console.error("No se pudo guardar en localStorage:", e);
    }
  }, [contacts]);

  const addContact = useAddContact(setContacts);

  const deleteContact = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
        Swal.fire("Eliminado", "El contacto ha sido eliminado", "success");
      }
    });
  };

  const updateContact = (updated) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
    setEditingContact(null);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="p-4 shadow rounded bg-white"
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <h1 className="text-center mb-4">📒 Gestor de Contactos</h1>

        <ContactForm
          onSave={addContact}
          onUpdate={updateContact}
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />

        <p className="text-muted text-center">
          👥 Contactos guardados: {contacts.length}
        </p>

        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          onEdit={setEditingContact}
        />
      </div>
    </div>
  );
}

export default App;
