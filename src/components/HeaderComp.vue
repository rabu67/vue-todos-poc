<template>
  <h4>Total Task</h4>
  <h1 id="balance">{{tranStore.totalCount}}</h1>
</template>

<script setup>
    // import { defineProps } from 'vue';

    // defineProps({
    //     totalCount : {
    //         type: Number,
    //         required: true
    //     }
    // })

    import { useTranStore } from '../store/Transaction.js'

    const tranStore = useTranStore();

</script>