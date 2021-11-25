

const MyHOC = ( OriginalComponent ) => {
    // const NewComponent = (props) => {

    // }
    return (
    <div className = "wrapper">
        <OriginalComponent/>
    </div>
    )
};

export default MyHOC;