import { useEffect } from "react";
import "./modal_Pag1.css";

function ModalNote({ onClose }) {
  useEffect(() => {
    const modal = document.getElementById("draggableModal");
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      // Se è la prima volta che lo prendi, togli il transform e imposta left/top reali
      const rect = modal.getBoundingClientRect();

      // Imposta left/top basati su posizione corrente sullo schermo
      modal.style.left = `${rect.left}px`;
      modal.style.top = `${rect.top}px`;
      modal.style.transform = "none"; // disattiva centratura transform
      modal.style.transition = "none";

      isDragging = true;
      offset = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      modal.style.left = `${e.clientX - offset.x}px`;
      modal.style.top = `${e.clientY - offset.y}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      modal.style.transition = "";
    };

    modal.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      modal.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className="modalOverlay">
      <div className="modalContainer" id="draggableModal">
        <p>PROVA</p>
        <button onClick={onClose}>Chiudi</button>
      </div>
    </div>
  );
}

export default ModalNote;
