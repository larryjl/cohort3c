import React from 'react';
// import './nav.css';
import Icon_settings from '../svg/Icon_settings.svg';

class Nav extends React.Component {  
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <nav id="idIconNav">
        <a href="#top">
          <img src={Icon_settings} className="rotating icon" tabindex="0" alt="gear" />
        </a>
        {/* Icon_close_circle inline svg */}
        <a href="#game">
          <svg className="rotating icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="path" tabindex="0" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.5355 8.46447C15.9261 8.85499 15.9261 9.48816 15.5355 9.87868L13.4142 12L15.5355 14.1213C15.9261 14.5118 15.9261 15.145 15.5355 15.5355C15.145 15.9261 14.5118 15.9261 14.1213 15.5355L12 13.4142L9.87868 15.5355C9.48816 15.9261 8.85499 15.9261 8.46447 15.5355C8.07394 15.145 8.07394 14.5118 8.46447 14.1213L10.5858 12L8.46447 9.87868C8.07394 9.48816 8.07394 8.85499 8.46447 8.46447C8.85499 8.07394 9.48816 8.07394 9.87868 8.46447L12 10.5858L14.1213 8.46447C14.5118 8.07394 15.145 8.07394 15.5355 8.46447Z" fill="black"/>
          </svg>
        </a>

        <img src={Icon_settings} className="rotating icon" tabindex="0" alt="gear" />
      </nav>
    );
  }
};

export default Nav;