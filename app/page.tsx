import { Navbar } from "@/src/components/Navbar";
import { CardVideo } from "@/src/components/CardVideo";
import { COLORS } from "@/src/styles/theme";
import { cardsInfo } from "@/src/db/cardData";
import { CardFuntion } from "@/src/components/CardFunction";

export default function Home() {
  return (
    <div
      className="relative min-h-screen font-sans bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20230526/pngtree-3d-rendering-of-a-financial-background-image_2636370.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="mx-auto col min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-6 py-12 sm:px-10 lg:px-16">
          <section className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Contenido izquierdo */}
            <div className="flex flex-col gap-6">
              <div>
                <h1
                  className="text-4xl font-bold leading-tight tracking-tight dark:text-white md:text-5xl"
                  style={{ color: COLORS.text }}
                >
                  Toma el control de tu dinero de forma{" "}
                  <span className="text-blue-500">simple y clara</span>
                </h1>
                <p className="mt-3 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                  Esta aplicación te permite llevar un control de tus finanzas
                  personales, incluyendo ingresos, gastos y presupuestos. Con
                  una interfaz intuitiva y fácil de usar, podrás visualizar tus
                  finanzas de manera clara y tomar decisiones informadas para
                  mejorar tu situación económica.
                </p>
              </div>
            </div>

            {/* Contenido derecho */}
            <div className="flex w-full justify-center lg:justify-end">
              <CardVideo />
            </div>
          </section>
          <section id="funciones" className="mt-12 flex w-full flex-col gap-6">
            <h2
              className="text-center text-3xl font-bold"
              style={{ color: COLORS.text }}
            >
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Diseñado meticulosamente para ofrecer la mejor experiencia en
              gestión financiera personal.
            </p>
            <div className="grid w-full grid-cols-2 items-center gap-12 lg:grid-cols-3">
              {cardsInfo.map((card) => (
                <CardFuntion
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
