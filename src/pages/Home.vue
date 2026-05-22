<template>
  <div class="home-page">
    <header class="home-page__header">
      <span class="home-page__logo">Click 190</span>
      <button class="home-page__logout" @click="handleLogout">Sair</button>
    </header>

    <main class="home-page__content">
      <Maps />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Maps from '@/components/Maps.vue'

const router = useRouter()
const auth = useAuthStore()

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.home-page__header {
  align-items: center;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  padding: 0 1.5rem;
}

.home-page__logo {
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
}

.home-page__logout {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.375rem 0.875rem;
  transition:
    color 0.15s,
    border-color 0.15s;
}

.home-page__logout:hover {
  border-color: var(--color-text-muted);
  color: var(--color-text);
}

.home-page__content {
  display: flex;
  flex: 1;
  min-height: 0;
}
</style>
