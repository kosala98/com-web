import Logo from "../assets/Images/Logo.png";

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section id="contact">
      <div className="footer py-3">
        <div className="d-flex flex-column justify-column-center align-items-center pt-3">
          <i className="bi bi-envelope display-3 text-white"></i>
          <h3 className="text-white mt-3">Stay informed about our products</h3>
          <h5 className="text-white fst-italic mt-2">
            tell us about your order
          </h5>
          <div className="input-group mb-3 mt-1 w-auto d-flex justify-content-center">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                className="form-control p-2 w-100"
                placeholder="Recipient's name"
                aria-label="Recipient's name"
                aria-describedby="button-addon2"
              />
              <input
                type="text"
                name="email"
                className="form-control p-2 w-100 mt-3"
                placeholder="Recipient's email"
                aria-label="Recipient's email"
                aria-describedby="button-addon2"
              />
              <textarea
                name="message"
                className="form-control p-2 w-100 mt-3"
                placeholder="Recipient's message"
                aria-label="Recipient's messsage"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-warning px-4 mt-3"
                type="submit"
                id="button-addon2"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="container">
          <footer className="py-5">
            <div className="row row-cols-2 row-cols-md-4 text-white">
              <div className="d-flex align-items-center">
                <img src={Logo} alt="" className="footerL" />
              </div>
              <div className="">
                <h4>About</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Certificate
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Market
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4>Products</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Fresh coconut oil
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Animal foods
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Copra
                    </a>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4>Contact</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <span>physical address abc</span>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      <i className="bi bi-envelope-at me-2"></i>
                      <span>example@ex.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p className="text-white">
                &copy; {new Date().getFullYear()} Company, Inc. All rights
                reserved.
              </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <i className="bi bi-facebook text-white"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <i className="bi bi-twitter text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Footer;
