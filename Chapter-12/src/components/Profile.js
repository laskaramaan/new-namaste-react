import React from "react";
import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);
  return <div>Profile</div>;
};

export default Profile;

// Class Based component

// class Profile extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//         count2: 0,
//       };
//     }

//     render() {
//       return (
//         <>
//           <div>
//             <h1>This is a class compoent</h1>
//             <h3>{this.props.name}</h3>

//             <h3>{this.state.count}</h3>
//           </div>
//           <button
//             onClick={() => {
//               this.setState({
//                 count: 1,
//                 count2: 2,
//               });
//               this.setState({
//                 count2: 2,
//               });
//             }}
//           >
//             Set count
//           </button>
//         </>
//       );
//     }
//   }

//   export default Profile;
