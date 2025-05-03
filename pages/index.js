import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-screen">
        <Image
          src="/poseidon-shirt.png"
          alt="Poseidon Tişörtü"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 text-center">Poseidon Koleksiyonu</h1>
          <p className="text-xl text-center max-w-xl">Yunan mitolojisinden ilham alan, denizlerin gücünü yansıtan eşsiz bir stil. Şimdi seninle.</p>
          <Button className="mt-6 px-6 py-3 text-lg">Hemen Satın Al</Button>
        </div>
      </section>
    </main>
  );
}
