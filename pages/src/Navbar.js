
function Navbar() {
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth)
    }, []);
    
    return (
        <div>
            {width}
        </div>
    )
}
let domContainer = document.querySelector('#navbar');
ReactDOM.render(<Navbar />, domContainer);