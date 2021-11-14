import MyList from "./MyList";
import {useState} from "react"

function MyContainer({ onAdd }) {
    const [text, setText] = useState('')

    const [items, setItems] = useState([
        {id: "1",
         text: "this is an item"},
        {id: "2",
         text: "also this"}
      ])

    const addItem = (text) => {
        const id = Math.floor(Math.random() * 1000000 + 1000)
        const newItem = {id, ...text}
        setItems([...items, newItem])
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addItem({text: text});
        setText("");
    }
    
    
    

    return (
        <div>
            <MyList items={items}/>
            <form onSubmit={onSubmit}>
                <textarea placeholder="Add item" onChange={(e) => setText(e.target.value)} value={text}/>
                <br></br>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}
  
export default MyContainer;