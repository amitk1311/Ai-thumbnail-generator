import { createPortal } from 'react-dom';

const Portal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  
  return createPortal(
    children,
    document.body
  );
};

export default Portal;
