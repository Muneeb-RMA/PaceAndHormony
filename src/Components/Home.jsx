import React from 'react'; // ✅ Import React (not required in newer React versions, but still fine)

const Home = () => {        // ✅ Functional component using arrow function
  return (
    <div>
      <h1>Welcome to Pace and Harmony</h1>
      <p>Promoting peace, education, and social harmony through local programs.</p>
    </div>
  );
};

export default Home;        // ✅ Correctly exporting the component for use in App.js
