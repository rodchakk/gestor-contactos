import React, { useState, useEffect } from "react";

function ContactForm({ onSave }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    onSave(form); // 👈 le decimos al padre (App) que guarde
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
      <button type="submit" className="btn btn-primary w-100">
        Agregar Contacto
      </button>
    </form>
  );
}

export default ContactForm;
