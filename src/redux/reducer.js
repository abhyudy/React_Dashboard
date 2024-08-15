const initialState = {
  categories: [
    {
      id: "c1",
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: "w1", name: "Widget 1", text: "Sample text for Widget 1" },
      ],
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
}

export default rootReducer;
