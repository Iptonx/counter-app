# Counter App

Un contador simple y elegante construido con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**. Inspirado en [Simple Counter App](https://simplecounter.app/).

## Características

- ✨ **Interfaz minimalista y moderna** - Diseño limpio y responsive
- **Tema oscuro/claro** - Cambio dinámico de tema con persistencia en localStorage
- ⚡ **Rendimiento optimizado** - Construido con Next.js 16 y React 19
- **Totalmente responsive** - Funciona perfectamente en móvil, tablet y desktop
- **Context API** - Gestión de estado centralizada y eficiente
- **UI Components** - Componentes reutilizables basados en Radix UI
- ♿ **Accesible** - Buenas prácticas de accesibilidad incluidas

## Comenzar

### Requisitos previos

- Node.js 18+ 
- pnpm 10.17.0+

### Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Abrir en el navegador
open http://localhost:3000
```

### Scripts disponibles

```bash
pnpm dev      # Iniciar servidor de desarrollo
pnpm build    # Crear compilación de producción
pnpm start    # Iniciar servidor de producción
pnpm lint     # Ejecutar linter
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal de la aplicación
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   └── counter/
│       └── page.tsx        # Página del contador
├── components/
│   ├── counter.tsx         # Componente principal del contador
│   ├── ThemeToggle.tsx     # Botón para cambiar tema
│   ├── counter/
│   │   ├── CounterDisplay.tsx    # Muestra el valor del contador
│   │   ├── CounterControls.tsx   # Botones de control (+, -)
│   │   ├── CounterActions.tsx    # Acciones adicionales
│   │   ├── ResetDialog.tsx       # Diálogo para resetear
│   │   └── TopActions.tsx        # Acciones en la parte superior
│   └── ui/
│       ├── button.tsx      # Componente de botón
│       └── dialog.tsx      # Componente de diálogo
├── contexts/
│   ├── CounterContext.tsx  # Context para gestionar el contador
│   └── ThemeContext.tsx    # Context para gestionar el tema
└── lib/
    └── utils.ts            # Utilidades y helpers
```

## Tecnologías Utilizadas

### Frontend
- **Next.js** 16.1.1 - Framework React moderno
- **React** 19.2.3 - Biblioteca UI
- **TypeScript** 5 - Tipado estático
- **Tailwind CSS** 4 - Utilidades CSS
- **Radix UI** - Componentes accesibles sin estilos
- **Lucide React** - Iconos

### Herramientas de Desarrollo
- **pnpm** - Gestor de paquetes rápido
- **ESLint** 9 - Linter de código
- **PostCSS** 4 - Procesador de CSS

## Funcionalidades Principales

### Contador
- ➕ Incrementar el valor
- ➖ Decrementar el valor
- Resetear a cero

### Tema
- Cambiar entre tema claro y oscuro
- Persistencia de preferencia en localStorage
- Detección automática de preferencia del sistema

## Customización

### Cambiar colores
Los colores se definen en los componentes usando clases de Tailwind. Edita las clases `bg-` y `text-` en los componentes para cambiar la paleta.

### Modificar estilos
- Estilos globales: `src/app/globals.css`
- Configuración de Tailwind: `tailwind.config.ts` (si existe)

## Compilación para Producción

```bash
pnpm build
pnpm start
```

## Desarrollado por

[Ipton](https://github.com/Iptonx) - 2025

Inspirado en [Simple Counter App](https://simplecounter.app/)