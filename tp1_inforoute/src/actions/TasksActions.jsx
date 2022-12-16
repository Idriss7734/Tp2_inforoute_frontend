// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


export const addTask = (IsAdmin) => {
  return {
    type: "ACCOUNT",
    payload: {
      IsAdmin: IsAdmin,
    },
  };
};
