import React, { useState } from 'react';
import ActorGrid from '../components/Actors/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/Show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOptions, setsearchOptions] = useState('shows');

  const isShowsSearch = searchOptions === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setsearchOptions(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        value={input}
        onKeyDown={onKeyDown}
        onChange={onInputChange}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            checked={isShowsSearch}
            value="shows"
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            checked={!isShowsSearch}
            value="people"
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
