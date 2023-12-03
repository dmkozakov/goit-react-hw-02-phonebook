import { ChangeEvent } from 'react';

interface Props {
  filter: string;
  changeFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Filter = ({ filter, changeFilter }: Props) => {
  return (
    <>
      <label>
        <p>Filter contacts by name</p>
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </>
  );
};
