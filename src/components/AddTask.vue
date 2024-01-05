<template>
  <h3>Add new task</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Task name</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >💻Assignee <br /></label
      >
      <input type="text" id="amount" v-model="assignee" placeholder="Enter assignee" />
    </div>
    <button class="btn">Create new task</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTranStore } from "../store/Transaction.js";
import { useToast } from "vue-toastification";

const tranStore = useTranStore();
const toast = useToast();
//const emit = defineEmits(["transcationEmit"]);

var text = ref("");
var assignee = ref("");

const onSubmit = () => {
  if (text.value != "" || assignee.value != "") {
    const transactionData = {
      text: text.value,
      assignee: assignee.value,
    };

    //emit("transcationEmit", transactionData);
    tranStore.addNewTask(transactionData);

    text.value = "";
    assignee.value = "";

    toast.success("New task added!")
  }
};
</script>
