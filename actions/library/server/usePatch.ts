import { useCallback } from "react";
import axios from 'axios';
import { SERVER_URL } from "./Constants";

type ReturnProps = [<T>(url: string, body: Partial<T>) => Promise<unknown>];

export default (): ReturnProps => {
  const usePatch = useCallback(function<T>(endpointUrl: string, body: Partial<T>): Promise<unknown> {
    return (axios.patch(`${SERVER_URL}${endpointUrl}`, body, { method: 'PATCH' }));
  }, []);

  return [usePatch];
};
