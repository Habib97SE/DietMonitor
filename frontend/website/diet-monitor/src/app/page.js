import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello world </h1>{" "}
        <Link href="/signup">
            Signup
        </Link>
    </div>
  );
}
