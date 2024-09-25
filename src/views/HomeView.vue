<script setup>
import { ref, watch } from 'vue';
import { useStorage } from '@/composables/useStorage';

let food = useStorage('food', 'icecream');
let age = useStorage('age', '48');

let obj = useStorage('obj', { one: 'one' });

setTimeout(() => {
  obj.value.one = 'two';
}, 2000);

</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text"
             v-model="food">
    </p>

    <p>
      What is your age? <input type="text"
             v-model="age">
    </p>
  </main>
</template>
