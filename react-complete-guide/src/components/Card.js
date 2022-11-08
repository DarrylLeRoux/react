import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return (
    <div className={classes}>
      {/* props.children adds whatever is being passed from your custom component  */}
      {props.children}
      {/* This is like the App root in the index.js where the code is injected. Hence using it as a <Card></Card> on ExpenseItem*/}
    </div>
  );
}

export default Card;
