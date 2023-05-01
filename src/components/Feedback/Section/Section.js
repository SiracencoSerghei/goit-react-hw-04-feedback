import React, {Component} from "react";
import PropTypes from 'prop-types';

class Section extends Component {
    render() {
      const { title, children } = this.props;
  
      return (
        <div>
          <h2 className="title">{title}</h2>
          {children}
        </div>
      );
    }
  }

//   const Section = ({ title, children }) => {
//     return (
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//     );
//   };

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Section;
