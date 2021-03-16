import { LightningElement, track,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList'
export default class DomComponent extends LightningElement {

    @track error;
    @wire(getAccountList) accountNames;

isClicked=false


clickHandler(){

this.isClicked= !this.isClicked

}

  }
 






