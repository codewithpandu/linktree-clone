import Image from "next/image";
import { data } from "../constant/data";

export default function Home() {
  return (
    <section>
      <div className="container max-w-xl mx-auto h-dvh p-8">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden ">
              <Image
                src="/images/profil.jpg"
                alt=""
                fill
                className="object-center"
              />
            </div>
            <div>
              <p className="font-bold text-xl text-foreground">
                Pandu Setia Darmawan
              </p>
            </div>
          </div>

          {/* List Button */}
          <div className="flex flex-col gap-4">
            {data.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id}>
                  <a
                    target="_blank"
                    href={item.link}
                    className="flex items-center gap-2 border p-4 text-foreground hover:bg-white/50 hover:backdrop-blur-md shadow-md"
                  >
                    <span className="bg-white p-2 rounded-full">
                      <Icon size={24} />
                    </span>
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
