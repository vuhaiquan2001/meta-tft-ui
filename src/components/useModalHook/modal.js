import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ isShowing, hide }) {
    return isShowing
        ? ReactDOM.createPortal(
              <div className="block w-full h-full bg-white z-40">
                  <button onClick={hide}>hi</button>
              </div>,
              document.body,
          )
        : null;
}

export default Modal;
