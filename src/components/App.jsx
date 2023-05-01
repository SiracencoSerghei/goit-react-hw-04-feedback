import React, {Component} from "react";
import Feedback from "./Feedback";

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          color: "#010101",
        }}
      >
        <Feedback state={this.state} />
      </div>
    );
  }
}

// const App = () => {
//   const state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//      <Feedback  state={state} />
//     </div>
//   );
// };

export default App;
