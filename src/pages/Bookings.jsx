import { styled } from 'styled-components';
import Heading from '../ui/Heading';

const FilterList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  /* flex-wrap: wrap; */
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SortSelect = styled.select`
  padding: 0.6rem 1.2rem;
  font-family: inherit;
  outline: none;
  border: 1px solid va(--color-green-700);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-green-300);
  color: var(--color-dark);
  transition: var(--transition-3s);

  &:hover {
    /* background-color: var(--color-blue-500); */
  }

  option {
    color: var(--color-dark);
    padding: 1rem 0;
  }
`;

const StyledButton = styled.button`
  font-family: inherit;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-green-300);
  color: var(--color-dark);
  transition: var(--transition-3s);

  cursor: pointer;
  &:hover {
    background-color: var(--color-blue-500);
    color: var(--color-green-100);
  }
`;
function Bookings() {
  return (
    <>
      <div>
        <StyledHeader>
          <Heading as="h1">Bookings</Heading>
          <StyledFilterContainer>
            <FilterList>
              <li>
                <StyledButton>All</StyledButton>
              </li>
              <li>
                <StyledButton>Regular</StyledButton>
              </li>
              <li>
                <StyledButton>VIP</StyledButton>
              </li>
              <li>
                <StyledButton>Amount</StyledButton>
              </li>
            </FilterList>
            <SortSelect>
              <option>Sort by amount</option>
              <option>Sort by tour date</option>
            </SortSelect>
          </StyledFilterContainer>
        </StyledHeader>
      </div>
    </>
  );
}

export default Bookings;
