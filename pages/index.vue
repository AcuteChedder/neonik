<script lang="ts"></script>

<template>
  <main class="main">
    <div class="welcome">
      <div class="welcome__circle"></div>
      <div class="welcome__circle-2"></div>
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

    <div class="work">
      <h1 class="work__title">Чем мы занимаемся</h1>
      <div class="work__block">
        <div class="work__info">
          <p class="work__info-ideas">
            Наши решения помогают инвесторам, партнёрам и брендам выходить к
            активной аудитории через современные форматы.<br />
            Для игроков мы делаем увлекательные продукты, которые формируют
            комьюнити и задают новые стандарты развлечений.
          </p>
          <p class="work__info-studio">
            то digital-студия нового поколения, которая разрабатывает игры,
            мобильные приложения и инновационные цифровые продукты.<br />Мы
            объединяем опыт в геймдеве, маркетинге и IT, чтобы создавать проекты
            с высоким уровнем вовлечённости и монетизации
          </p>
        </div>
        <div class="work__images">
          <img class="work__images-img" src="/mainPageContent/5.png" alt="" />
          <img class="work__images-img" src="/mainPageContent/6.png" alt="" />
        </div>
      </div>
    </div>

    <div class="progress">
      <h1 class="progress__title">
        За 12 месяцев мы выпустили 5 новых digital-<br>продуктов, которые уже
        используют<br>десятки тысяч пользователей
      </h1>
      <div class="progress__block">
        <p class="progress__block-schema">3 года на рынке</p>
        <p class="progress__block-schema">10+ Выпущенных проектов</p>
        <p class="progress__block-schema">15+ международных партнёров</p>
        <p class="progress__block-schema">50,000+ активных пользователей</p>
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
    position: relative;
    background-image: url("/public/mainPageContent/1.png");
    background-size: cover;
    background-position: center;
    height: 472px;
    width: 100%;
    padding: 98px 88px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    z-index: 10;

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

  &__circle {
    position: absolute;
    top: 150px;
    left: 90px;
    width: 350px;
    height: 350px;
    border-radius: 360px;
    z-index: 5;

    background: rgba(225, 0, 255, 0.3);
    filter: blur(150px);
  }

  &__circle-2 {
    position: absolute;
    top: 234px;
    left: 400px;
    width: 350px;
    height: 350px;
    border-radius: 360px;
    z-index: 5;

    background: rgba(1, 246, 254, 0.619);
    filter: blur(100px);
  }

  &__gallery {
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 20;

    &-img {
      width: 235px;
      height: 147px;
    }
  }
}

.work {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 25px;
    text-align: center;
    color: #fff;
    margin-bottom: 30px;
    z-index: 999;
    background: none;
  }

  &__block {
    display: flex;
    gap: 20px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-ideas {
      padding: 30px;
      font-size: 14px;
      font-weight: 400;
      border: 1px solid #fff;
      border-radius: 20px;
      max-width: 490px;
      color: #fff;
    }

    &-studio {
      padding: 30px;
      font-size: 14px;
      font-weight: 400;
      border: 1px solid #fff;
      border-radius: 20px;
      max-width: 490px;
      color: #fff;
    }
  }

  &__images {
    display: flex;
    gap: 20px;

    &-img {
      width: 235px;
      height: 342px;
    }
  }
}

.progress {
  margin-top: 60px;
  
  &__title {
    text-align: right;
    margin-left: auto;
    font-size: 24px;
    font-weight: 600;
    max-width: 550px;
    color: #fff;
    margin-bottom: 30px;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: end;

    &-schema:nth-child(1) {
      padding: 50px 30px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 20px;
      width: 202px;
      height: 150px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    &-schema:nth-child(2) {
      padding: 62px 36px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 20px;
      width: 235px;
      height: 176px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    &-schema:nth-child(3) {
      padding: 80px 12px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 20px;
      width: 235px;
      height: 236px;
      display: flex;
      align-items: center;
      text-align: center;
    }
    &-schema:nth-child(4) {
      padding: 126px 26px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 20px;
      width: 235px;
      height: 302px;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
}
</style>
