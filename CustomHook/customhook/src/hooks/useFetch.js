import { useEffect, useState } from "react";

const useFetch = (url ) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    setError(null);

    fetch(url)
    .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
