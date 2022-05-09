import { Link } from 'react-router-dom'

type HeaderLink = {
  text: string;
  path: string;
}

type HeaderProps = { links: HeaderLink[] }

function Header({ links }: HeaderProps) {
  return (
    <div className="header-wrapper">
      <div className="header">
        {links.map(({ text, path }, i) => <Link to={path} key={i}>{text.toUpperCase()}</Link>)}
      </div>
    </div>
  );
}

export default Header;
