"use client";

import { useCounter } from '@/contexts/CounterContext';

export default function CounterDisplay() {
  const { count } = useCounter();
  
  return (
    <div className="
      select-none
      font-light
      leading-none
      text-center
      px-4
      
      /* Escala responsiva por defecto */
      text-[5rem]    /* móvil pequeño */
      xs:text-[6rem] /* móvil grande */
      sm:text-[8rem] /* tablet */
      md:text-[10rem] /* desktop pequeño */
      lg:text-[12rem] /* desktop */
      xl:text-[14rem] /* desktop grande */
      
      /* Ajuste dinámico basado en el ancho de pantalla */
      w-full
      max-w-[90vw] /* límite en móvil */
      mx-auto
      
      /* Manejo de números largos */
      break-all
      overflow-hidden
      word-break: break-all
    ">
      {count}
    </div>
  );
}