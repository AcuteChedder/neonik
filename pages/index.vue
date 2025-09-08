<script lang="ts"></script>

<template>
  <main class="main">
    <div class="welcome">
      <div class="welcome__block">
        <h1 class="welcome__block-title">
          создаём digital-проекты и игры, которые объединяют партнёров,
          инвесторов и геймеров
        </h1>
        <button class="welcome__block-button">Узнать больше</button>
      </div>
      <div class="welcome__gallery">
        <img src="/mainPageContent/2.png" alt="" class="welcome__gallery-img" />
        <img src="/mainPageContent/3.png" alt="" class="welcome__gallery-img" />
        <img src="/mainPageContent/4.png" alt="" class="welcome__gallery-img" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  margin-top: 35px;
}

.welcome {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  &__block {
    background-image: url('/public/mainPageContent/1.png');
    background-size: cover;
    background-position: center;
    height: 472px;
    padding: 98px 88px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    &-title {
        font-family: "Inter", sans-serif;
        font-weight: 500;
        color: #fff;
        background: none;
        width: 565px;
    }

    &-button {
        border: none;
        padding: 10px 16px;
        border-radius: 30px;
        width: 150px;
        background-color: rgba(0, 247, 255, 1);
    }
  }

  &__gallery {
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-img {
        width: 235px;
        height: 147px;
    }
  }
}
</style>
