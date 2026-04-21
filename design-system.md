# Design System — Rosineide Borges

Extraído visualmente de `base/imagens/tema.jpg`.

---

## 1. Paleta de Cores

| Token             | Hex       | Uso                                      |
|-------------------|-----------|------------------------------------------|
| `--color-bg`      | `#F5EFE6` | Fundo principal das seções               |
| `--color-bg-alt`  | `#FFFFFF` | Fundo de cards e seções alternadas       |
| `--color-sand`    | `#D4B99A` | Bordas, separadores, elementos neutros   |
| `--color-accent`  | `#B07855` | Botões, CTAs, destaques                  |
| `--color-dark`    | `#5C3D2E` | Seções escuras, textos sobre fundo claro |
| `--color-text`    | `#3B2A1E` | Texto principal (corpo)                  |
| `--color-muted`   | `#8C6F5E` | Texto secundário, legendas, placeholders |

### CSS Custom Properties

```css
:root {
  --color-bg:     #F5EFE6;
  --color-bg-alt: #FFFFFF;
  --color-sand:   #D4B99A;
  --color-accent: #B07855;
  --color-dark:   #5C3D2E;
  --color-text:   #3B2A1E;
  --color-muted:  #8C6F5E;
}
```

---

## 2. Tipografia

### Famílias

| Papel        | Família sugerida          | Alternativa Google Fonts |
|--------------|---------------------------|--------------------------|
| Display/H1   | Playfair Display (Serif)  | `Cormorant Garamond`     |
| Headings     | Playfair Display          | `Lora`                   |
| Body/UI      | Lato ou Raleway (Sans)    | `Raleway`, `Montserrat`  |

### Escala tipográfica

| Token              | Tamanho  | Peso     | Uso                        |
|--------------------|----------|----------|----------------------------|
| `--text-display`   | 3rem     | 400–600  | Título principal (Hero)    |
| `--text-h1`        | 2.25rem  | 600      | Títulos de seção           |
| `--text-h2`        | 1.75rem  | 500      | Subtítulos                 |
| `--text-h3`        | 1.25rem  | 500      | Cards, labels de seção     |
| `--text-body`      | 1rem     | 400      | Parágrafo padrão           |
| `--text-small`     | 0.875rem | 400      | Legendas, meta-info        |
| `--text-caption`   | 0.75rem  | 400      | Notas de rodapé            |

### CSS Custom Properties

```css
:root {
  --font-serif:  'Playfair Display', 'Lora', Georgia, serif;
  --font-sans:   'Raleway', 'Lato', 'Montserrat', sans-serif;

  --text-display: 3rem;
  --text-h1:      2.25rem;
  --text-h2:      1.75rem;
  --text-h3:      1.25rem;
  --text-body:    1rem;
  --text-small:   0.875rem;
  --text-caption: 0.75rem;
}
```

---

## 3. Espaçamento

Baseado em múltiplos de 4px.

| Token        | Valor  |
|--------------|--------|
| `--space-1`  | 4px    |
| `--space-2`  | 8px    |
| `--space-3`  | 12px   |
| `--space-4`  | 16px   |
| `--space-6`  | 24px   |
| `--space-8`  | 32px   |
| `--space-12` | 48px   |
| `--space-16` | 64px   |
| `--space-24` | 96px   |

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
}
```

---

## 4. Bordas e Raios

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-pill: 9999px;   /* botões arredondados */

  --border-color:  var(--color-sand);
  --border-width:  1px;
  --border-style:  solid;
}
```

---

## 5. Sombras

```css
:root {
  --shadow-sm:  0 1px 3px rgba(92, 61, 46, 0.08);
  --shadow-md:  0 4px 12px rgba(92, 61, 46, 0.12);
  --shadow-lg:  0 8px 24px rgba(92, 61, 46, 0.16);
}
```

---

## 6. Componentes

### Botão primário (CTA)

```css
.btn-primary {
  background-color: var(--color-accent);
  color: #FFFFFF;
  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--space-3) var(--space-8);
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-dark);
}
```

### Botão outline

```css
.btn-outline {
  background-color: transparent;
  color: var(--color-accent);
  border: var(--border-width) var(--border-style) var(--color-accent);
  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--space-3) var(--space-8);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background-color: var(--color-accent);
  color: #FFFFFF;
}
```

### Card

```css
.card {
  background-color: var(--color-bg-alt);
  border: var(--border-width) var(--border-style) var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
}
```

### Navbar

```css
.navbar {
  background-color: var(--color-bg-alt);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-12);
  border-bottom: var(--border-width) var(--border-style) var(--border-color);
}
```

### Seção Hero

```css
.section-hero {
  background-color: var(--color-bg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  padding: var(--space-24) var(--space-12);
}
```

### Seção escura (alternada)

```css
.section-dark {
  background-color: var(--color-dark);
  color: var(--color-bg);
  padding: var(--space-16) var(--space-12);
}
```

---

## 7. Layout

```css
:root {
  --container-max:  1200px;
  --container-pad:  var(--space-8);

  --grid-cols-2: repeat(2, 1fr);
  --grid-cols-3: repeat(3, 1fr);
  --grid-gap:    var(--space-8);
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding-inline: var(--container-pad);
}
```

---

## 8. Tokens Tailwind (tailwind.config.js)

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:     '#F5EFE6',
        'bg-alt': '#FFFFFF',
        sand:   '#D4B99A',
        accent: '#B07855',
        dark:   '#5C3D2E',
        text:   '#3B2A1E',
        muted:  '#8C6F5E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Lora', 'Georgia', 'serif'],
        sans:  ['Raleway', 'Lato', 'Montserrat', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
      },
    },
  },
}
```

---

## 9. Google Fonts (import)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## 10. Estilo geral / diretrizes

- **Personalidade**: Feminino, sofisticado, acolhedor, profissional.
- **Tom visual**: Minimalista com calor — muito espaço em branco, paleta terrosa.
- **Fotografias**: Sempre com tom quente, preferencialmente em bege/marrom, sem filtros frios.
- **Ícones**: Linha fina (stroke), tamanho 20–24px, cor `--color-muted` ou `--color-accent`.
- **Animações**: Sutis e lentas (`0.2s–0.4s ease`), sem efeitos chamativos.
- **Espaçamento**: Generoso — preferir mais padding do que menos.
