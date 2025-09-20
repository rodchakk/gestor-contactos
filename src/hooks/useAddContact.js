// hooks/useAddContact.js

function useAddContact(contacts, setContacts) {
  // función simple para agregar un contacto
  const addContact = (form) => {
    setContacts([...contacts, { id: Date.now(), ...form }]);
  };

  return addContact; // devolvemos la función
}

export default useAddContact;  
