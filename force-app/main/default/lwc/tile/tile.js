import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api movies;

    tileClick() {
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.movies.display_title,
            detail: this.movies.multimediaUrl
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}