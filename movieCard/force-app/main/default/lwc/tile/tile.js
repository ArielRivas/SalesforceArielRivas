import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api movies;

    tileClick() {
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detalis: movies.fields.Id.value
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}