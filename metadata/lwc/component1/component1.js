import { LightningElement,track } from 'lwc';

export default class Component1 extends LightningElement {
name= "Aditya";
title="developer";
isvisible=false;
mydata;

handlechange(event){

this.title= event.target.value;



}
handleclick(event){

this.mydata=event.target.value;



}


get isvisibble(){

return this.mydata=="hello";


}



address={
city:"Mumbai",
state:"Maharashtra"

}
trackchange(event){

this.address={...this.address,"city":event.target.value}


}

}