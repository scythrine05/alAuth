import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="foot-links">
          <Link href="/privacy">
            <a target="__blank">
              <p>Privacy</p>
            </a>
          </Link>
          <Link href="/sitemap">
            <a target="__blank">
              <p>SiteMap</p>
            </a>
          </Link>
          <Link href="/about">
            <a target="__blank">
              <p>About</p>
            </a>
          </Link>
        </div>
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
