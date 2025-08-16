<template>
  <div class="person">
    <h2>姓名：{{ Person.name }}</h2>
    <h2>年龄：{{ Person.age }}</h2>
    <h2>工作：在{{ Person.work.address }}每天{{ Person.work.time }}点上班</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">增加一岁</button>
    <button @click="notWork">辞职！</button>
  </div>
</template>

<script lang="ts">
  import { ref, watch } from "vue";
  export default {
    name: "Person",
  };
</script>

<script lang="ts" setup>
  let Person = ref({
    name: "小温",
    age: 18,
    work: {
      address: "yy",
      time: 9.3,
    },
  });

  function changeName() {
    Person.value.name += "~";
  }

  function changeAge() {
    Person.value.age += 1;
  }

  function notWork() {
    Person.value.work.address = "新offer";
  }

  watch(
    Person,
    (value) => {
      console.log("监视到啦！", value);
    },
    { deep: true }
  );
</script>

<style scoped>
  .person {
    padding: 20px;
    background: skyblue;
    border-radius: 20px;
    box-shadow: 0 0 10px;
  }
</style>
