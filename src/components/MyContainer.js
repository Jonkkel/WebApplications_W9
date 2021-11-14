import MyList from "./MyList";
import {useState} from "react"


function MyContainer() {
    const [text, setText] = useState('')
    const header = "This is very important header"
    const [items, setItems] = useState([
        {id: "1",
         text: "this is an item",
        clicked: false},
        {id: "2",
         text: "also this",
         clicked: false}
      ])

    const addItem = (text) => {
        const id = items.length + 1;
        const newItem = {id, ...text}
        setItems([...items, newItem])
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addItem({text: text, clicked: false});
        setText("");
    }

    const updateItem = (id) =>{
        console.log(items[id-1].clicked)
        if(items[id-1].clicked === true){
            items[id-1].clicked = false
        }else{
            items[id-1].clicked = true
        }
        items[id-1].className= (items[id-1].clicked ? "" : "myClass")
        setItems([...items])
        
        // document.getElementById(id).classList.add('myClass');
        // items[id-1].text.classList.add("myClass");
    }
    
    
    

    return (
        <div>
            <MyList 
            updateItem={updateItem}
            header={header}
            items={items}/>
            <form onSubmit={onSubmit}>
                <textarea placeholder="Add item" onChange={(e) => setText(e.target.value)} value={text}/>
                <br></br>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}
  
export default MyContainer;