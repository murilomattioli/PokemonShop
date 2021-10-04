import React, { InputHTMLAttributes, useCallback, useRef } from 'react';
import { InputStyles } from './Styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChangeValue?: (value: string) => void;
};

const InputComponentNoMemo: React.FC<InputProps> = (props) => {
  const {
    onChangeValue = () => { },
    children,
    id,
    ...inputProps
  } = props;
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  return (
    //@ts-ignore
    <InputStyles {...props}>
      <input {...inputProps} ref={inputRef} onChange={handleOnChange} />
    </InputStyles>
  );
}

export const InputComponent = React.memo(InputComponentNoMemo);
