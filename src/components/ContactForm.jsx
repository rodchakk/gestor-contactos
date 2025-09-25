import React, { useState, useEffect } from "react";

function ContactForm({ onSave, onUpdate, editingContact, setEditingContact }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  // Si estamos editando, cargar los valores en el formulario
  useEffect(() => {
    if (editingContact) {
      setForm(editingContact);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;

    if (editingContact) {
      onUpdate(form); // actualizar
    } else {
      onSave(form); // agregar nuevo
    }

    setForm({ name: "", phone: "", email: "" });
  };

  const handleCancel = () => {
    setEditingContact(null);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
      <div className="mb-3">
        <label className="form-label">Nombre Completo</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Ej: Eren Yaeger"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Celular</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="form-control"
          placeholder="Ej: 9999-9999"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Ej: erenyaeger@example.com"
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">
          {editingContact ? "Actualizar Contacto" : "Agregar Contacto"}
        </button>
        {editingContact && (
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default ContactForm;

