import { LightningElement } from 'lwc';

export default class Selector extends LightningElement {
    selectedMovieId;

    handleProductSelected(evt) {
        this.selectedMovieId = evt.detail;
    }
}