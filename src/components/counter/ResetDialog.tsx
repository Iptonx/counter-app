// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { RotateCcw } from "lucide-react";
// import { useCounter } from '@/contexts/CounterContext';

// export default function ResetDialog() {
//   const { reset, count } = useCounter();

//   const handleReset = () => {
//     reset();
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="opacity-80 hover:opacity-100 transition hover:scale-105">
//           <RotateCcw className="h-6 w-6" />
//         </button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-106.25 bg-white border border-black/20 text-black">
//         <DialogHeader>
//           <DialogTitle className="text-xl font-medium">¿Reiniciar contador?</DialogTitle>
//           <DialogDescription className="text-black/70 mt-2">
//             Estás a punto de reiniciar el contador de <span className="font-bold text-black">{count}</span> a 0.
//             Esta acción no se puede deshacer.
//           </DialogDescription>
//         </DialogHeader>
        
//         <div className="py-6 flex flex-col items-center justify-center space-y-4">
//           <div className="flex items-center justify-center space-x-6">
//             <div className="flex flex-col items-center">
//               <span className="text-sm text-black/60 mb-1">Actual</span>
//               <div className="text-5xl font-light bg-black/5 px-6 py-3 rounded-lg">
//                 {count}
//               </div>
//             </div>
            
//             <div className="text-2xl text-black/40">→</div>
            
//             <div className="flex flex-col items-center">
//               <span className="text-sm text-black/60 mb-1">Nuevo</span>
//               <div className="text-5xl font-light bg-black/5 px-6 py-3 rounded-lg text-black/40">
//                 0
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <DialogFooter className="flex gap-3 sm:gap-3">
//           <DialogClose asChild>
//             <Button
//               type="button"
//               variant="outline"
//               className="border-black/30 text-black hover:bg-black/5 hover:text-black flex-1"
//             >
//               Cancelar
//             </Button>
//           </DialogClose>
          
//           <DialogClose asChild>
//             <Button
//               type="button"
//               onClick={handleReset}
//               className="bg-black text-white hover:bg-black/90 hover:text-white flex-1 border border-black"
//             >
//               Sí, reiniciar
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useCounter } from '@/contexts/CounterContext';

export default function ResetDialog() {
  const { reset, count } = useCounter();

  const handleReset = () => {
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="opacity-80 hover:opacity-100 transition hover:scale-105">
          <RotateCcw className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25 bg-white dark:bg-gray-900 border border-black/20 dark:border-white/20 text-black dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">¿Reiniciar contador?</DialogTitle>
          <DialogDescription className="text-black/70 dark:text-white/70 mt-2">
            Estás a punto de reiniciar el contador de <span className="font-bold text-black dark:text-white">{count}</span> a 0.
            Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-6">
            <div className="flex flex-col items-center">
              <span className="text-sm text-black/60 dark:text-white/60 mb-1">Actual</span>
              <div className="text-5xl font-light bg-black/5 dark:bg-white/10 px-6 py-3 rounded-lg">
                {count}
              </div>
            </div>
            
            <div className="text-2xl text-black/40 dark:text-white/40">→</div>
            
            <div className="flex flex-col items-center">
              <span className="text-sm text-black/60 dark:text-white/60 mb-1">Nuevo</span>
              <div className="text-5xl font-light bg-black/5 dark:bg-white/10 px-6 py-3 rounded-lg text-black/40 dark:text-white/40">
                0
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex gap-3 sm:gap-3">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="
                border-black/30 dark:border-white/30 
                text-black dark:text-white 
                hover:bg-black/5 dark:hover:bg-white/10 
                hover:text-black dark:hover:text-white 
                flex-1
              "
            >
              Cancelar
            </Button>
          </DialogClose>
          
          <DialogClose asChild>
            <Button
              type="button"
              onClick={handleReset}
              className="
                bg-black dark:bg-white 
                text-white dark:text-black 
                hover:bg-black/90 dark:hover:bg-white/90 
                hover:text-white dark:hover:text-black 
                flex-1 border border-black dark:border-white
              "
            >
              Sí, reiniciar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}