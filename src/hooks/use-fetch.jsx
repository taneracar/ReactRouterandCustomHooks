import { useState } from "react";

function useFetch(url, optinons = {}) {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...optinons });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      if (result) {
        setdata(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  }

  useFetch(() => {
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
