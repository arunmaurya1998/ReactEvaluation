import { Link } from "react-router-dom";
import AllContex from "./AllContext";

export default function Navbar() {
  const Links = [
    {
      to: "/",
      lable: "HOME",
    },
    {
      to: "/login",
      lable: "LOGIN",
    },
    {
      to: "/logout",
      lable: "LOGOUT",
    },
    {
      to: "/product",
      lable: "PRODUCT",
    },
  ];

  return (
    <AllContex>
      {Links.map((link) => {
        <Link to={link.to} key={link.to}>
          {link.lable}
        </Link>;
      })}
    </AllContex>
  );
}
