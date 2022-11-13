import React from 'react';

const Alert = (props) => {
    return (
       
          props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}fully!</strong> {props.alert.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    );
};

export default Alert;