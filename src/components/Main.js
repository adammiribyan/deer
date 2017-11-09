import React from 'react';
import SessionForm from '../components/SessionForm';

const Main = (props) => {
  return(
    <main>
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <SessionForm />
        </div>
        <div className="col-sm-2" />
      </div>
    </main>
  )
}

export default Main;
