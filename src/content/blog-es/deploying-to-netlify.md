---
title: Cómo publicar el sitio en Netlify
description: Pasos para publicar gratis el sitio de su pequeño negocio en Netlify.
author: Equipo
date: 2026-02-15
tags: [guía, publicación]
draft: true
---

Esta plantilla está preparada para Netlify. El archivo `netlify.toml` contiene el comando de compilación, la carpeta de publicación y encabezados de seguridad.

## Pasos para publicar

### 1. Suba el proyecto a GitHub

Cree un repositorio en GitHub y suba el proyecto para conectar el sitio con Netlify.

### 2. Conecte el repositorio en Netlify

1. Inicie sesión en [Netlify](https://app.netlify.com).
2. Seleccione **Add new site** y luego **Import an existing project**.
3. Elija el repositorio de GitHub.
4. Netlify detectará la configuración de compilación del archivo `netlify.toml`.
5. Seleccione **Deploy site**.

### 3. Configure su dominio

En el panel de Netlify, agregue su dominio personalizado. Netlify proporciona certificados HTTPS.

### 4. Actualice la URL del sitio

Cambie el campo `site` en `astro.config.mjs` y el campo `url` en `src/data/siteData.ts` para que coincidan con su dominio. Así el mapa del sitio y las URL canónicas usarán la dirección correcta.

## Formulario de contacto

El formulario utiliza Netlify Forms. Cuando el sitio esté publicado en Netlify, los mensajes aparecerán en la sección **Forms** de su panel.
