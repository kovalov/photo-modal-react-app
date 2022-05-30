import { useState, useEffect } from 'react';

const useFetch = (url, responseAdapter) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const getData = async (url) => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(response.statusText);

        const json = await response.json();

        if (responseAdapter) {
          const adaptedJSON = responseAdapter(json);
          return setData(adaptedJSON);
        }
        setData(json);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch was aborted');
        }
      }
    };

    getData(url);

    return () => {
      controller.abort();
    };
  }, []);

  return [data, setData];
};

export default useFetch;
