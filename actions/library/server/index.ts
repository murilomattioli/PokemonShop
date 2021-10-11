import useGet from "./useGet";
import usePost from "./usePost";
import usePatch from "./usePatch";
import useDelete from "./useDelete";
import * as useServerConfig from './Constants';

const useServer = {
  useGet,
  usePost,
  usePatch,
  useDelete,
  useServerConfig
};

export default useServer;
