# Rick and Morty Challenge

## 🚀 Características Implementadas

### **Requisitos del Challenge (Cumplidos):**
- ✅ **Un solo componente principal**: `CharacterListWithHook.js`
- ✅ **Servicio dedicado**: `rickAndMortyService.js` para manejar las llamadas a la API
- ✅ **Custom Hook**: `useCharacters.js` que encapsula useEffect y la lógica de datos
- ✅ **useEffect**: Implementado dentro del custom hook para manejar el ciclo de vida
- ✅ **Fetch a la API**: https://rickandmortyapi.com/api/character
- ✅ **Primeros 20 personajes**: Limitado con `.slice(0, 20)`
- ✅ **Material-UI Cards**: Cada personaje se muestra en una Card
- ✅ **Nombre como título**: El nombre del personaje se muestra como título principal
- ✅ **Species y Status como descripción**: Formato `species: "Human"` y `status: "Alive"`

### **Mejoras Adicionales Implementadas:**
- 🎨 **Diseño responsive** para todas las resoluciones
- ⚡ **Estados de carga** con spinner
- 🚨 **Manejo de errores** con alertas
- 🎯 **Efectos hover** en las Cards
- 📱 **Grid system adaptativo** (1-6 cards por fila según pantalla)
- 🎨 **Tema personalizado** de Material-UI

## 📋 Requisitos del Sistema

### **Versiones Recomendadas:**
- **Node.js**: 16.x o superior
- **npm**: 8.x o superior
- **React**: 18.x (se instala automáticamente)
- **Material-UI**: 5.x (se instala automáticamente)

### **Verificación de Versiones:**
```bash
node --version
npm --version
```

## 🛠️ Instalación y Configuración

### **1. Clonar el Repositorio:**
```bash
git clone <url-del-repositorio>
cd rick-and-morty-challenge
```

### **2. Instalar Dependencias:**
```bash
npm install
```

**Nota:** No es necesario instalar React o Material-UI por separado, ya que el `package.json` incluye todas las dependencias necesarias y `npm install` las instalará automáticamente.

### **3. Ejecutar el Proyecto:**
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   └── CharacterListWithHook.js  # Componente principal (UN SOLO COMPONENTE)
├── hooks/
│   └── useCharacters.js          # Custom hook con useEffect y lógica de datos
├── services/
│   └── rickAndMortyService.js    # Servicio para API calls
├── App.js                         # Componente raíz con Material-UI Theme
└── index.js                       # Punto de entrada
```

## 🎨 Decisiones de Diseño y Personalizaciones

### **1. Título Principal: "Rick and Morty - Personajes"**
- **Justificación**: Aunque el challenge no especifica un título, se agregó para mejorar la experiencia de usuario y dar contexto a la aplicación
- **Implementación**: Typography con variant="h3" y responsive sizing

### **2. Subtítulo Informativo: "Mostrando X personajes..."**
- **Justificación**: Proporciona feedback al usuario sobre cuántos personajes se están mostrando
- **Implementación**: Footer informativo con contador dinámico

### **3. Tipografía y Tamaños de Texto**

#### **Nombres de Personajes:**
- **Variant**: `h6` (más prominente que subtitle1)
- **Tamaños responsive**:
  - Mobile (xs): `0.8rem`
  - Tablet (sm): `1rem`
  - Desktop (md+): `1.1rem`
- **Justificación**: Se ajustó para que los nombres largos como "Abadango Cluster Princess" se vean bien en todas las pantallas

#### **Descripciones (Species/Status):**
- **Variant**: `subtitle2`
- **Tamaños responsive**:
  - Mobile (xs): `0.7rem`
  - Tablet (sm): `0.8rem`
  - Desktop (md+): `0.85rem`
- **Justificación**: Tamaño más pequeño para información secundaria pero legible

### **4. Tamaños de Imágenes Responsive**
- **Mobile (xs)**: `200px` de altura
- **Tablet pequeña (sm)**: `240px` de altura
- **Tablet (md)**: `260px` de altura
- **Desktop (lg+)**: `260px` de altura

**Justificación**: Los tamaños se definieron considerando el nombre más largo de los personajes ("Ants in my Eyes Johnson", "Abadango Cluster Princess", etc.) para que las Cards mantengan proporciones agradables y el texto no se vea apretado.

### **5. Grid System Responsive**
- **xs (320px+)**: 1 card por fila
- **sm (600px+)**: 2 cards por fila
- **md (900px+)**: 3 cards por fila
- **lg (1200px+)**: 4 cards por fila
- **xl (1536px+)**: 6 cards por fila

### **6. Centrado del Grid**
- **Container**: `maxWidth="lg"` con centrado flex
- **Grid**: `justifyContent: 'center'` para centrar las cards
- **Justificación**: Evita que el contenido se vea desalineado hacia la izquierda en pantallas grandes

## 🔧 Tecnologías Utilizadas

- **React 18**: Framework principal
- **Material-UI (MUI) 5**: Componentes de UI
- **Emotion**: CSS-in-JS para estilos
- **Fetch API**: Para llamadas HTTP
- **Create React App**: Configuración del proyecto

## 📱 Responsive Design

El proyecto está optimizado para todas las resoluciones:

- 📱 **Mobile** (320px+): 1 card por fila, tipografía más pequeña
- 📱 **Tablet pequeña** (600px+): 2 cards por fila
- 📱 **Tablet** (900px+): 3 cards por fila
- 🖥️ **Desktop** (1200px+): 4 cards por fila
- 🖥️ **Desktop grande** (1536px+): 6 cards por fila

## 🎯 API Utilizada

- **URL**: https://rickandmortyapi.com/api/character
- **Método**: GET
- **Respuesta**: Lista de personajes con información completa
- **Limitación**: Se muestran solo los primeros 20 personajes

## 🚀 Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone la configuración de webpack (irreversible)

## 📝 Notas de Desarrollo

### **Decisiones Técnicas:**
1. **Un solo componente**: Se mantuvo la simplicidad como requiere el challenge
2. **Custom Hook**: Se implementó `useCharacters` para separar la lógica de datos de la UI
3. **Servicio separado**: Para mantener la separación de responsabilidades
4. **useEffect**: Implementado dentro del custom hook para manejar el ciclo de vida
5. **Material-UI**: Para componentes consistentes y responsive

### **Ventajas del Custom Hook:**
- **Separación de Responsabilidades**: La lógica de datos está separada de la UI
- **Reutilización**: El hook se puede usar en otros componentes
- **Testabilidad**: Más fácil de testear la lógica por separado
- **Legibilidad**: Componente más limpio y enfocado en la UI
- **Mantenibilidad**: Cambios en la lógica no afectan la UI

### **Consideraciones de UX:**
1. **Loading state**: Spinner mientras se cargan los datos
2. **Error handling**: Alertas informativas en caso de error
3. **Hover effects**: Feedback visual en las interacciones
4. **Responsive design**: Experiencia optimizada en todos los dispositivos

