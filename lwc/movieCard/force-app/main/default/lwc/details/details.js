import { LightningElement, api } from 'lwc';
import { movies } from 'c/data';

export default class Details extends LightningElement {
     // Ensure changes are reactive when movies is updated
     movies;

     // Private var to track @api moviesId
     _moviesId = undefined;
     _moviesdisplay_title = undefined;
 
     // Use set and get to process the value every time it's
     // requested while switching between moviess
     set moviesId(value) {
         this._moviesId = value;
         this.movies = movies.find(movie => movie.Id === number);
         this.movies = movies.find(movie => movie.headline === string);
         this.movies = movies.find(movie => movie.summarys === string);
         this.movies = movies.find(movie => movie.multimediaUrl === any);
     }
     
     // getter for moviesId
     @api get moviesId(){
         return this._moviesId;
     }
     set moviesdisplay_title(value){
        this._moviesdisplay_title = value;
        this.movies = movies.find(movie => movie.display_title === string);
     }
     @api get moviesdisplay_title(){
        return this._moviesdisplay_title;
    }
}