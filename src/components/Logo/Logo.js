import React, {PropTypes} from 'react';

/* eslint-disable max-len */
const Logo = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 393 86"
  >
    <title>MONEI</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        id="MONEI"
        fill={props.fill}
        d="M0,1.63934426 L24.0046838,1.63934426 L43.559719,33.3723653 L63.1147541,1.63934426 L87.1194379,1.63934426 L87.1194379,83.6065574 L64.5199063,83.6065574 L64.5199063,36.5339578 L43.559719,68.618267 L43.0913349,68.618267 L22.2482436,36.7681499 L22.2482436,83.6065574 L0,83.6065574 L0,1.63934426 Z M143.091335,64.7540984 C146.213911,64.7540984 149.063219,64.1686241 151.639344,62.9976581 C154.21547,61.826692 156.40124,60.2459116 158.196721,58.2552693 C159.992203,56.264627 161.397341,53.9422459 162.412178,51.2880562 C163.427015,48.6338665 163.934426,45.8235902 163.934426,42.8571429 L163.934426,42.6229508 C163.934426,39.6565035 163.427015,36.8462272 162.412178,34.1920375 C161.397341,31.5378478 159.953171,29.1959508 158.079625,27.1662763 C156.20608,25.1366019 153.981278,23.5167898 151.405152,22.3067916 C148.829027,21.0967933 145.979719,20.4918033 142.857143,20.4918033 C139.734567,20.4918033 136.904775,21.0772775 134.367681,22.2482436 C131.830588,23.4192096 129.644818,24.99999 127.810304,26.9906323 C125.975791,28.9812746 124.570653,31.3036557 123.594848,33.9578454 C122.619043,36.6120351 122.131148,39.4223115 122.131148,42.3887588 L122.131148,42.6229508 C122.131148,45.5893981 122.638559,48.3996745 123.653396,51.0538642 C124.668233,53.7080539 126.092887,56.0499508 127.9274,58.0796253 C129.761914,60.1092998 131.9672,61.7291118 134.543326,62.9391101 C137.119451,64.1491083 139.968759,64.7540984 143.091335,64.7540984 L143.091335,64.7540984 Z M142.857143,85.2459016 C136.533926,85.2459016 130.679184,84.1335006 125.29274,81.9086651 C119.906296,79.6838296 115.261534,76.6588794 111.358314,72.8337237 C107.455094,69.0085679 104.391112,64.5199321 102.166276,59.3676815 C99.9414409,54.2154309 98.8290398,48.7119731 98.8290398,42.8571429 L98.8290398,42.6229508 C98.8290398,36.7681206 99.9414409,31.245147 102.166276,26.0538642 C104.391112,20.8625814 107.494125,16.3349139 111.47541,12.470726 C115.456694,8.60653806 120.140488,5.56207201 125.526932,3.33723653 C130.913376,1.11240105 136.768118,0 143.091335,0 C149.414552,0 155.269294,1.11240105 160.655738,3.33723653 C166.042181,5.56207201 170.686944,8.58702225 174.590164,12.412178 C178.493384,16.2373337 181.557366,20.7259696 183.782201,25.8782201 C186.007037,31.0304707 187.119438,36.5339286 187.119438,42.3887588 L187.119438,42.6229508 C187.119438,48.477781 186.007037,54.0007547 183.782201,59.1920375 C181.557366,64.3833203 178.454352,68.9109877 174.473068,72.7751756 C170.491783,76.6393636 165.807989,79.6838296 160.421546,81.9086651 C155.035102,84.1335006 149.180359,85.2459016 142.857143,85.2459016 L142.857143,85.2459016 Z M198.946136,1.63934426 L220.140515,1.63934426 L253.864169,44.9648712 L253.864169,1.63934426 L276.346604,1.63934426 L276.346604,83.6065574 L256.440281,83.6065574 L221.428571,38.6416862 L221.428571,83.6065574 L198.946136,83.6065574 L198.946136,1.63934426 Z M290.866511,1.63934426 L356.791569,1.63934426 L356.791569,20.9601874 L313.348946,20.9601874 L313.348946,33.3723653 L352.693208,33.3723653 L352.693208,51.2880562 L313.348946,51.2880562 L313.348946,64.2857143 L357.377049,64.2857143 L357.377049,83.6065574 L290.866511,83.6065574 L290.866511,1.63934426 Z M369.437939,1.63934426 L392.271663,1.63934426 L392.271663,83.6065574 L369.437939,83.6065574 L369.437939,1.63934426 Z"
      />
    </g>
  </svg>
);

/* eslint-enable max-len */

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
};

export default Logo;
