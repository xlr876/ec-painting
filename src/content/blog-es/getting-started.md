---
title: Cómo comenzar con esta plantilla
description: Una guía breve para preparar un sitio web para su pequeño negocio con esta plantilla de Astro.
author: Equipo
date: 2026-01-15
tags: [guía, configuración]
draft: true
---

¡Le damos la bienvenida a su nuevo sitio web para pequeños negocios! Esta plantilla está diseñada para ayudarle a publicar rápidamente un sitio profesional, adaptable a móviles y de carga rápida.

## Configuración rápida

1. Clone el repositorio.
2. Ejecute `pnpm install` para instalar las dependencias.
3. Ejecute `pnpm dev` para iniciar el servidor de desarrollo.
4. Abra `http://localhost:4321` en su navegador.

## Personalice la información de su negocio

La información principal se encuentra en `src/data/siteData.ts`. Actualice allí el nombre del negocio, teléfono, correo electrónico, dirección, servicios, opiniones y equipo.

## Cambie el diseño

- **Colores y bordes**: edite el bloque `@theme` en `src/styles/theme.css`.
- **Tipografías**: actualice `src/config/brand.ts` y la lista de fuentes en `astro.config.mjs`.

## Agregue sus imágenes

Agregue fotos a las carpetas en `src/assets/images/`: `hero/` para la imagen principal, `about/` para una foto del equipo y `gallery/` para proyectos.

## Publique el sitio

La plantilla está preparada para Netlify. Suba el repositorio a GitHub y conéctelo en Netlify.
