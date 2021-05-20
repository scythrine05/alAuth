import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div>
          {" "}
          <Link href="/">
            <Image className="logo" src="/logo.png" height={70} width={60} />
          </Link>
        </div>
      </header>
    </>
  );
}
