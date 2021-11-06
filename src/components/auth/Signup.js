import React from "react";

const Signup = () => {
  const handleSubmit = () => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  return (
    <div style={{ marginTop: 250 }}>
      <center>
        <form
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="input-field">
            <label htmlFor="mobile">Mobile</label>
            <input type="tel" id="mobile" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn bg-orange lighten-1 z-depth-0">
              Register Team
            </button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Signup;
