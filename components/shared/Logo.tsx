import Link from "next/link";
import logo from "../../public/eventSpark.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <Link className="flex items-center select-none" href="/">
      <h1 className="text-xl font-semibold">EventSpark</h1>
      <Image src={logo} width={25} height={25} alt="EventSpark Logo" />
    </Link>
  );
};

export default Logo;
