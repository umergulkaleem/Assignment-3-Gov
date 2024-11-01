import Link from "next/link";
export default function Footer() {
  return (
    <div
      className="flex justify-between items-end min-h-screen"
      style={{ background: "black", color: "white" }}
    >
      <Link href="/">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/gallery">Gallery</Link>
      <br />
      <Link href="/contact">Contact</Link>
      <br />
      <Link href="/pageNo1">PageNo1</Link>
      <br />
      <Link href="pageNo2"> PageNo2</Link>
      <br />
      <Link href="videos">Videos</Link>
    </div>
  );
}
