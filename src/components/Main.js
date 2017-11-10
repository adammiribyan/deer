import React from 'react';
import SessionForm from '../components/SessionForm';

const Main = (props) => {
  return(
    <main>
      <div className="row">
        <div className="col-sm-2" />
          <div className="col-sm-8" style={{ overflow: 'hidden' }}>
          {props.isLoggedIn ? (
            <img src="https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/01/Flower-embarrassed-.gif" />
          ) : (
            <SessionForm dispatch={props.dispatch} />
          )}
        </div>
        <div className="col-sm-2" />
      </div>
    </main>
  )
}

export default Main;
