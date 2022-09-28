import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex:"9"}}>
                    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                        <a href=".h#" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                <NavLink to="/home" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
                                <NavLink to="/about" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>About</NavLink>
                                <NavLink to="/product" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Product</NavLink>
                            </div>
                            <a href="#.html" className="navbar-brand mx-5 d-none d-lg-block">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </a>
                            <div className="navbar-nav mr-auto py-0">
                                <NavLink to="/service" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Service</NavLink>
                                <NavLink to="/gallery" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Gallery</NavLink>
                                <NavLink to="/contact" className={({isActive}) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;