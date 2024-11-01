import Link from "next/link";
export default function Videos() {
  return (
    <div>
      {/* <Navbar /> */}
      <br />
      <h1>Video</h1>
      <br />
      <Link href="/videos/video1">Video1</Link>
      <br />
      <Link href="/videos/video2">Video2</Link>
    </div>
  );
}
