import Link from "next/link";

const Navbar = () => {
  return (
    <div className="md:flex flex-col gap-3 hidden">
      <Link href="/">About</Link>
      <Link href="/">Experience</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Academics</Link>
    </div>
  );
};

export default Navbar;
