import React from 'react'

function Footer() {
    return (
        <>
            <section className='py-3'>
                <footer className="text-white text-center text-lg-start bg-dark">
                    <div className="container p-4">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">About company</h5>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti.
                                </p>
                                <p>
                                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias.
                                </p>
                                <div className="mt-4">
                                    <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-facebook-f" /></a>
                                    <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-dribbble" /></a>
                                    <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-twitter" /></a>
                                    <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-google-plus-g" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                                <div className="form-outline form-white mb-4">
                                    <input type="text" id="formControlLg" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="formControlLg">Search</label>
                                </div>
                                <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-home" /></span><span className="ms-2">kathmandu, Nepal</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-envelope" /></span><span className="ms-2">contact@example.com</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i className="fas fa-phone" /></span><span className="ms-2">+977-98223232</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4">Opening hours</h5>
                                <table className="table text-center text-white">
                                    <tbody className="fw-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 10pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Footer
