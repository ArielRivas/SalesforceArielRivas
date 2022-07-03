import { LightningElement} from 'lwc';
import { movies } from 'c/data';


export default class MovieCard extends LightningElement {
movies;
  display_title = movies.display_title;
  multimediaUrl = movies.multimedia.src;

}