import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

//we declare the alan API key as a variable
const alankey =
  'fb41afe211119f525dad6c4faef5e89d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      //let set alan ai's API key
      key: alankey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};
export default App;

// Newsapi:42f13a6e6b5f4625a57e9b31c187f020
