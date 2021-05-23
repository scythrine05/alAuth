import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <Link href="/">
          <div>
            {" "}
            <Image className="logo" src="/logo.png" height={70} width={60} />
          </div>
        </Link>
        <div className="donate">
          <Image
            className="icon"
            src="/icons/donate-icon.png"
            height={35}
            width={35}
          />
        </div>
      </header>
    </>
  );
}
