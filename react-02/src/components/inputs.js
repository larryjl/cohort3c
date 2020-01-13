import React from "react";
const inputs = {

  Button(props) {
    const {id, name, label, callbacks, setInputs, classes} = props
    return(
      <button 
        key={id}
        name={name}
        onClick={(e) => this.handleClick(e, callbacks, setInputs)} 
        className={classes}
      >
        {label}
      </button>
  )},

  handleClick(e, callbacks, setInputs) {
    try {
      const s = callbacks[e.target.name].f(
        ...callbacks[e.target.name].p
      );
      setInputs(state => ({...state, [e.target.name]: s}));
    } catch (error) {
      console.log(error);
    };
  },

  Input(props) {
    const {id, name, type, inputs, setInputs, classes} = props
    return (
      <div>
        <span>{name}: </span>
        <input
          key={id}
          name={name}
          type={type}
          value={inputs[name]}
          onChange={(e) => this.handleInputChange(e, setInputs)}
          onBlur={(e) => this.handleInputChange(e, setInputs)}
          className={classes}
        ></input>
      </div>
    );
  },

  handleInputChange(e, setInputs) {
    setInputs(state => ({...state, [e.target.name]: e.target.value}));
  },

};

export default inputs;