// "use client";

// import { Button } from "@/components/ui/button";
// import { Minus, Plus } from "lucide-react";
// import { useCounter } from '@/contexts/CounterContext';

// export default function CounterControls() {
//   const { count, increment, decrement } = useCounter();
  
//   return (
//     <>
//       {count > 0 && (
//         <Button
//           variant="outline"
//           onClick={decrement}
//           className="
//             absolute left-6
//             h-14 w-14 rounded-full
//             border-black/40 text-black
//             hover:bg-black/5 hover:border-black/60
//             transition-all
//           "
//         >
//           <Minus className="h-6 w-6" />
//         </Button>
//       )}

//       <Button
//         variant="outline"
//         onClick={increment}
//         className="
//           absolute right-6
//           h-14 w-14 rounded-full
//           border-black/40 text-black
//           hover:bg-black/5 hover:border-black/60
//           transition-all
//         "
//       >
//         <Plus className="h-6 w-6" />
//       </Button>
//     </>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCounter } from '@/contexts/CounterContext';

export default function CounterControls() {
  const { count, increment, decrement } = useCounter();
  
  return (
    <>
      {count > 0 && (
        <Button
          variant="outline"
          onClick={decrement}
          className="
            absolute left-6
            h-14 w-14 rounded-full
            border-black/40 dark:border-white/40 
            text-black dark:text-white
            hover:bg-black/5 dark:hover:bg-white/10 
            hover:border-black/60 dark:hover:border-white/60
            transition-all
          "
        >
          <Minus className="h-6 w-6" />
        </Button>
      )}

      <Button
        variant="outline"
        onClick={increment}
        className="
          absolute right-6
          h-14 w-14 rounded-full
          border-black/40 dark:border-white/40 
          text-black dark:text-white
          hover:bg-black/5 dark:hover:bg-white/10 
          hover:border-black/60 dark:hover:border-white/60
          transition-all
        "
      >
        <Plus className="h-6 w-6" />
      </Button>
    </>
  );
}