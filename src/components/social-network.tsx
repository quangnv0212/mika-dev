import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

export interface ISocialNetWorkProps {
  color?: string;
}

export function SocialNetWork({ color = "text-white" }: ISocialNetWorkProps) {
  return (
    <div className="flex gap-x-4 items-center">
      <Link href="https://www.facebook.com/mikavu.0212">
        <FaGithub className={`${color} hover:text-orange w-8 h-8`} />
      </Link>
      <Link href="https://www.facebook.com/mikavu.0212">
        <FaFacebook className={`${color} hover:text-orange w-8 h-8`} />
      </Link>
      <Link href="https://www.facebook.com/mikavu.0212">
        <FaLinkedin className={`${color} hover:text-orange w-8 h-8`} />
      </Link>
      <Link href="https://www.facebook.com/mikavu.0212">
        <FaSquareUpwork className={`${color} hover:text-orange w-8 h-8`} />
      </Link>
    </div>
  );
}
