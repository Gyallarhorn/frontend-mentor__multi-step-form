import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(null);

const dataTemplate = {
  name: '',
  email: '',
  number: '',
  plan: '',
  addOns: [],
};

const getData = () => {
  const data = JSON.parse(localStorage.getItem('MultiData'));
  if (!data) {
    localStorage.setItem('MultiData', JSON.stringify(dataTemplate));
    return dataTemplate;
  }
  return dataTemplate;
};

function DataProvider({ children }) {
  const [data, setData] = useState(getData());

  useEffect(() => {
    const refreshData = () => {
      localStorage.setItem('MultiData', JSON.stringify(data));
    };

    refreshData();
  }, [data]);

  const contextValue = useMemo(() => ({
    data,
    setData,
  }), [data]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DataContext, DataProvider };
