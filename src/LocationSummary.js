import React from 'react';

function LocationSummary(props) {
  // const { summary } = this.props;

  return (
      <div>
        <form className="formZipCode">{props.summary}</form>
      </div>
  );
}

export default LocationSummary;