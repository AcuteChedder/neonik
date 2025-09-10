<script lang="ts" setup>

</script>

<template>
  <div class="layout">
    <header>
      <Header />
    </header>

    <main>
      <slot />
    </main>

    <footer>
        <Footer />
    </footer>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgba(21, 23, 24, 1);
}

.header {
    margin-top: 30px;
    z-index: 20;
}

.main {
  z-index: 10;
}

.layout {
    margin-inline: 100px;
}

</style>
