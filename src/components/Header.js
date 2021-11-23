import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <Link to="/">Home</Link> <Link to="/about"> about</Link>
        </div>
    );
  }
  
export default Header;