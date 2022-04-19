import styled from 'styled-components';

export default function Bio(props) {
  const { year, text } = props;

  return (
    <BioContainer>
      <BioYear>{year}</BioYear>{text}
    </BioContainer>
  )
}

const BioContainer = styled.li`
  padding-top: 4px;
`;

const BioYear = styled.span`
  padding-right: 20px;
  font-weight: bold;
`