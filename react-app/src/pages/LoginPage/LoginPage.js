import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="p-5">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">
                    <i className="bi bi-brightness-high"></i>Solar Energy
                    Monitoring
                  </h3>
                </div>
                <h6 className="h5 mb-0">Welcome back!</h6>
                <p className="text-muted mt-2 mb-5">
                  Enter your email address and password to access your account.
                </p>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-theme">
                    Login
                  </button>
                </form>
                <p className="text-muted text-center mt-3 mb-0">
                  Don't have an account?
                  <a href="register.html" className="text-primary ml-1">
                    register
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block">
              <div className="account-block rounded-right">
                <div className="overlay rounded-right"></div>
                <div className="account-testimonial"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
