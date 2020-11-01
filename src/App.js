import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles.js';
import NewsCards from './components/NewsCards/NewsCards';

//we declare the alan API key as a variable
const alankey =
  'fb41afe211119f525dad6c4faef5e89d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
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
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};
export default App;

// Newsapi:42f13a6e6b5f4625a57e9b31c187f020
