// import { InputLabel, MenuItem, Select } from '@mui/material';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// function Navbar() {
//   const [country, setCountry] = useState('');
//   const [text, setText] = useState('');
//   const data = useSelector((state) => state.country.data);

//   return (
//     <div className="Navbar">
//       <div className="container">
//         <div className="navbar_inner">
//           <input
//             type="search"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="search"
//           />
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={country}
//             // onChange={handleChange}
//           >
//             <MenuItem>Africa</MenuItem>
//             <MenuItem>Asia</MenuItem>
//             <MenuItem>America</MenuItem>
//           </Select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
