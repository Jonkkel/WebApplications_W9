import MyList from "./MyList";
import {useState} from "react"

import MyHOC from "./MyHOC";


function MyContainer() {
    const [text, setText] = useState('')
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
        const element = document.getElementsByTagName("li");
        if(items[id-1].clicked === true){
            console.log("jee1")
            element[id-1].style.textDecoration = "";
            items[id-1].clicked = false
        }else{
            console.log("jee2")
            element[id-1].style.textDecoration = "line-through";
            items[id-1].clicked = true
        }
        setItems([...items])
    }
    // const Component = ({ name }) => {
    //     return (<div> Hello {name}! </div>);
    // };

    // const wrapperWithName = MyHOC(Component, {name: "Kalle"});

    return (
        <div>
            {/* <wrapperWithName/> */}
            <MyList 
            updateItem={updateItem}
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