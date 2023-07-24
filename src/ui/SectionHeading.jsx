import { styled } from 'styled-components';
import Filter from './Filter';
import Heading from './Heading';
import Sort from './Sort';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

function SectionHeading({ heading, filterOptions, sortOptions }) {
  return (
    <Header>
      <Heading as="h1">{heading}</Heading>
      <Container>
        <Filter
          filterField={filterOptions.filterField}
          options={filterOptions.options}
        />
        <Sort options={sortOptions} />
      </Container>
    </Header>
  );
}

export default SectionHeading;
