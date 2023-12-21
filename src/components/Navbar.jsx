// src/app/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4">
      <Link href="/">
        <div className="text-white mx-2">Home</div>
      </Link>
      <Link href="/teams">
        <div className="text-white mx-2">Team</div>
      </Link>
      <Link href="/events">
        <div className="text-white mx-2">Events</div>
      </Link>
      <Link href="/timeline">
        <div className="text-white mx-2">Timeline</div>
      </Link>
      <Link href="/accommodation">
        <div className="text-white mx-2">Accommodation</div>
      </Link>
      <Link href="/login">
        <div className="text-white mx-2">Login</div>
      </Link>
    </nav>
  );
};

export default Navbar;
