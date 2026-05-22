<template>
  <div class="login-page">
    <form class="login-form" @submit.prevent="handleSubmit">
      <h1 class="login-form__title">Click 190</h1>

      <div class="login-form__fields">
        <input
          class="login-form__input"
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <input
          class="login-form__input"
          type="password"
          v-model="password"
          placeholder="Senha"
          required
        />
      </div>

      <button class="login-form__button" type="submit">Entrar</button>

      <p v-if="errorMessage" class="login-form__error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'

  const router = useRouter()
  const auth = useAuthStore()

  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  if (auth.authenticated) {
      router.push('/home')
  }

  function handleSubmit() {
    const success = auth.login(email.value, password.value)
    if (success) {
      router.push('/home')
    } else {
      errorMessage.value = 'Credenciais inválidas.'
    }
  }
</script>

<style scoped>
  .login-page {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100%;
    padding: 2rem;
  }

  .login-form {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 400px;
    padding: 2.5rem 2rem;
    width: 100%;
  }

  .login-form__title {
    color: var(--color-text);
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }

  .login-form__fields {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .login-form__input {
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    color: var(--color-text);
    font-size: 0.9375rem;
    outline: none;
    padding: 0.625rem 0.875rem;
    transition: border-color 0.15s;
    width: 100%;
  }

  .login-form__input::placeholder {
    color: var(--color-text-muted);
  }

  .login-form__input:focus {
    border-color: var(--color-primary);
  }

  .login-form__button {
    background-color: var(--color-primary);
    border: none;
    border-radius: var(--radius);
    color: #fff;
    cursor: pointer;
    font-size: 0.9375rem;
    font-weight: 500;
    padding: 0.625rem;
    transition: background-color 0.15s;
    width: 100%;
  }

  .login-form__button:hover {
    background-color: var(--color-primary-hover);
  }

  .login-form__error {
    color: var(--color-error);
    font-size: 0.875rem;
    text-align: center;
  }
</style>
