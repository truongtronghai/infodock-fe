<script>
import MainContainer from "./components/MainContainer.vue";
import CallOutRow from "./components/CallOutRow.vue";

export default {
  components: {
    MainContainer,
    CallOutRow,
  },
  data() {
    return {
      content1: "sdjfoisdjofisdjfoijfjfsifosdfjsdokfjodifjsoifjdsofijsdofds",
    };
  },
};
</script>

<template>
  <MainContainer
    :paragraph1="content1"
    paragraph2="jfoeijf feoijfoe ifjeojfieo"
  >
    Main row with title Lorem ipsum
  </MainContainer>
  <CallOutRow />
</template>

<style scoped></style>
