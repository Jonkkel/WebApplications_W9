function MyList({items}) {
    const header = "important header";

    const listItems = items.map((items) =>
    <li key={items.id}>
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