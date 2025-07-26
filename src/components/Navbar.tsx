import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold">Primeflix</Link>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}
