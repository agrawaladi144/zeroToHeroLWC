import { LightningElement,api } from 'lwc';

export default class ProgressChild extends LightningElement {

currentStep="1";

@ api changeStep(){


     dummy=parseInt(this.currentStep);
     console.log(dummy)

    



}




}