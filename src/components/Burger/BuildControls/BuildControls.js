import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

// const controls = [
//   { label: "Salad", type: "salad" },
//   { label: "Bacon", type: "bacon" },
//   { label: "Cheese", type: "cheese" },
//   { label: "Meat", type: "meat" }
// ];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {Object.keys(props.ingredients).map(ingredient => (
      <BuildControl
        key={ingredient}
        label={ingredient
          .slice(0)
          .charAt(0)
          .toUpperCase()
          .concat(ingredient.slice(1))}
        added={() => props.ingredientAdded(ingredient)}
        removed={() => props.ingredientRemoved(ingredient)}
        disabled={props.disabled[ingredient]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
