import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
message


    changeHandler(event){

        this.message= event.target.value






    }
}