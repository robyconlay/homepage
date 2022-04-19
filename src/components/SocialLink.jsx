import styled from 'styled-components';
import { useTheme } from '../ThemeContext';

export default function SocialLinkItem(props) {
  const { url, displayText, icon } = props;
  const theme = useTheme();

  return (
    <ListItem>
      <Link href={url} target='_blank' style={{ color: theme.body.color }}>
        {icon}
        <LinkText>
          {displayText}
        </LinkText>
      </Link>
    </ListItem>
  )
}

const ListItem = styled.li`
  margin: 15px 0;
  transition: all 0.2s;

  &:hover{
    /* transform: scale(1.2); */
  }
`;

const Link = styled.a`
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  text-decoration: none;

  &:hover{
    background-color: rgb(72, 204, 160);
  }
`;

const LinkText = styled.span`
  padding-left: 10px;
`;