import Link from "next/link";
import { customTheme } from './CustomFlowbiteThemeComponent'; 
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function NavbarComponent() {
  return (
    <Navbar theme={customTheme.navbar} className="sticky top-0 z-50">
      <NavbarBrand as={Link} href="/">
        <img
          src="/istad logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold ">
          CSTAD
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">
          Home
        </NavbarLink>
        <NavbarLink href="/enroll">Enroll</NavbarLink>
        <NavbarLink href="/course">Course</NavbarLink>
        <NavbarLink href="/news">IT News</NavbarLink>
        <NavbarLink href="/job">Job Oppotunity</NavbarLink>
        <NavbarLink href="/about">About Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavbarComponent;
