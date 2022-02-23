import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
background:  #8b4fc8;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
margin-bottom: 20px;
align-items: center;
text-align: center;
justify-content: center;
font-style: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #01bf71;
  color: #fff;
}
`;