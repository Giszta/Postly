<script setup lang="ts"></script>

<template>
  <header
    role="banner"
    class="bg-(--bg-gray-primary) border-b border-gray-100 w-full max-w-4xl shadow-md h-16 sm:h-20 px-6 flex items-center justify-between"
  >
    <div class="flex items-center space-x-3 w-1/2 md:w-1/3">
      <img src="../assets/logo.svg" alt="Logo" class="h-8 w-8 object-contain" />
      <span class="text-xl font-semibold text-white">Postly</span>
    </div>

    <div class="text-center w-1/2 md:w-1/3">
      <p class="text-xs text-gray-400 uppercase tracking-wider">Best Forum</p>
      <h1 class="text-base sm:text-lg font-bold text-white">From Coders to Coders</h1>
    </div>

    <div class="w-1/3 justify-end hidden md:flex">
      <a href="https://www.giszter.com/">
        <img
          src="../assets/logoAG.png"
          alt="Logo"
          class="h-10 w-auto object-contain"
        />
      </a>
    </div>
  </header>
</template>
