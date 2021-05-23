import Image from "next/image";
import Link from "next/link";

const Tabs = () => {
  return (
    <div className="tabs">
      <Link href="/dashboard">
        <div>
          <Image
            className="tab-1"
            src="/icons/dashboard-icon.png"
            height={35}
            width={27}
          />
        </div>
      </Link>
      <Link href="/docs">
        <div>
          <Image
            className="tab-2"
            src="/icons/docs-icon.png"
            height={35}
            width={35}
          />
        </div>
      </Link>
      <Link href="/activity">
        <div>
          <Image
            className="tab-3"
            src="/icons/activity-icon.png"
            height={30}
            width={30}
          />
        </div>
      </Link>
      <Link href="/setting">
        <div>
          <Image
            className="tab-4"
            src="/icons/setting-icon.png"
            height={30}
            width={30}
          />
        </div>
      </Link>
    </div>
  );
};

export default Tabs;
