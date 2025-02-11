<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="title-center">
    <h1>Espera si dijo si?</h1>
  </div>
  <div class="body-center">
    <img src="@/assets/Kronii-Loading.gif" alt="imagen de una linda rana" class="imagen" />
    <div>
      <RouterLink to="Yuppi" class="btn">Volver?</RouterLink>
    </div>
  </div>
</template>
