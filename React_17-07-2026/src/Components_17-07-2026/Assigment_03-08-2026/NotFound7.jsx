import { Link, Outlet } from 'react-router-dom';

function NotFound7() {
  return (

    <div>

      <h1>404 Page Not Found</h1>

      <p>
        Sorry! The page you are looking for does not exist.
      </p>

      <Link to="/">
        Go Back Home
      </Link>

    </div>

  );
}

export default NotFound7;