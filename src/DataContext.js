import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import price from './price';

const DataContext = createContext(null);

const dataTemplate = {
  name: '',
  email: '',
  number: '',
  plan: '',
  isYear: false,
  addOns: [],
};

const getData = () => {
  const data = JSON.parse(localStorage.getItem('MultiData'));
  if (!data) {
    localStorage.setItem('MultiData', JSON.stringify(dataTemplate));
    return dataTemplate;
  }
  return data;
};

function DataProvider({ children }) {
  const [data, setData] = useState(getData());

  const countTotal = () => {
    const { plan, addOns } = data;
    if (plan) {
      const priceArray = [plan, ...addOns];
      const total = priceArray.reduce((sum, elem) => sum + price[elem], 0);
      return data.isYear ? `$${total * 10}/yr` : `$${total}/mo`;
    }
    const totalNoPlan = addOns.reduce((sum, elem) => sum + price[elem], 0);
    return data.isYear ? `$${totalNoPlan * 10}/yr` : `$${totalNoPlan}/mo`;
  };

  useEffect(() => {
    const refreshData = () => {
      localStorage.setItem('MultiData', JSON.stringify(data));
    };

    refreshData();
  }, [data]);

  const contextValue = useMemo(() => ({
    data,
    setData,
    countTotal,
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
