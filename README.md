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

El sitio cuenta con **5 paginas**: `index` (hub con juego destacado), `noticias`, `resenas`, `fanart` y `comentarios`. El HUD, ticker, pie y menu movil son compartidos por todas mediante `components.js`.

## DEMO EN VIVO

El sitio esta publicado en GitHub Pages:

```
https://devz10111.github.io/ZombieNews/
```

## CARACTERISTICAS

| Modulo | Descripcion |
| --- | --- |
| **Sistema multipagina** | 5 paginas (inicio, noticias, resenas, fanart, comentarios) con chrome compartido inyectado por `components.js` |
| **HUD superior** | Barra fija tipo sistema: logo `[ZN]`, navegacion activa, reloj en vivo y estado `SYS:ONLINE` |
| **Heroe destacado** | Juego principal con tag, metadata editorial, descripcion y CTA estilo terminal |
| **Ticker de titulares** | Cinta de noticias en movimiento continuo estilo marquee |
| **Grid asimetrico** | Una tarjeta grande + cinco pequenas, separadas por bordes de 1px sin tarjetas redondeadas |
| **Log de noticias** | Lista estilo registro de sistema con timestamp, etiqueta y resumen |
| **Resenas con score** | Barras de puntuacion estilo `[▓▓▓▓░░]` y veredictos automatizados |
| **Galeria fanart** | Arte ASCII de la comunidad en frames terminales |
| **Comentarios giscus** | Seccion de comentarios real conectada a GitHub Discussions |
| **Panel de stats** | Seccion "sobre" con datos del sistema estilo dashboard |
| **Menu movil** | Hamburguesa en HUD con panel desplegable y navegacion tappable |
| **Efectos CRT** | Scanlines, vinheta de pantalla, flicker, glitch aleatorio en el titulo y cursor parpadeante |
| **Easter egg** | Mensaje en la consola del navegador (F12) |

## TECNOLOGIAS

- **HTML5** semantico (multipagina con `data-page` para marcar la seccion activa)
- **CSS3** con variables CSS, grid, animaciones y media queries responsive
- **JavaScript vanilla** (sin frameworks ni dependencias): componentes compartidos, reloj, ticker, contador animado, glitch
- **giscus** para los comentarios (GitHub Discussions integrado via script externo)

## ESTRUCTURA

```
ZombieNews/
├── index.html        # Hub: heroe destacado + grid + stats
├── noticias.html     # Feed de noticias estilo log
├── resenas.html      # Resenas con barras de score
├── fanart.html       # Galeria de arte ASCII
├── comentarios.html  # Comentarios via giscus (config en el mismo archivo)
├── style.css         # Estetica terminal/CRT completa
├── components.js     # Chrome compartido: HUD, nav, ticker, footer, reloj, menu movil
└── script.js         # Solo index: glitch del heroe y contador de articulos
```

## CONFIGURAR COMENTARIOS (GISCUS)

La pagina `comentarios.html` usa [giscus](https://giscus.app) y los comentarios se guardan en GitHub Discussions del repo. Configuracion unica:

1. En el repo: **Settings &rarr; General &rarr; habilita Discussions** y crea la categoria `General`.
2. Entra a `https://giscus.app`, conecta tu GitHub y selecciona tu repositorio + categoria.
3. Copia `data-repo-id` y `data-category-id`.
4. Abre `comentarios.html`, pega esos valores en el objeto `GISCUS_CONFIG` (arriba del script al final del archivo).
5. Sube los cambios (push).

Hasta que configures los IDs, la pagina muestra una caja con instrucciones en lugar del widget.

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