import debounce from 'lodash/debounce';
import React, { InputHTMLAttributes, useCallback, useMemo, useRef, useState } from 'react';
import { Button, Input } from '..';
import { ShopTypes } from '../../hooks/uiHooks/useGetShopColor';
import { SearchInputStyles } from './Styles';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  color?: ShopTypes;
  onSubmit?: () => void;
  onChangeValue?: (value: string) => void;
};

const SearchInputComponentNoMemo: React.FC<SearchInputProps> = (props) => {
  const {
    color,
    className,
    placeholder = 'Search',
    onChangeValue = () => { },
    onSubmit = () => { },
  } = props;
  const [searchFormValue, setSearchFormValue] = useState<string>('');
  const showClearInput = useMemo((): boolean => (Number(searchFormValue?.length) > 0), [searchFormValue]);
  const searchInputClassName = useMemo(() => `search-input-component${className ? ' ' + className : ''}${color ? ' --' + color : ''}${showClearInput ? ' --can-clear' : ''}`, [className, color, showClearInput]);
  const formRef: React.RefObject<HTMLFormElement> = useRef(null);

  const onChangeDebounced = useCallback(debounce((value: string) => {
    onChangeValue(value);
  }, 400), [])

  const handleOnChange = useCallback((value: string): void => {
    onChangeDebounced(value);
  }, [onChangeDebounced]);

  const handleOnSubmit = useCallback((): void => {
    onSubmit();
  }, []);

  const handleOnChangeForm = useCallback((param) => {
    const value: string = param?.target?.value || '';
    setSearchFormValue(value);
  }, []);

  const handleClearForm = useCallback(() => {
    formRef?.current?.reset();
    setSearchFormValue('');
    onChangeValue('');
  }, [formRef]);


  return (
    //@ts-ignore
    <SearchInputStyles {...props} className={searchInputClassName}>
      <form ref={formRef} className='search-form' onSubmit={handleOnSubmit} onChange={handleOnChangeForm}>
        <Input
          placeholder={placeholder}
          onChangeValue={handleOnChange}
          name='search'
          radius='circle'
          bordered={true}
        />
        <div className='search-input-button-wrapper'>
          <Button
            icon='faSearch'
            radius='circle'
            height={28}
            width={28}
            onSubmit={handleOnSubmit}
            className='btn-search'
          />
        </div>
      </form>
      {showClearInput && (
        <Button
          className='btn-clear-search'
          icon='trash'
          radius='circle'
          textColor='black'
          fillColor='transparent'
          iconColor='black'
          title='Clear'
          height={28}
          width={28}
          onClick={handleClearForm}
        />
      )}
    </SearchInputStyles >
  );
}

export const SearchInputComponent = React.memo(SearchInputComponentNoMemo);
