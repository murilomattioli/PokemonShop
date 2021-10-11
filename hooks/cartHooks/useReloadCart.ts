import uniqueId from "lodash/uniqueId";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { CartActionType } from "../../redux/types";

type ReturnProps = [() => void];

export default (): ReturnProps => {
  const dispatch = useDispatch();

  const useReloadCart = useCallback(() => {
    dispatch<CartActionType>({
      type: 'cart/reload',
      value: uniqueId(),
    });
  }, [dispatch]);

  return [useReloadCart];
};
