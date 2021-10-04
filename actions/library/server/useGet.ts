import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [(endPointUrl: string) => Promise<unknown>];

export default (): ReturnProps => {
  const useGet = useCallback(function(endPointUrl: string, query?: string): Promise<unknown> {
    return (axios.get(`${SERVER_URL}${endPointUrl}`, { method: 'GET', headers: { query: query || '' } }));
  }, []);

  return [useGet];
};
