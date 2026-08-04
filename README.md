# 🎬 Victor Seixas — Portfólio de Edição de Vídeo

Site portfólio pessoal de **Victor Seixas Alves**, editor de vídeo focado em conteúdo para redes sociais e vídeos institucionais.

**🔗 Acesse o site no ar:** [victorseixasalves.github.io/portfolioedicao-victorseixas](https://victorseixasalves.github.io/portifolioedicao-victorseixas/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hospedado%20em-GitHub%20Pages-222?style=flat&logo=github)

---

## 📖 Sobre o projeto

Um site de página única (*single page*) com identidade visual **futurista/holográfica** — vidro fosco (glassmorphism), gradientes iridescentes animados e tipografia tech — criado para apresentar os trabalhos de edição de vídeo do Victor de forma moderna e profissional.

O projeto não usa nenhum framework: é **HTML, CSS e JavaScript puros**, em um único arquivo, o que torna a hospedagem e a manutenção extremamente simples.

## ✨ Funcionalidades

- **Fundo animado contínuo** — esferas de gradiente que se movem por trás de toda a página, com uma variação de cor exclusiva ao chegar na seção Ferramentas
- **Design responsivo** — adapta o layout para desktop, tablet e celular (incluindo menu mobile)
- **Portfólio com vídeos incorporados** — 15 vídeos do YouTube (formato vertical 9:16) tocando direto no site, sem redirecionar o visitante
- **Barra de progresso de rolagem** e **animações de revelação** conforme o usuário rola a página
- **Formulário de contato funcional** — abre o e-mail do visitante já preenchido, sem precisar de servidor/backend
- **Acessibilidade** — navegação por teclado, `prefers-reduced-motion` respeitado, textos alternativos em imagens

## 🗂️ Seções do site

| Seção | Conteúdo |
|---|---|
| **Hero** | Nome, chamada principal e botões de ação (Ver portfólio / Falar no WhatsApp) |
| **Sobre** | Foto, bio e informações rápidas (localização, formação, ferramenta principal, idiomas) |
| **Serviços** | Edição para redes sociais e vídeos institucionais |
| **Portfólio** | Grade com os vídeos editados, incorporados direto do YouTube |
| **Ferramentas** | Stack de edição (CapCut como principal, Photoshop e Canva como apoio) |
| **Depoimentos** | Feedbacks de clientes |
| **Contato** | WhatsApp, e-mail, LinkedIn, GitHub e formulário de contato |

## 🛠️ Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** — variáveis customizadas, Grid, Flexbox, `backdrop-filter`, animações via `@keyframes`
- **JavaScript** puro (vanilla) — `IntersectionObserver` para as animações de rolagem, filtro de fundo e formulário
- **Google Fonts** — Space Grotesk, Inter e JetBrains Mono
- **YouTube Embed API** — vídeos incorporados com `referrerpolicy` configurado para evitar o erro 153 do player

## 🚀 Como rodar localmente

Por ser um arquivo único, não é necessário instalar nada. Duas opções:

```bash
# Opção 1: abrir direto no navegador
# (os vídeos do YouTube podem não tocar por causa da política de referrer)

# Opção 2 (recomendada): rodar um servidor local simples
python -m http.server
# depois acesse http://localhost:8000
```

## 🌐 Como hospedar (GitHub Pages)

Este projeto já está hospedado gratuitamente via **GitHub Pages**:

1. Configurações do repositório → **Settings → Pages**
2. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
3. Salve — o GitHub gera o link automaticamente


<p align="center">Feito por Victor Seixas Alves © 2026</p>
