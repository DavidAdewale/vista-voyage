import { styled } from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Label = styled.label`
  font-size: inherit;
`;

function FormRowVertical({ label, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
    </StyledFormRow>
  );
}

export default FormRowVertical;
