export const state = () => ({
  roundTotal: 3,
  workTime: 180, // 3 min
  restTime: 60, // 1 min
});

export const mutations = {
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
