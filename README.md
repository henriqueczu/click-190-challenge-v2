# Click 190 — Challenge v2

Recriação do desafio técnico do processo seletivo original (Estágio 2024), agora com Vue 3 e as práticas modernas do ecossistema.

## Sobre o projeto

Aplicação web com autenticação e visualização de mapa. A versão original foi desenvolvida em Nuxt 2 com a API do Google Maps; esta versão mantém os mesmos requisitos funcionais usando Vue 3 com Leaflet e OpenStreetMap.

## Tecnologias

- **Vue 3** — Composition API com `<script setup>`
- **Vue Router 5** — roteamento com lazy loading e navigation guards
- **Pinia** — gerenciamento de estado global (Setup Store)
- **Leaflet** — mapa interativo via OpenStreetMap
- **Vite** — build tool e servidor de desenvolvimento
- **Prettier** — formatação de código

## Funcionalidades

- Autenticação com email e senha via variáveis de ambiente
- Persistência de sessão via `localStorage`
- Rotas protegidas — acesso ao mapa exige autenticação
- Redirecionamento automático para login em rotas não autenticadas
- Mapa interativo centralizado na região de Campo Limpo Paulista/SP

## Pré-requisitos

- Node.js `^20.19.0` ou `>=22.12.0`

## Configuração

Crie um arquivo `.env` na raiz do projeto com as credenciais de acesso:

```env
VITE_AUTH_EMAIL=seu@email.com
VITE_AUTH_PASSWORD=suasenha
```

## Instalação e uso

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

## Estrutura

```
src/
├── assets/        # Estilos globais e variáveis CSS
├── components/    # Componentes reutilizáveis (Maps)
├── pages/         # Páginas da aplicação (Login, Home)
├── router/        # Configuração de rotas e guards
├── stores/        # Stores Pinia (auth)
├── App.vue
└── main.js
```

## Comparação com a v1

| | v1 (2024) | v2 |
|---|---|---|
| Framework | Nuxt 2 (Vue 2) | Vue 3 + Vite |
| API de componentes | Options API | Composition API |
| Roteamento | Nuxt automático | Vue Router 5 |
| Estado global | Nenhum | Pinia |
| Autenticação | Hardcoded no componente | `.env` + localStorage + guard |
| Proteção de rotas | Nenhuma | Navigation Guard |
| Mapa | Google Maps API | Leaflet + OpenStreetMap |
