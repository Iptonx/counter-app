"use client";

import { Info, Settings } from "lucide-react";
import { useState } from 'react';
import ResetDialog from './ResetDialog';

export default function CounterActions() {
  const [showInfo, setShowInfo] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="absolute top-6 flex gap-6">
        <button 
          onClick={() => {
            setShowInfo(!showInfo);
            setShowSettings(false);
          }}
          className="opacity-80 hover:opacity-100 transition hover:scale-105 relative"
        >
          <Info className="h-6 w-6" />
          {showInfo && (
            <div className="absolute top-8 left-0 w-64 p-4 bg-white border border-black/20 rounded-lg text-sm z-50 shadow-lg">
              <p className="font-medium mb-2 text-black">Contador Simple</p>
              <p className="text-black/70">
                Usa los botones +/- para incrementar o decrementar el valor.
                El botón de decremento solo aparece cuando el contador es mayor a 0.
              </p>
            </div>
          )}
        </button>

        <button 
          onClick={() => {
            setShowSettings(!showSettings);
            setShowInfo(false);
          }}
          className="opacity-80 hover:opacity-100 transition hover:scale-105 relative"
        >
          <Settings className="h-6 w-6" />
          {showSettings && (
            <div className="absolute top-8 left-0 w-48 p-3 bg-white border border-black/20 rounded-lg text-sm z-50 shadow-lg">
              <p className="font-medium mb-3 text-black">Configuración</p>
              <div className="space-y-2">
                <button className="block w-full text-left text-sm text-black/80 hover:text-black p-2 hover:bg-black/5 rounded">
                  Establecer límite máximo
                </button>
                <button className="block w-full text-left text-sm text-black/80 hover:text-black p-2 hover:bg-black/5 rounded">
                  Establecer límite mínimo
                </button>
                <button className="block w-full text-left text-sm text-black/80 hover:text-black p-2 hover:bg-black/5 rounded">
                  Cambiar intervalo
                </button>
              </div>
            </div>
          )}
        </button>

        <ResetDialog />
      </div>
    </>
  );
}