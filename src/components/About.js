import {useState, useEffect } from "react";

function About(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        let mounted = true;
        async function doStuff(){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((data) => {
                setData(data)
            })
        
            if (mounted){
                
            }
        }
        doStuff();
        return () => {
            mounted = false;
        }
    }, []);
    

    // console.log(listItems)
    return (
        <div>
            <h2>About page</h2>
            <ul>
                {data.map((items) =>
                <li key={items.id}>
                    {items.title}
                </li>
                )}
            </ul>
        </div>
    );
  }
  
export default About;