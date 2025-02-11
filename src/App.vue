<template>
  <div class="bg-black">
    <Suspense>
      <router-view />
      <template #fallback>
        <h1>Loading</h1>
      </template>
    </Suspense>
  </div>
</template>
<script setup></script>
