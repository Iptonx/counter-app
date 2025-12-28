"use client";

// import { Info, Settings } from "lucide-react";
import { Home, Info } from "lucide-react";
import { useState } from "react";
import ResetDialog from "./ResetDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function TopActions() {
  const [showInfo, setShowInfo] = useState(false);
  //   const [showSettings, setShowSettings] = useState(false);
  const [, setShowSettings] = useState(false);
  const router = useRouter();

  return (
    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
      {/* Izquierda: Botones de info/config */}

      {/* Botón para regresar a inicio */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => router.push("/")}
        className="
            h-10 w-10
            rounded-full
            bg-transparent
            hover:bg-black/10 dark:hover:bg-white/10
            transition-all
            group
            opacity-80 hover:opacity-100
          "
        aria-label="Regresar al inicio"
      >
        <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
      </Button>

      <div className="flex gap-6 relative">

          <button
            onClick={() => {
              setShowInfo(!showInfo);
              setShowSettings(false);
            }}
            className="opacity-80 hover:opacity-100 transition hover:scale-105 relative"
          >
            <Info className="h-6 w-6" />
            {showInfo && (
              <div className="
              absolute top-8 
              left-1/2 -translate-x-1/2
              w-64 p-4 
              bg-white dark:bg-gray-900 
              border border-black/20 dark:border-white/20 
              rounded-lg text-sm z-50 shadow-lg
            ">
              <p className="font-medium mb-2 text-black dark:text-white">
                Contador Simple
              </p>
              <p className="text-black/70 dark:text-white/70">
                Usa los botones +/- para incrementar o decrementar el valor. El
                botón de decremento solo aparece cuando el contador es mayor a
                0.
              </p>
            </div>
            )}
          </button>


        {/* <button 
          onClick={() => {
            setShowSettings(!showSettings);
            setShowInfo(false);
          }}
          className="opacity-80 hover:opacity-100 transition hover:scale-105 relative"
        >
          <Settings className="h-6 w-6" />
          {showSettings && (
            <div className="absolute top-8 left-0 w-48 p-3 bg-white dark:bg-gray-900 border border-black/20 dark:border-white/20 rounded-lg text-sm z-50 shadow-lg">
              <p className="font-medium mb-3 text-black dark:text-white">Configuración</p>
              <div className="space-y-2">
                <button className="block w-full text-left text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded">
                  Establecer límite máximo
                </button>
                <button className="block w-full text-left text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded">
                  Establecer límite mínimo
                </button>
                <button className="block w-full text-left text-sm text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded">
                  Cambiar intervalo
                </button>
              </div>
            </div>
          )}
        </button> */}

        <ResetDialog />
      </div>

      {/* Derecha: Botón de tema */}
      <ThemeToggle />
    </div>
  );
}
