import { useState } from "react";

export const useDisclosure = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((state) => !state);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
