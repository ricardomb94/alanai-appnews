import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

//we declare the alan ai key as a variable
const alankey =
  'fb41afe211119f525dad6c4faef5e89d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      //let set alan ai's API key
      key: alankey,
    });
  }, []);
  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
};
export default App;
