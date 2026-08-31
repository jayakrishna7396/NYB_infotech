import { Link } from 'react-router-dom';


function Users() {
  return (
    <div>

      <h1>Users List</h1>

      <ul>

        <li>
          <Link to="/users/101">
            User 101
          </Link>
        </li>

        <li>
          <Link to="/users/102">
            User 102
          </Link>
        </li>

        <li>
          <Link to="/users/103">
            User 103
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Users;