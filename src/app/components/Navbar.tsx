import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link href="/">About</Link>
      <Link href="/">Experience</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Academics</Link>
    </div>
  );
};

export default Navbar;
