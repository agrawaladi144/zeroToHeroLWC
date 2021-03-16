import { LightningElement } from 'lwc';

export default class ProgressParent extends LightningElement {


clickHandler(){

this.template.querySelector('c-progress-child').changeStep()




}

}