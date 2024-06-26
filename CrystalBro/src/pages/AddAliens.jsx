import React from "react";
import "./AddAliens.css";

const Modal_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: " #FFF",
  padding: "250px",
  zIndex: 1000,
};
const OVERLAY_STYLES = {
  position: " fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};
// const BTN_STYLES = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   left: "30vw",
//   right: "30%",
// };

export function AddAliens({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={Modal_STYLES} className="">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>
  );
}
