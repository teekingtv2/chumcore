import { useEffect, useState } from "react";
import axios from "axios";
import { errorNotification } from "../utils/helpers";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();

    axios
      .get(`${import.meta.env.VITE_API_URL}/${url}`)
      .then((response) => {
        console.log(response);
        // if (response.status === 209) {
        //   window.location.replace(`/login`);
        // }
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") {
        } else {
          setLoading(false);
          setError(err?.response?.data?.error);
          errorNotification(err?.response?.data?.error);
        }
      });
    // return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
