# AquaPool SpA — Landing Page Template

Plantilla HTML completa para una empresa de construcción y mantención de piscinas. Multi-página, responsive, con animaciones y datos mockeados listos para personalizar.

## Demo rápido

Abre `index.html` en cualquier navegador moderno (Chrome, Firefox, Edge, Safari). No requiere build ni dependencias locales — solo conexión a internet para fuentes (Google Fonts), Tailwind CDN y las imágenes de Unsplash.

## Estructura

```
empresa-piscinas-01/
├── index.html                  # Inicio
├── sobre-nosotros.html         # Sobre Nosotros
├── servicios.html              # Nuestros Servicios
├── galeria.html                # Galería con filtros + lightbox
├── precios.html                # 3 planes + tabla extra + FAQ
├── horario-clases.html         # Horario semanal de clases
├── contacto.html               # Form + mapa + info + horarios
├── privacidad.html             # Política de Privacidad
├── terminos.html               # Términos y Condiciones
├── 404.html                    # Página de error
├── README.md                   # Este archivo
└── assets/
    ├── css/
    │   └── styles.css          # Animaciones custom + utilidades
    ├── js/
    │   ├── data.js             # DATOS MOCK CENTRALIZADOS
    │   ├── components.js       # Navbar, footer, iconos SVG
    │   ├── main.js             # Init, reveal, contadores, carousel
    │   ├── gallery.js          # Filtros + lightbox galería
    │   ├── schedule.js         # Render del horario semanal
    │   ├── pricing.js          # Toggle precios + FAQ
    │   └── form.js             # Validación + envío simulado
    └── img/
        ├── logo.svg            # Logo principal
        └── logo-icon.svg       # Isotipo
```

## Stack

- **HTML5** semántico
- **Tailwind CSS 3** (vía CDN play)
- **JavaScript vanilla** (sin frameworks, sin bundlers)
- **Google Fonts**: Poppins (display) + Inter (body)
- **Unsplash** para imágenes placeholder
- **SVG inline** para iconos (sin dependencias)

## Cómo personalizar

### 1. Cambiar datos de la empresa

Abre `assets/js/data.js` y edita el objeto `COMPANY_INFO`:

```js
const COMPANY_INFO = {
  name: 'Tu Empresa SpA',
  tagline: '...',
  phone: '+56 ...',
  email: 'tu@empresa.cl',
  address: '...',
  // ...
};
```

Todos los datos visibles (navbar, footer, contacto, etc.) se generan a partir de este objeto.

### 2. Cambiar colores

Edita el bloque `<script>tailwind.config = { ... }</script>` en el `<head>` de cualquier HTML. Por ejemplo:

```js
tailwind.config = {
  theme: { extend: { colors: {
    cyan: { 500: '#tu-color', 600: '#tu-color-2' }
  }}}
};
```

O añade una paleta nueva:

```js
colors: {
  brand: { 500: '#1e40af', 600: '#1e3a8a' }
}
```

Y luego usa `bg-brand-500` en las clases.

### 3. Cambiar imágenes

Las URLs de imágenes están centralizadas en `data.js` (campos `image`, `src`, `avatar`, etc.). Reemplaza las URLs de Unsplash por las tuyas:

```js
const SERVICES = [
  { image: 'https://tu-dominio.com/img/piscina.jpg', ... }
];
```

**Importante**: si reemplazas por archivos locales, ponlos en `assets/img/` y usa rutas relativas: `'assets/img/piscina.jpg'`.

### 4. Cambiar textos legales

Edita directamente el contenido en `privacidad.html` y `terminos.html`.

### 5. Agregar/quitar páginas

1. Crea un nuevo archivo HTML copiando uno existente como base.
2. Cambia `data-page="xxx"` en `<body>`.
3. Agrega el link en `NAV_LINKS` dentro de `data.js`.
4. Agrega el `<div id="navbarMount"></div>` y `<div id="footerMount"></div>` en el HTML.

### 6. Conectar formulario a backend real

En `assets/js/form.js`, dentro de la función `initForm`, busca el bloque donde simula el envío:

```js
setTimeout(() => {
  showSuccess();
  form.reset();
  // ...
}, 1500);
```

Reemplaza el `setTimeout` por una llamada `fetch` a tu API:

```js
fetch('/api/contacto', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: fields.name.value,
    email: fields.email.value,
    // ...
  })
})
.then(r => r.ok ? showSuccess() : alert('Error al enviar'))
.catch(err => alert('Error: ' + err));
```

## Características

- Multi-página SEO-friendly (cada política/página legal es HTML independiente).
- Totalmente responsive (mobile-first, breakpoints Tailwind).
- Animaciones al scroll (IntersectionObserver) con clase `.reveal`.
- Contadores animados en stats (requestAnimationFrame).
- Carousel de testimonios auto-play.
- Galería con filtros por categoría y lightbox modal.
- Toggle mensual/anual en planes.
- FAQ accordion.
- Menú móvil hamburguesa con animación slide-in.
- Botón flotante de WhatsApp con pulse.
- Formulario con validación en vivo.
- Loader inicial de entrada.

## Compatibilidad

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+

## Despliegue

Sube la carpeta completa a cualquier hosting estático (Netlify, Vercel, GitHub Pages, hosting tradicional). No requiere build ni configuración de servidor.

### Despliegue en Netlify (drag & drop)

1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `empresa-piscinas-01`
3. Listo. Tu sitio estará en `https://xxx.netlify.app`

### Configurar dominio personalizado

Edita el `README.md` con tu dominio y configura DNS según el servicio de hosting.

## Soporte

Para dudas o sugerencias, contacta a través del formulario de la web o vía email.

---

**Versión**: 1.0.0
**Licencia**: Uso libre para proyectos comerciales y personales. Atribución no requerida pero agradecida.