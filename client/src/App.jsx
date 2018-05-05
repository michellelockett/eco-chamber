import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
// import sampleSources from '../../db/testData.js';
import { get } from './helpers/api';

class App extends Component { 
  constructor(props) { 
    super(props);
    this.state = { 
<<<<<<< HEAD
      // articles: sampleSources.sampleArticles, 
      // events: sampleSources.sampleEvents,
      // sources: sampleSources.sampleSources 
    };
  }

  componentDidMount() {
    // get('/categories').then(categories => console.log(categories));
    // get('/events', { categoryId: 1 }).then(events => console.log(events));
    // get('/sources', { eventId: 1 }).then(sources => console.log(sources));
  }

  super(props);
  this.state = { 
    articles: sampleSources.sampleArticles, 
    events: sampleSources.sampleEvents,
    sources: sampleSources.sampleSources,
    categories: sampleSources.sampleCategories,
    currentCat: "Arts"
=======
      articles: sampleSources.sampleArticles, 
      events: [],
      // outlets: [
      //   Huffington: {
      //     id: 1,
      //     img: "https://www.huffingtonpost.com/entry/paul-ryan-reelection_us_5a328e40e4b07ff75b00d34a"
      //   },
      //   MSNBC: {
      //     id: 2, 
      //     "http://www.msnbc.com/rachel-maddow-show/house-speaker-paul-ryan-exit-stage-right"
      //   },
      //   VOX: {
      //     id: 3, 
      //     "https://www.vox.com/policy-and-politics/2018/4/11/17225202/paul-ryan-out-retirement-announcement"
      //   },
      //   NYT: {
      //     id: 4, 
      //     "https://www.nytimes.com/2018/04/11/us/politics/paul-ryan-speaker.html"
      //   },
      //    TheHill: {
      //     id: 5, 
      //     "http://thehill.com/homenews/house/382610-ryan-announces-he-wont-seek-reelection"
      //   },
      //    FOX: {
      //     id: 6, 
      //     "http://www.foxnews.com/politics/2018/04/11/house-speaker-paul-ryan-wont-run-for-re-election-ap-reports.html"
      //   },
      //   Breitbart: {
      //     id: 7, 
      //     "http://www.breitbart.com/big-government/2018/04/11/speaker-paul-ryan-retires-year-will-last-member-house"
      //   }
      // ],
      sources: sampleSources.sampleSources,
      categories: [],
      currentCat: "Arts"
>>>>>>> a27d39a... cleaned up app file
  } 
  this.handleClickCat = this.handleClickCat.bind(this);
  this.updateEvents = this.updateEvents.bind(this);
  this.handleEvent = this.handleEvent.bind(this);
}

componentDidMount() {
  get('/categories').then(categories => this.setState({categories: categories}));
  get('/events', { categoryId: 1 }).then(events => this.setState({events: events}));
  //get('/articles', { eventId: 4}).then(articles => this.setState({articles: articles}));
}

handleClickCat(e, id) {
  let temp = this.state.currentCat;
  temp = e.target.id
    this.setState({currentCat: temp});
    this.updateEvents(id);
}

updateEvents(id) {
  //get('/events', { categoryId: `${id}`} ).then(events => this.setState({events: events}))
}

handleEvent(id) {
  console.log(id);
  //get('/articles', { eventId: `${id}` }).then(articles => this.setState({articles: articles}));
}

  render() {  
    return (
      <div className="onboarding">
        <Header state={this.state} catClick={this.handleClickCat}/>
        <Main state={this.state} handleEvent={this.handleEvent}/>
      </div>
    )  
  }  
}

export default App;
