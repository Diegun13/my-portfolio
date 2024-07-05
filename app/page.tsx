import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Image
        src="/image.jpg"
        alt="Image"
        width={200}
        height={200}
      />
    </main>
  );
}
