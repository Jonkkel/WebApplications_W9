import MyHOC from "./MyHOC";

const Component = (name ) => {
    return (<div> Hello {name}! </div>)
};

export default MyHOC(Component, { name:"kalle"});