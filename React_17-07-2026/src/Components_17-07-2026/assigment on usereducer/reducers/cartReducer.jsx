export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.product];

    case "REMOVE":
      return state.filter(
        (item) => item.id !== action.id
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
}