import React from "react";
import Widget from "./Widget";

const Category = ({ category, removeWidget }) => (
  <div>
    <h2>{category.name}</h2>
    {category.widgets.map((widget) => (
      <Widget
        key={widget.id}
        widget={widget}
        removeWidget={() => removeWidget(category.id, widget.id)}
      />
    ))}
  </div>
);

export default Category;
