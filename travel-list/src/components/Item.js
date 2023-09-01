export default function Item({item, onDeleteItem, onToggleItem}) {
    return (
        <li>
            <input
                type='checkbox'
                value={item.packed}
                onChange={() => onToggleItem(item.id)}/>
            <span
                style={
                    item.packed
                        ? {textDecoration: "line-through"}
                        : {}}> {item.quantity} {item.description}
      </span>
            {/*Always pass a function otherwise React will immediately call the function when not needed!!*/}
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>);
}