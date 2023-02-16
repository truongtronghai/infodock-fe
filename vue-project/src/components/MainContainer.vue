<script>
export default {
  props: {
    paragraph1: String,
    paragraph2: String,
  },
  data() {
    return {
      data1: "AA",
      data2: "BBBBBBBBBBBBBBBBBBBBB",
    };
  },
};
</script>
<template>
  <div class="main-container">
    <div class="primary">
      <h1><slot /></h1>
      <p>{{ paragraph1 }}</p>
      <p>{{ paragraph2 }}</p>
    </div>
    <div class="secondary">
      <div class="secondary-a">
        <p>{{ data1 }}</p>
      </div>
      <div class="secondary-b">
        <p>{{ data2 }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.main-container {
  display: flex;
}

.primary,
.secondary,
.secondary-a,
.secondary-b {
  flex: 1;
}

.secondary {
  display: flex;
  flex-direction: column;
}

.secondary-a {
  background-color: aqua;
  display: flex;
}
.secondary-a p {
  margin: auto;
}

.secondary-b {
  background-color: coral;
  display: flex;
}
.secondary-b p {
  margin: auto;
}
</style>
