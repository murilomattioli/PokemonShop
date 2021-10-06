import React, { InputHTMLAttributes, useCallback, useMemo, useRef, useState } from 'react';
import { Button, Input } from '..';
import { ShopColorNames } from '../../hooks/uiHooks/useGetShopColor';
import { SearchInputStyles } from './Styles';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  color?: ShopColorNames;
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
  const searchInputClassName = useMemo(() => `search-input-component${className ? ' ' + className : ''}${color ? ' --' + color : ''}`, [className, color]);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  console.log('color>', color);


  const handleOnChange = useCallback((): void => {
    const inputValue: string = inputRef?.current?.value || '';
    onChangeValue(inputValue);
  }, [inputRef]);

  const handleOnSubmit = useCallback((): void => {
    onSubmit();
  }, [inputRef]);

  return (
    //@ts-ignore
    <SearchInputStyles {...props} className={searchInputClassName}>
      <form className='search-form' onSubmit={handleOnSubmit}>
        <Input
          placeholder={placeholder}
          onChangeValue={handleOnChange}
          name='search'
          radius='circle'
        />
        <div className='search-input-button-wrapper'>
          <Button
            icon='faSearch'
            radius='circle'
            height={28}
            width={28}
          />
        </div>
      </form>
    </SearchInputStyles >
  );
}

export const SearchInputComponent = React.memo(SearchInputComponentNoMemo);
