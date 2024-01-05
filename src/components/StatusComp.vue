<template>
  <div class="inc-exp-container">
    <div>
      <h4>Completed</h4>
      <p id="money-plus" class="money plus">{{ tranStore.completedCount }}</p>
    </div>
    <div>
      <h4>Active</h4>
      <p id="money-minus" class="money minus">{{ tranStore.activeCount }}</p>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue';

// defineProps({
//     completedCount : {
//         type: Number,
//         required: true
//     },
//     activeCount : {
//         type: Number,
//         required: true
//     }
// })

import { useTranStore } from "../store/Transaction.js";

const tranStore = useTranStore();
</script>
