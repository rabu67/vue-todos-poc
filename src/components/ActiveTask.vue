<template>
    <h3>Active</h3>
      <ul id="list" class="list">
        <p v-if="tranStore.activeTask.length == 0">No active task!</p>
        <li v-for="task in tranStore.activeTask" :key="task.id" class="minus">
          {{task.text}} <span>{{task.assignee}}</span><button @click="handleClick(task.id)" class="delete-btn">✔</button>
        </li>
      </ul>
</template>

<script setup>
    //import { defineProps } from 'vue';
    import { useTranStore } from '../store/Transaction.js'
    import { useToast } from "vue-toastification";

    const tranStore = useTranStore();
    const toast = useToast();

    // defineProps({
    //     activeTask : {
    //         type: Array,
    //         required: true
    //     }
    // })
    const handleClick = (id) => {
      console.log("tick working", id);
      tranStore.moveToDone(id);
      toast.success("Task successfully closed!");
    }

</script>