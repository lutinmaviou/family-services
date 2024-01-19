import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around text-center font-bold flex-wrap">
        <div className="border w-1/2 bg-lime-400">
          <Link href="/recap">
            <li>Recap</li>
          </Link>
        </div>
        <div className="border w-1/2 bg-amber-400">
          <Link href="/fraisKm">
            <li>Frais KM</li>
          </Link>
        </div>
        <div className="border w-1/3 bg-cyan-300">
          <Link href="/clients">
            <li className="pt-0.5 pb-0.5">Clients</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
