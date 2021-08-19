import React, { Component } from 'react'
import Header from './Header'
import MovieList from './MovieList';

export default class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
          movieSearch: '',
          movieList: [
              {
                  title: 'Le fondateur',
                  sytle: 'Drama',
                  year: '2019',
                  description: 'New description',
                  votes: '89',
                  studio: 'HBO',
                  image: 'fondateur.jpg'
              },
              {
                title: 'Viaina',
                sytle: 'Animation',
                year: '2016',
                description: 'New description2',
                votes: '278',
                studio: 'Disney, Pixar',
                image: 'viaina.jpg'
            },
            {
                title: 'Zootopia',
                sytle: 'Animation',
                year: '2016',
                description: 'New description2',
                votes: '90',
                studio: 'Disney, Pixar',
                image: 'zootopia.jpg'
            },
            {
                title: 'Bella',
                sytle: 'Animation',
                year: '2016',
                description: 'New description3',
                votes: '10',
                studio: 'Disney, Pixar',
                image: 'bella.jpg'
            }
          ]
        }
    
        this.handleMovieSearch = this.handleMovieSearch.bind(this);
      }
    
      handleMovieSearch(e) {
        this.setState({ movieSearch: e.target.value });
      }

    // TODO: Ajouter API    
    // componentDidMount() {
    //     this.getMovies();
    // }

    // getMovies() {
    //     fetch('./movies.json')
    //     .then((res) => {
    //         console.log(res);
    //         return res.json;
    //     })
    //     .then((data) => this.setState({ movieList: data }))
    //     .catch((err) => console.log(err));
    // }
    
    render() {
        return (
            <div>
                <Header onChangeMovieSearch={this.handleMovieSearch} />
                <MovieList movieList={this.state.movieList} />
            </div>
        )
    }
}
