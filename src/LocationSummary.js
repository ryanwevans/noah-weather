import React from 'react';

function LocationSummary(props) {
  const { summary } = props;

  return (
      <div>
        <p className="locationSummaryText">{summary}</p>
      </div>
  );
}

export default LocationSummary;