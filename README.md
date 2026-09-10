# ZOMBIE_NEWS

> Sistema de noticias de videojuegos survival/zombie con estetica terminal hacker. Proyecto demo de portafolio en HTML, CSS y JS puro.

[![HTML](https://img.shields.io/badge/HTML5-%23E34F26?style=flat-square&logo=html5&logoColor=black)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-%231572B6?style=flat-square&logo=css3&logoColor=black)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JS](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-%2322272A?style=flat-square&logo=github&logoColor=%2339ff14)](https://pages.github.com/)

---

## DESCRIPCION

**ZombieNews** es un outlet ficticio de noticias de videojuegos enfocado en el genero **survival horror / zombie**. El sitio simula una consola de sistema hackeada: fondo negro puro, texto verde fosforo `#39ff14`, efecto CRT con scanlines y tipografia monoespaciada.

Todo contenido del sitio (juegos, noticias, estudios) es **100% inventado** para evitar problemas de marcas registradas. Los nombres de los juegos estan pensados para que suenen autenticos dentro del genero: *Carrion Protocol*, *Hollow Containment*, *Dead Meridian*, *Phantom Decay*, *Spec Ops: Infection*.

## DEMO EN VIVO

El sitio esta publicado en GitHub Pages:

```
https://devz10111.github.io/ZombieNews/
```

## CARACTERISTICAS

| Modulo | Descripcion |
| --- | --- |
| **HUD superior** | Barra fija tipo sistema: logo `[ZN]`, navegacion, reloj en vivo y estado `SYS:ONLINE` |
| **Heroe destacado** | Juego principal con tag, metadata editorial, descripcion y CTA estilo terminal |
| **Ticker de titulares** | Cinta de noticias en movimiento continuo estilo marquee |
| **Grid asimetrico** | Una tarjeta grande + cinco pequenas, separadas por bordes de 1px sin tarjetas redondeadas |
| **Panel de stats** | Seccion "sobre" con datos del sistema estilo dashboard |
| **Efectos CRT** | Scanlines, vinheta de pantalla, flicker, glitch aleatorio en el titulo y cursor parpadeante |
| **Easter egg** | Mensaje en la consola del navegador (F12) |

## TECNOLOGIAS

- **HTML5** semantico
- **CSS3** con variables CSS, grid, animaciones y media queries responsive
- **JavaScript vanilla** (sin frameworks ni dependencias): reloj, ticker, contador animado, glitch

## ESTRUCTURA

```
ZombieNews/
├── index.html     # Estructura de la pagina (HUD, heroe, grid, stats, footer)
├── style.css      # Estetica terminal/CRT completa
└── script.js      # Interactividad: reloj, ticker, glitch, easter egg
```

## COMO EJECUTARLO LOCALMENTE

No requiere build ni instalacion. Solo abrir el archivo:

```bash
# Opcion 1: abrir directamente en el navegador
start index.html

# Opcion 2: servidor local (recomendado)
python -m http.server 8000
# luego abrir http://localhost:8000
```

## DISCLAIMER

> **PROYECTO DEMO.** ZombieNews no es un medio de noticias real. Todos los juegos, estudios y noticias son ficticios y fueron creados con fines academicos / de portafolio.

---

*Hecho con `</>` y cafe en la rama `work`.*