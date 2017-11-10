import React from 'react';

const Notification = (props) => {
  if (!props.content) {
    return null;
  }

  return(
    <div className='row header__notification'>
      <div className='col-sm-2' />
      <div className='col-sm-8 alert alert-danger'>
        {props.content}
      </div>
      <div className='col-sm-2' />
    </div>
  )
}

export default Notification;
