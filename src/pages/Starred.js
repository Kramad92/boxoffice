import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/Show/ShowGrid';
import { DataDidNotLoad } from '../components/styled';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <DataDidNotLoad>Shows are still loading</DataDidNotLoad>}
      {error && <DataDidNotLoad>error occured: {error} </DataDidNotLoad>}
      {!isLoading && !shows && (
        <DataDidNotLoad>No shows were added</DataDidNotLoad>
      )}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
