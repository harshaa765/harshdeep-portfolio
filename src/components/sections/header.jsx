import Link from 'next/link';

import NavItems from '../elements/navMenu';
import ThemeToggle from '../elements/themetoggle';

export default function Header() {
  return (
    <header className="navbar sticky top-0 z-50 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <NavItems />
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl font-bold tracking-wide" href="/">
          Harshdeep Sharma
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavItems />
        </ul>
        <ThemeToggle /> {/* ✅ Add here */}
      </div>
    </header>
  );
}
