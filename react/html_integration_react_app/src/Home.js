import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Home(){

    const myScript = document.createElement("script");

    // useEffect(() => {
    //     myScript.src = "lib/owlcarousel/owl.carousel.min.js";
    //     myScript.async = true;

    //     document.body.appendChild(myScript);
    // }, []);

    return(
        <>
            <Header/>
            
            <div className="container-fluid p-0 mb-5 pb-5">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth:"900px"}}>
                                    <h4 className="text-white text-uppercase mb-md-3">Traditional & Delicious</h4>
                                    <h1 className="display-3 text-white mb-md-4">Traditional Ice Cream Since 1950</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth:"900px"}}>
                                    <h4 className="text-white text-uppercase mb-md-3">Traditional & Delicious</h4>
                                    <h1 className="display-3 text-white mb-md-4">Made From Our Own Organic Milk</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-secondary px-0" style={{width:"45px", height:"45px"}}>
                            <span className="carousel-control-prev-icon mb-n1"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-secondary px-0" style={{width:"45px", height:"45px"}}>
                            <span className="carousel-control-next-icon mb-n1"></span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <h1 className="section-title position-relative text-center mb-5">Traditional & Delicious Ice Cream Since 1950</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">About Us</h4>
                            <h5 className="text-muted mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                            <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                            <a href="" className="btn btn-secondary mt-2">Learn More</a>
                        </div>
                        <div className="col-lg-4" style={{minHeight:"400px"}}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <img className="position-absolute w-100 h-100" src="img/about.jpg" style={{objectFit:"cover"}}/>
                            </div>
                        </div>
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">Our Features</h4>
                            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
                            <a href="" className="btn btn-primary mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5 py-5 px-0">
                <div className="row bg-primary m-0">
                    <div className="col-md-6 px-0" style={{minHeight:"500px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="img/promotion.jpg" style={{objectFit:"cover"}}/>
                            <button type="button" className="btn-play" data-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 py-5 py-md-0 px-0">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                                style={{width:"100px", height:"100px"}}>
                                <h3 className="font-weight-bold text-secondary mb-0">$199</h3>
                            </div>
                            <h3 className="font-weight-bold text-white mt-3 mb-4">Chocolate Ice Cream</h3>
                            <p className="text-white mb-4">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                                justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                            <a href="" className="btn btn-secondary py-3 px-5 mt-2">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">Best Services We Provide For Our Clients</h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel service-carousel owl-loaded">
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-1.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:"-75px"}}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Quality Maintain</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-2.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:"-75px"}}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Individual Approach</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-3.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:"-75px"}}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Celebration Ice Cream</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-img mx-auto">
                                        <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-4.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:"-75px"}}>
                                        <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Delivery To Any Point</h5>
                                        <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                        <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5 py-5 px-0">
                <div className="row justify-content-center m-0">
                    <div className="col-lg-5">
                        <h1 className="section-title position-relative text-center mb-5">Delicious Ice Cream Made From Our Very Own Organic Milk</h1>
                    </div>
                </div>
                <div className="row m-0 portfolio-container">
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt=""/>
                            <a className="portfolio-btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{fontSize:"60px"}}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt=""/>
                            <a className="portfolio-btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{fontSize:"60px"}}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt=""/>
                            <a className="portfolio-btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{fontSize:"60px"}}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt=""/>
                            <a className="portfolio-btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{fontSize:"60px"}}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt=""/>
                            <a className="portfolio-btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{fontSize:"60px"}}></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt=""/>
                            <a className="portfolio-btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-primary" style={{fontSize:"60px"}}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel product-carousel owl-loaded">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{width:"80px"}}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width:"150px", height:"150px"}}>
                                        <img className="rounded-circle w-100 h-100" src="img/product-1.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{width:"80px"}}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width:"150px", height:"150px"}}>
                                        <img className="rounded-circle w-100 h-100" src="img/product-2.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{width:"80px"}}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width:"150px", height:"150px"}}>
                                        <img className="rounded-circle w-100 h-100" src="img/product-3.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{width:"80px"}}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width:"150px", height:"150px"}}>
                                        <img className="rounded-circle w-100 h-100" src="img/product-4.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{width:"80px"}}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{width:"150px", height:"150px"}}>
                                        <img className="rounded-circle w-100 h-100" src="img/product-5.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5">Experienced & Most Famous Ice Cream Chefs</h1>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="owl-carousel team-carousel owl-loaded">
                                <div className="team-item">
                                    <div className="team-img mx-auto">
                                        <img className="rounded-circle w-100 h-100" src="img/team-1.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded px-4 py-5" style={{marginTop:"-100px"}}>
                                        <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                        <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                        <div className="d-flex justify-content-center pt-1">
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item">
                                    <div className="team-img mx-auto">
                                        <img className="rounded-circle w-100 h-100" src="img/team-2.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded px-4 py-5" style={{marginTop:"-100px"}}>
                                        <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                        <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                        <div className="d-flex justify-content-center pt-1">
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item">
                                    <div className="team-img mx-auto">
                                        <img className="rounded-circle w-100 h-100" src="img/team-3.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded px-4 py-5" style={{marginTop:"-100px"}}>
                                        <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                        <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                        <div className="d-flex justify-content-center pt-1">
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item">
                                    <div className="team-img mx-auto">
                                        <img className="rounded-circle w-100 h-100" src="img/team-4.jpg" style={{objectFit:"cover"}}/>
                                    </div>
                                    <div className="position-relative text-center bg-light rounded px-4 py-5" style={{marginTop:"-100px"}}>
                                        <h3 className="font-weight-bold mt-5 mb-3 pt-5">Full Name</h3>
                                        <h6 className="text-uppercase text-muted mb-4">Designation</h6>
                                        <div className="d-flex justify-content-center pt-1">
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative text-center mb-5">Clients Say About Our Famous Ice Cream</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="owl-carousel testimonial-carousel owl-loaded">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt=""/>
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt=""/>
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt=""/>
                                    <h5 className="font-weight-bold m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

            <a href="#" className="btn btn-secondary px-2 back-to-top"><i className="fa fa-angle-double-up"></i></a>

        </>
    )
}

export default Home;