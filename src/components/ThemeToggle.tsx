"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="
        h-10 w-10
        rounded-full
        bg-transparent
        hover:bg-black/10 dark:hover:bg-white/10
        transition-all
        group
      "
      aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      <Sun className="
        h-5 w-5 
        rotate-0 scale-100 
        transition-all 
        group-hover:rotate-90
        dark:-rotate-90 dark:scale-0
      " />
      <Moon className="
        absolute 
        h-5 w-5 
        rotate-90 scale-0 
        transition-all 
        group-hover:rotate-0
        dark:rotate-0 dark:scale-100
      " />
      
      {/* Indicador visual del tema actual */}
      <span className="sr-only">
        {theme === 'light' ? 'Tema claro' : 'Tema oscuro'}
      </span>
    </Button>
  );
}