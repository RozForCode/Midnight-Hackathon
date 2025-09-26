import Image from "next/image";
  
import Upload from "./components/Upload";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">ShadowShare – Secure File Sharing</h1>
      <Upload />
    </main>
  );
}
