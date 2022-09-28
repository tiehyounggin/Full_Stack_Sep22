import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Product(){

    const [anArr, setAnArr] = useState([]);

    const getUsersAPI = (aPageNum) => {
        console.log("calling get api")
        fetch("https://reqres.in/api/users?page=" + aPageNum,
        {
            method:"GET"
        })
        .then(res => res.json())
        .then(res2 => setAnArr(res2["data"]))
        .catch(err => console.log(err))
    }

    const testBtn = () => {
        console.log(anArr);
    }

    useEffect(() => {
        console.log("calling use effect")
    
        getUsersAPI(1);
    }, [])

    return(
        <>
        <Header/>

        <div className="jumbotron jumbotron-fluid page-header" style={{marginBottom:"90px"}}>
            <div className="container text-center py-5">
                <h1 className="text-white display-3 mt-lg-5">Product</h1>
                <div className="d-inline-flex align-items-center text-white">
                    <p className="m-0"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-circle px-3"></i>
                    <p className="m-0">Product</p>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        anArr.map((anObj, index) => {
                            return <div key={index} className="col-lg-3 col-md-6 mb-4 pb-2">
                                        <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                            <div className="bg-primary mt-n5 py-3" style={{width:"80px"}}>
                                                <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                            </div>
                                            <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width:"150px", height:"150px"}}>
                                                <img className="rounded-circle w-100 h-100" src={anObj.avatar} style={{objectFit:"cover"}}/>
                                            </div>
                                            <h5 className="font-weight-bold mb-4">{anObj.email}</h5>
                                            <a href="" className="btn btn-sm btn-secondary">{anObj.first_name} {anObj.last_name}</a>
                                        </div>
                                    </div>
                        })
                    }
                    
                    <div className="col-12 text-center">
                        <button onClick={testBtn} className="btn btn-primary py-3 px-5">Load More</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Product;