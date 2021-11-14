import MyList from "./MyList";

function MyContainer(props) {
    return (
        <MyList 
        header={props.header}
        items = {props.items}/>
    );
  }
  
  export default MyContainer;