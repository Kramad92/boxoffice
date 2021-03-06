/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

import { FlexGrid } from '../styled';
import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchstarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = useCallback(() => {
          if (isStarred) {
            dispatchstarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchstarred({ type: 'ADD', showId: show.id });
          }
        }, [isStarred, show.id]);

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
