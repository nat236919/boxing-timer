export const state = () => ({
  trainingInProgress: false,
  roundTotal: 3,
  workTime: 180, // 3 min
  restTime: 60, // 1 min
});

export const mutations = {
  setTrainingInProgress(state, value) {
    state.trainingInProgress = value;
  },
  setRoundTotal(state, roundTotal) {
    state.roundTotal = roundTotal;
  },
  setWorkTime(state, workTime) {
    state.workTime = workTime;
  },
  setRestTime(state, restTime) {
    state.restTime = restTime;
  },
};

export const actions = {
  startTraining({ commit }) {
    commit("setTrainingInProgress", true);
  },
  stopTraining({ commit }) {
    commit("setTrainingInProgress", false);
  },
  setRoundTotal({ commit }, roundTotal) {
    commit("setRoundTotal", roundTotal);
  },
  setWorkTime({ commit }, workTime) {
    commit("setWorkTime", workTime);
  },
  setRestTime({ commit }, restTime) {
    commit("setRestTime", restTime);
  },
};
