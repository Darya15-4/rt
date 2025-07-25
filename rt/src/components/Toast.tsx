import React from "react";

const Toast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => (
  <div className="toast">
    {message}
    <button onClick={onClose}>Закрыть</button>
  </div>
);

export default Toast