

const MyHOC = (OriginalComponent, props) => {
        
    return (
    <div className = "wrapper">
        < OriginalComponent name={props} />
    </div>
    )
};

export default MyHOC;