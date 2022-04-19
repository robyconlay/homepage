
import styled from 'styled-components';

export default function Hobby(props) {
  const { title, imagePath, description, text } = props;

  return (
    <HobbyContainer>
      <HobbyTitle>{title}</HobbyTitle>
      {imagePath && <HobbyImage src={imagePath} alt={description} />}
      <HobbyText>{text}</HobbyText>
    </HobbyContainer>
  )
}

const HobbyContainer = styled.div`

`;

const HobbyTitle = styled.h3`
  
`;

const HobbyText = styled.p`
  
`;

const HobbyImage = styled.img`
  transition: all 0.2s;
  width: 30vw;
  height: auto;
  &:hover{
    transform: scale(1.4);
  }
`