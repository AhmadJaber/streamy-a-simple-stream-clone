import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals  visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui small basic test modal transition visible active"
      >
        <div className="ui icon header">
          <i className="archive icon" />
          {props.title}
        </div>

        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
