import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Recipes", path: "/recipes" },
    { id: 4, name: "Contact Us", path: "/contact" },
    { id: 5, name: "Login", path: "/login" },
  ];

  return (
    <nav className="p-6 bg-slate-600 text-white">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
            open === true ? <AiOutlineClose className="text-2xl" /> : <FiMenu className="text-2xl" />
        }      
      </div>
      <ul className={`md:flex md:static absolute rounded-2xl duration-1000 bg-slate-600 p-5 ${open ? 'top-12': '-top-44'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
