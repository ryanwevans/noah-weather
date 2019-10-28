import React from 'react';

function LocationSearch(props) {
  // const { summary } = this.props;

  return (
      <div>
        <form className="formZipCode">{props.summary}</form>
      </div>
  );
}

export default LocationSearch;