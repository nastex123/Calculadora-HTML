# Calculadora Mamalona - Proyecto Académico

Este es un proyecto de calculadora básica desarrollado para RIWI. El objetivo es demostrar el uso de tecnologías web fundamentales (HTML, CSS y JavaScript) mediante una interfaz funcional y estética.

## Tecnologías Utilizadas

* **HTML5**: Estructura semántica de la aplicación.
* **CSS**: Diseño responsivo, uso de **CSS Grid** para el teclado interactivo y **Flexbox** para la alineación de la operación.
* **JavaScript**: Lógica aritmética, manipulación del DOM y gestión de eventos de teclado.
* **Bootstrap Icons**: Iconografía para la interfaz y redes sociales.

## Características

* **Formato Lineal**: Visualización de la operación en el formato `[Num1 op Num2 = Resultado]`.
* **Teclado Interactivo**: Permite la entrada de datos mediante clics sin perder el foco en los campos de texto.
* **Validaciones**: Control de errores para entradas no numéricas y prevención de división por cero.
* **Diseño Modular**: Separación de estilos de la calculadora (`style.css`) y de la estructura global (`layout.css`).
* **Operaciones Soportadas**: Suma, Resta, Multiplicación, División y Porcentaje.

## 📋 Estructura del Proyecto

```text
├── index.html          # Estructura principal
├── style.css           # Estilos específicos de la calculadora
├── layout.css          # Estilos del Navbar y Footer
└── calculadora.js      # Lógica de programación
