<template>
  <div class="title-center">
    <h1>Quieres ser mi sanvalentin?</h1>
  </div>
  <div class="body-center">
    <img src="@/assets/cute-frog-with-heart.gif" alt="imagen de una linda rana" class="imagen" />
    <div>
      <button to="/" class="btn btn-no">NO</button>
      <RouterLink to="/happy" class="btn btn-yes">SI</RouterLink>
    </div>
  </div>
</template>

<style scooped>
.btn-no:hover:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, red, deeppink, crimson, red, deeppink, crimson);
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  transition: opacity 0.3s ease;
}

.btn-yes::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    red,
    blue,
    deeppink,
    blueviolet,
    red,
    blue,
    deeppink,
    blueviolet
  );
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Animacion */

.btn-yes:hover::before {
  opacity: 1;
  animation: btn_animation 20s linear infinite;
}

@keyframes btn_animation {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
