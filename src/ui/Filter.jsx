import { useSearchParams } from 'react-router-dom';
import { css, styled } from 'styled-components';

const FilterList = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: 500;
`;

const FilterButton = styled.button`
  font-family: inherit;
  font-weight: inherit;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white);
  border: 1px solid var(--color-green-300);
  color: var(--color-dark);
  box-shadow: var(--box-shadow);
  transition: var(--transition-3s);

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-blue-500);
      color: var(--color-green-100);
    `}

  cursor: pointer;
  &:hover {
    background-color: var(--color-blue-500);
    color: var(--color-green-100);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

function Filter({ filterField, options }) {
  const [searchParamas, setSearchParams] = useSearchParams();
  function handleFilter(value) {
    searchParamas.set(filterField, value);
    setSearchParams(searchParamas);
  }
  const currentFilter = searchParamas.get(filterField);
  return (
    <FilterList>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleFilter(option.value)}
          active={currentFilter === option.value ? 'true' : ''}
          disabled={currentFilter === option.value ? 'true' : ''}
        >
          {option.label}
        </FilterButton>
      ))}
    </FilterList>
  );
}

export default Filter;
