<template>
  <h2>Task Tracker</h2>
  <div class="container">
    <HeaderComp />
    <StatusComp />
    <ActiveTask />
    <PendingTask />
    <AddTask />
  </div>
</template>

<script setup>
  import HeaderComp from './components/HeaderComp.vue';
  import StatusComp from './components/StatusComp.vue';
  import PendingTask from './components/PendingTask.vue';
  import ActiveTask from './components/ActiveTask.vue';
  import AddTask from './components/AddTask.vue';
 // import { ref, computed } from 'vue';
 // import { useTranStore } from './store/Transaction.js'

  // const taskList =  ref([
  //   { id: 1, text: 'Prepare docs', completed: false},
  //   { id: 1, text: 'Spring V3 Migration', completed: false},
  //   { id: 2, text: 'Close the story', completed: true},
  //   { id: 2, text: 'Analytics catch up', completed: true},
  //   { id: 2, text: 'Simulator work', completed: true},
  // ]);

  //const tranStore = useTranStore();

  // const closedTask = computed(() => {
  //   return taskList.value.filter((task) => task.completed == true);
  // })
  // const activeTask = computed(() => {
  //   return taskList.value.filter((task) => task.completed == false);
  // })

  // const completedCount = computed(() => {
  //   return closedTask.value.length;
  // })
  // const activeCount = computed(() => {
  //   return activeTask.value.length;
  // })
  // const totalCount = computed(() => {
  //   return taskList.value.length;
  // })

  // const handleNewTran = (transactionData) => {
  //   console.log("new tran", transactionData);
  //   taskList.value.push({
  //   id: Math.floor(Math.random() * 1000000),
  //   text: transactionData.text,
  //   completed: false,
  // });
  // console.log(taskList.value);
  // }

</script>
