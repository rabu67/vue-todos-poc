<template>
    <h3>Closed</h3>
      <ul id="list" class="list">
      <p v-if="tranStore.closedTask.length == 0">All closed task are deleted!</p>
        <li v-for="task in tranStore.closedTask" :key="task.id" class="plus">
          {{task.text}} <span>{{task.assignee}}</span><button @click="handleDelete(task.id)" class="delete-btn">x</button>
        </li>
      </ul>
</template>

<script setup>
    // import { defineProps } from 'vue';

    // defineProps({
    //     closedTask : {
    //         type: Array,
    //         required: true
    //     }
    // })
    import { useTranStore } from '../store/Transaction.js'
    import { useToast } from "vue-toastification";

    const tranStore = useTranStore();
    const toast = useToast();

    const handleDelete = (id) => {
      console.log("id delete -->", id);
      tranStore.deleteTask(id);
      toast.error("Task deleted!")
    }

</script>