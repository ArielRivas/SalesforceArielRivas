import { LightningElement, api } from 'lwc';
import { movies } from 'c/data';

export default class Details extends LightningElement {
     // Ensure changes are reactive when movies is updated
     movies;

     // Private var to track @api moviesId
     _moviesId = undefined;
     _moviesdisplay_title = undefined;
     _moviesheadline = undefined;
     _moviessummary_short = undefined;
     _moviesmultimediaUrl = undefined;
 
     // Use set and get to process the value every time it's
     // requested while switching between moviess
     set moviesId(value) {
         this._moviesId = number;
         this.movies = movies.find(movie => movie.Id === value);  
     }
     // getter for moviesId
     @api get moviesId(){
         return this._moviesId;
     }
     set moviesdisplay_title(value){
        this._moviesdisplay_title = string;
        this.movies = movies.find(movie => movie.display_title === value);
     }
     @api get moviesdisplay_title(){
        return this._moviesdisplay_title;
    }
    set moviessummary_short(value){
        this._moviessummary_short= string;
        this.movies = movies.find(movie => movie.summary_short === value);
     }
     @api get moviessummary_short(){
        return this._moviesheadline;
    }
    set moviesheadline(value){
        this._moviesheadline = string;
        this.movies = movies.find(movie => movie.headline === value);
     }
     @api get moviesheadline(){
        return this._moviesheadline;
    }
    set moviesmultimediaUrl(value){
        this._moviesmultimediaUrl= any;
        this.movies = movies.find(movie => movie.multimediaUrl === value);
    }
     @api get moviesmultimediaUrl(){
        return this._moviesmultimediaUrl;
    }
}