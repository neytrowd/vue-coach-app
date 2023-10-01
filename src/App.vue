<script lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
  components: { TheHeader }
};
</script>

<template>
  <TheHeader />

  <RouterView />
</template>
