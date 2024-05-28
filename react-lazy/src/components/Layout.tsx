import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>React-lazy</h1>
        <code>
          lazy lets you defer loading component’s code until it is rendered for
          the first time.
        </code>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Layout;
