import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles.js';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';

//we declare the alan API key as a variable
const alankey =
  'fb41afe211119f525dad6c4faef5e89d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      //let set alan ai's API key
      key: alankey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          // setNewsArticles(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again.');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          }

          window.open(articles[number].url, '_blank');
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
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};
export default App;
