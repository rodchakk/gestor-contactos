import { useCallback } from "react";

function useAddContact(setContacts) {
  // useCallback para estabilidad de referencia (opcional pero bueno)
  const addContact = useCallback(
    (form) => {
      setContacts((prev) => [
        ...prev,
        { id: crypto?.randomUUID?.() ?? Date.now(), ...form },
      ]);
    },
    [setContacts]
  );

  return addContact;
}

export default useAddContact;
