<template>
  <section class="section">
    <div class="columns">
      <h1>Boxing Timer</h1>
    </div>
    <div class="selection-container">
      <b-field label="Rounds">
        <b-numberinput
          v-model="roundTotal"
          min="1"
          controls-position="compact"
          type="is-dark"
        ></b-numberinput>
      </b-field>
      <b-field label="Work">
        <b-numberinput
          v-model="workTIme"
          min="1"
          controls-position="compact"
          type="is-dark"
        ></b-numberinput>
      </b-field>
      <b-field label="Rounds">
        <b-numberinput
          v-model="restTime"
          min="1"
          controls-position="compact"
          type="is-dark"
        ></b-numberinput>
      </b-field>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      roundTotal: this.$store.state.roundTotal,
      workTIme: this.$store.state.workTime,
      restTime: this.$store.state.restTime,
    };
  },
};
</script>
