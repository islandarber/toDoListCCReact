
const DisplayItems = ({ items}) => {
  return (
    <div id="toDoItemsDiv">
        <h4> {items.map((todo) =>  (
             <h3>{todo.title}</h3>
          ))}</h4>
    </div>
  )
}

export default DisplayItems;