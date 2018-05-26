import React, { Component } from 'react';



class News extends Component {

  state = {

   data: null

  }



 // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7bdb3eaef0ad47b4afe767c55df81990



 componentDidMount() {

     console.log('done')

     fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7bdb3eaef0ad47b4afe767c55df81990')

     .then(function (response) {

         return response.json();

     })

     .then( (dataFromServer) => {

         console.log(dataFromServer);

         this.setState({ data: dataFromServer });

     });

 }

  render() {

    return  this.state.data ? (



     this.state.data.articles.map(function (article,id) {

         return (

             <div key={id}>

                <h3>{id}</h3>

                <h3>{article.title}</h3>

                

             </div>

                

         )

     })

    ) : <p>Newssdfdbfgdfgg</p> ;

  }

}



export default News;