// ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById("root"))

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}



//Imperative way of programming- we declare everything separately and then append that to the root element (which is not recommended)

// const h1= document.createElement('h1');
// h1.textContent= 'This is an imperative way to programming'
// h1.className= 'header';
// document.getElementById('root').append(h1);


//This is Declarative way- (much recommended)
// ReactDOM.render(<h1 className='header'>This is an Declarative way to programming</h1>, document.getElementById("root"))



// Normal function declaration which will then be called into the DOM render-

function MainContent(){
    return (<h1>I'm learning React!</h1>)
}


//JSX- (Javascript XML)


ReactDOM.render(
    // here div is important because it acts as a parent element and only under that we can place two children-
    <div>               
        <Navbar/>
        <MainContent/>

    </div>, document.getElementById("root"))
