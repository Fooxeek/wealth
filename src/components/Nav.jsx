import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-10">
        <li>
          <Link
            to="/"
            className="flex items-center text-lime-600 hover:text-lime-800"
          >
            <IoIosAddCircle className="mr-2" />
            New Employees
          </Link>
        </li>
        <li>
          <Link
            to="/list"
            className="flex items-center text-lime-600 hover:text-lime-800"
          >
            <FaAddressCard className="mr-2" />
            Current Employees
          </Link>
        </li>
      </ul>
    </nav>
  );
}
