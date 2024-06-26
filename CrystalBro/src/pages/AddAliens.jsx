import React from "react";
import "./AddAliens.css";

const Modal_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: " #0b0a1a",
  padding: "100px 150px ",
  zIndex: 1000,
  borderRadius: "60px",
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

export function AddAliens({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={Modal_STYLES} className="modalStyling">
        <form>
          <label for="nameInput">Name:</label>
          <input type="text" id="nameInput" name="Name"></input>
          <br />
          <label for="imgUrl">Image URL:</label>
          <input type="text" id="imgUrl" name="imgUrl"></input>
          <br />

          <label for="name_input" id="description">
            Description:
          </label>
          <input type="text" id="description" name="description"></input>
          <br />

          <label for="type">Type:</label>
          <input type="text" id="type" name="type"></input>
          <br />

          <label for="habitat">Habitat:</label>
          <input type="text" id="habitat" name="habitat"></input>
        </form>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>
  );
}
