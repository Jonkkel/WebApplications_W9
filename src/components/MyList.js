function MyList(props) {
    const header = props.header;
    const items = props.items;

    const listItems = items.map((items) =>
    <li key={items.id} onClick={() => props.updateItem(items.id)} className={items.clicked ? "myClass" : ""}>
        {items.text}
    </li>
    );
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {listItems}
            </ol>

        </div>
    );
  }
  
  export default MyList;