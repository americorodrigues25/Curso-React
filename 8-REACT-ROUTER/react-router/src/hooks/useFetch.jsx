import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [error, setError] = useState(null);

  const [deletee, setDeletee] = useState();

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod(method);
      setDeletee(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //6 - loading
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);

        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      }

      if (method === "DELETE") {
        const deleteUrl = `${url}/${deletee}`; // url + id do produto
        const res = await fetch(deleteUrl, config);
        const json = await res.json();
        setCallFetch(json); // dispara o re-fetch
      }
    };

    httpRequest();
  }, [config, method, url, deletee]);

  return { data, httpConfig, loading, error };
};
