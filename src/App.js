import React ,{useState,useEffect} from 'react';
import NewCards from './components/NewsCards/NewCards.js';
import useStyles from "./style.js";
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web'; 
const alanKey = 'a1ed1d1204a9efbf29f7e3c0846774c72e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=>{
   const [newArticles ,setNewsArticles] = useState([]);
   const classes = useStyles();
   const [activeArticle,setActiveArticle]  = useState(-1);
   
   useEffect(()=>{
      alanBtn({
        key: alanKey,
        onCommand: ({command,articles,number})=>{
             console.log(command)
            if(command ==='newHeadlines'){
               console.log(articles)
               setNewsArticles(articles)
               setActiveArticle(-1);
            } else if(command==='highlight'){
               
               setActiveArticle((preActiveArticle)=> preActiveArticle + 1);
            } else if(command==='open'){
               const change= number.length > 2 ? wordsToNumbers(number,{fuzzy: true}):number;
               console.log(change)
               const article=articles[change-1];
               if(change>20){
                  alanBtn.playText('Please try something else| again!')
                  
               }
               
               
               else if(article){
                  window.open(article.url,'_blank');
                  alanBtn.playText('Opening...');
               }
               else {
                  alanBtn().playText('Please try that again...');
                }
               
            }
        }
      })

    },[]);

    return(
        <div>
             <h1>.  News Scroll Assistant AI </h1>
           
           <div className={classes.logoContainer}>
           {newArticles.length!=0 ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
            <img src="2aaa7ccf-d968-4fe9-824c-8cca0f5efff8.jpg" className={classes.alanLogo} alt="alan logo"/>
           </div>
             
           <NewCards articles={newArticles}  activeArticle={activeArticle}/> 
        </div>
    )
}
export default App;