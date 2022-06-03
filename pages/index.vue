<template>
  <section class="section">
    <div class="columns">
      <h1>Boxing Timer</h1>
    </div>
    <!-- Selection -->
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
      <b-field label="Rest">
        <b-numberinput
          v-model="restTime"
          min="1"
          controls-position="compact"
          type="is-dark"
        ></b-numberinput>
      </b-field>
      <b-button @click="startTraining">Start</b-button>
    </div>
    <!-- Training In-Progress-->
    <div class="training-container" v-if="trainingInProgress">In-Progress</div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    trainingInProgress() {
      return this.$store.state.trainingInProgress;
    },
  },
  data() {
    return {
      roundTotal: this.$store.state.roundTotal,
      workTIme: this.$store.state.workTime,
      restTime: this.$store.state.restTime,
    };
  },
  methods: {
    startTraining() {
      this.$buefy.notification.open("Training started!");
      this.$store.dispatch("startTraining");
    },
  },
};
</script>
