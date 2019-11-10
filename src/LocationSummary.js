import React from 'react';

function LocationSummary(props) {
  const { summary, loading } = props;

  return (
      <div>
        <p className="locationSummaryText">{ loading ? 'Fetching your local weather' : summary}</p>
      </div>
  );
}

export default LocationSummary;