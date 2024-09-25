<script>
import { useFlash } from '@/components/useFlash';
export default {
  setup() {
    let { flash } = useFlash();

    return { flash };
  }
};
</script>

<template>
  <div>
    <p>
      <button @click="flash('It Works On The About Page!')">Click Me</button>
    </p>
  </div>
</template>

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
