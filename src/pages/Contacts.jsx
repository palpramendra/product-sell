import React from 'react'

function Contacts() {
    return (
        <>
            <section className='contact'>
                <div className="container">
                    <div className="row">
                    <h3 className="men">Contact</h3>
                        <div className="col-lg-6">
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputName">Full Name:</label>
                                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Full Name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail">Email:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputAddress">Address:</label>
                                    <input type="address" className="form-control" id="exampleInputAddress" placeholder="Enter Address" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputPhone">Contact:</label>
                                    <input type="Phone" className="form-control" id="exampleInputPhone" placeholder="Enter Phone Number" />
                                </div>
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-6">
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.513583533921!2d85.31031977425387!3d27.701424925754825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854cfda3e59%3A0x4191b31405936f34!2sKathmandu%20Mall%2C%20Sundhara%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1711114431828!5m2!1sen!2snp" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contacts
