<script lang="ts" setup>

</script>

<template>
    <header class="header">
        <div class="header__company">
            <h1 class="header__company-title">Neonik Company</h1>
            <img src="/header/logo.png" alt="" class="header__company-logo">
        </div>
        <div class="header__nav">
            <NuxtLink to="" class="header__nav-link">Главная</NuxtLink>
            <NuxtLink to="" class="header__nav-link">Сотрудничество</NuxtLink>
            <NuxtLink to="" class="header__nav-link">О нас</NuxtLink>
            <NuxtLink to="" class="header__nav-link">Roadmap</NuxtLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__company {
            display: flex;
            gap: 16px;
            color: #fff;
            align-items: center;

            &-title {
                font-size: 16px;
                font-family: "Inter", sans-serif;
                font-weight: 700;
            }

            &-logo {
                width: 39px;
                height: 26px;
            }
        }

        &__nav {
            display: flex;
            gap: 30px;
            font-size: 14px;
            font-weight: 400;
            font-family: "Inter", sans-serif;
            color: #fff;
        }
    }
</style>
