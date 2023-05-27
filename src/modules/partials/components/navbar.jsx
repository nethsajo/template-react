import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants/commons';

export function Navbar() {
  return (
    <div className="sticky z-40 flex h-24 w-full items-center bg-gray-100 bg-opacity-75 px-6 backdrop-blur-sm backdrop-saturate-50">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link to={ROUTES.HOME} className="font-bold">
          TemplateReact
        </Link>
        <nav>
          <ul className="flex items-center space-x-6 font-semibold text-slate-500">
            <li>
              <Link to={ROUTES.HOME} className="ease transition duration-500 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ABOUT} className="ease transition duration-500 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to={ROUTES.TODOS} className="ease transition duration-500 hover:text-blue-600">
                Todos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
