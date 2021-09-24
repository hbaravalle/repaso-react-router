import { Link } from "react-router-3";

export default function Header(props) {
    return(
        <header>
        <h1><Link to="/">Logo</Link></h1>
        <nav>
          <ul>
            <li><Link to="/africa">África</Link></li>
            <li><Link to="/america">América</Link></li>
            <li>Asia</li>
            <li>Europa</li>
            <li>Oceania</li>
          </ul>
        </nav>
      </header>
    )
}