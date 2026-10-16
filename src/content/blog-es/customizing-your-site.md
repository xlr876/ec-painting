---
title: Cómo personalizar su sitio
description: Aprenda a personalizar la marca, los colores, el contenido y el diseño de la plantilla.
author: Equipo
date: 2026-02-01
tags: [guía, personalización]
draft: true
---

Una de las ventajas de esta plantilla es que puede adaptarla a su negocio sin tener que buscar entre decenas de archivos.

## El archivo principal

Abra `src/data/siteData.ts`. Allí puede editar:

- El nombre y el lema del negocio.
- El teléfono, correo electrónico y dirección.
- El horario de atención.
- Los servicios y sus descripciones.
- Las opiniones de clientes y los integrantes del equipo.
- Los enlaces de navegación y redes sociales.

## Cambiar los colores

Abra `src/styles/theme.css` y edite el bloque `@theme`, donde se definen los colores, bordes, tipografía y espaciado. Tailwind genera las clases correspondientes automáticamente.

## Cambiar las tipografías

Actualice el nombre de las fuentes en `src/config/brand.ts` y en la lista de fuentes de `astro.config.mjs` para mantener ambas configuraciones sincronizadas.

## Agregar páginas

Cree un archivo `.astro` dentro de `src/pages/`. Por ejemplo, `src/pages/faq.astro` estará disponible en `/faq`. Recuerde agregarlo a la navegación si desea mostrar el enlace.

## Escribir artículos

Agregue un archivo Markdown a `src/content/blog/`. Incluya en los metadatos el título, la descripción, la fecha y las etiquetas.
