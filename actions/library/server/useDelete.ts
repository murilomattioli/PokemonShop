import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [(endPointUrl: string, id: number) => Promise<unknown>];

export default (): ReturnProps => {
  const useDelete = useCallback(function(endPointUrl: string): Promise<unknown> {
    return (axios.delete(`${SERVER_URL}${endPointUrl}`, { method: 'DELETE' }));
  }, []);

  return [useDelete];
};
