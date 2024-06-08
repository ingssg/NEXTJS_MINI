"use client";

import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

type FetchDataResponse<T> = {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
};

export const useFetchData = <T,>(url: string): FetchDataResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (e) {
        setError(e as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const usePostData = <T,>(url: string, data: object) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const postData = async () => {
    try {
      await axios.post<T>(url, data);
    } catch (e) {
      setError(e as AxiosError);
    } finally {
      setLoading(false);
    }
  };
  postData();

  return { loading, error };
};
