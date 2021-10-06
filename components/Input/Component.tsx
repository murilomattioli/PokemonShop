import React, { InputHTMLAttributes, useCallback, useMemo, useRef } from 'react';
import { ShopColorNames } from '../../hooks/uiHooks/useGetShopColor';
import { InputStyles } from './Styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  color?: ShopColorNames,
  radius?: 'circle',
  bordered?: boolean,
  onChangeValue?: (value: string) => void;
};

const InputComponentNoMemo: React.FC<InputProps> = (props) => {
  const {
    onChangeValue = () => { },
    children,
    className,
    id,
    color = 'black',
    bordered,
    ...inputProps
  } = props;
  const inputClassName = useMemo(() => `search-input${className ? ' ' + className : ''}${color ? ' --' + color : ''}${bordered ? ' --bordered' : ''}`, [className, color, bordered]);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  return (
    //@ts-ignore
    <InputStyles {...props} className={inputClassName}>
      <input {...inputProps} ref={inputRef} onChange={handleOnChange} />
    </InputStyles>
  );
}

export const InputComponent = React.memo(InputComponentNoMemo);
