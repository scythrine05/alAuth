import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Link href="https://github.com/scythrine05/alAuth">
          <a target="_blank">
            <div className="contribute">
              <div>contribute to alAuth</div>
              <div>
                <Image
                  className="icon"
                  src="/icons/github-icon.png"
                  height={30}
                  width={32}
                />
              </div>
            </div>
          </a>
        </Link>
      </footer>
    </>
  );
}
