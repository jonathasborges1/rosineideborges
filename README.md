# Rosineide B. Cavalcante — Site Profissional

Site institucional para psicóloga, focado em captação de pacientes em Manaus/AM com atendimento presencial e online.

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS** — tokens do design system
- **lucide-react** — ícones

## Design System

Tokens definidos em `design-system.md` e configurados em `tailwind.config.js`.

| Token    | Cor       | Classe Tailwind  |
|----------|-----------|------------------|
| bg       | #F5EFE6   | `bg-cream`       |
| sand     | #D4B99A   | `bg-sand`        |
| accent   | #B07855   | `bg-accent`      |
| dark     | #5C3D2E   | `bg-espresso`    |
| text     | #3B2A1E   | `text-ink`       |
| muted    | #8C6F5E   | `text-muted`     |

## Estrutura de pastas

```
app/
  layout.tsx        — metadados SEO, fontes Google
  page.tsx          — composição das seções
  globals.css       — base styles + utilitários

components/
  ui/
    Button.tsx      — botão pill (primary, outline, ghost)
    Card.tsx        — card com borda sand + sombra
  layout/
    Navbar.tsx      — navbar fixa, responsiva, mobile menu
    Footer.tsx      — rodapé completo
  sections/
    Hero.tsx        — headline SEO + CTA + stats
    Sobre.tsx       — apresentação + especializações
    Servicos.tsx    — cards de serviços
    ComoFunciona.tsx — 3 passos + CTA
    Beneficios.tsx  — lista de diferenciais
    FAQ.tsx         — accordion com SEO local
    Localizacao.tsx — mapa + endereço + horários
    CTAFinal.tsx    — seção de conversão final
  WhatsAppFloat.tsx — botão flutuante WhatsApp
```

## Antes de publicar

1. **Foto profissional** — substituir os placeholders nos componentes `Hero.tsx` e `Sobre.tsx`.
   Procure por `[ Foto profissional ]` nos arquivos.

2. **Google Maps** — verificar se o iframe de `Localizacao.tsx` exibe corretamente.
   Se necessário, gerar novo embed em [maps.google.com](https://maps.google.com).

3. **WhatsApp** — link configurado: `https://wa.me/5592988443673`

## Deploy na Vercel

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar localmente

```bash
npm run dev
```

Acesse `http://localhost:3000`

### 3. Deploy na Vercel

```bash
# Instalar Vercel CLI (se necessário)
npm i -g vercel

# Fazer deploy
vercel

# Deploy em produção
vercel --prod
```

Ou conecte o repositório diretamente em [vercel.com](https://vercel.com) para deploy automático a cada push.

### Variáveis de ambiente

Nenhuma variável de ambiente é necessária para o projeto atual.

## SEO configurado

- `title` — "Psicóloga em Manaus | Rosineide B. Cavalcante | Atendimento Online e Presencial"
- `meta description` — Otimizada com palavras-chave locais
- `keywords` — psicóloga em manaus, terapia em manaus, psicoterapia online, psicóloga praça 14
- `Open Graph` — título, descrição, locale pt_BR
- `Twitter Card` — summary_large_image
- Conteúdo das seções com menções naturais ao SEO local
