/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';

const TestsContext = createContext();

export const TestsProvider = ({ children }) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/tests');
      setTests(response.data.data);
    } catch (err) {
      setError('Error al cargar los tests.' + err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTests();
  }, [fetchTests]);

  return (
    <TestsContext.Provider value={{ tests, loading, error, fetchTests }}>
      {children}
    </TestsContext.Provider>
  );
};

export const useTests = () => useContext(TestsContext);
