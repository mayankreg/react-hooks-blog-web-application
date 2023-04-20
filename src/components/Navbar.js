import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styling 3rd party components : <Link></Link>
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <div>
      <ul id="nav">
        <li>
          <StyledLink to="/">Home</StyledLink>
          {/* <Link to ="/">Home</Link> */}
        </li>
        <li>
          <StyledLink to="/create-post">Create Post</StyledLink>
          {/* <Link to ="/create-post">Create Post</Link> */}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;