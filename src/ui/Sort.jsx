import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Select = styled.select`
  padding: 0.6rem 1.2rem;
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  border: 1px solid var(--color-green-300);
  background-color: var(--color-white);
  color: var(--color-dark);
  border-radius: var(--border-radius-sm);
  transition: var(--transition-3s);

  option {
    color: var(--color-dark);
    padding: 1rem 0;
  }
`;

function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select onChange={handleChange} value={sortBy}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default Sort;

{
  /* */
}
