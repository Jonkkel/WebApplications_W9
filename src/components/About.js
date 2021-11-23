import { useEffect } from "react";

function About(props) {

    useEffect(() => {
        let mounted = true;
        async function doStuff(){
            const a = await fetch("https://jsonplaceholder.typicode.com/posts")
            // .then(response => response.json())
            // // 4. Setting *dogImage* to the image url that we received from the response above
            // .then(data => setDogImage(data.message))
            const b = {};

            if (mounted){
                // setSomeStuff(b);
            }
        }
        doStuff();

        return () => {
            mounted = false;
        }
    }, []);

    return (
        <div>
            <h2>About page</h2>
        </div>
    );
  }
  
export default About;