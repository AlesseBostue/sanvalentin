<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="title-center">
      <h1>SIII DIJO QUE SI</h1>
    </div>
    <div class="body-center">
      <img src="@/assets/yay.gif" alt="imagen de una linda rana" class="imagen" />
      <div>
        <RouterLink to="/" class="btn btn-yes">Volver :D</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scooped>
.container {
  background-image: url('@/assets/kirby-kirbyspin.gif');
  background-repeat: true;
}
</style>
