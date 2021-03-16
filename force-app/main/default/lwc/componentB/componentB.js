import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class ComponentB extends LightningElement {
message
connectedCallback(){

this.callsubscriber()


}

callsubscriber(){

pubsub.subscribe('myEvent',(message)=>{

this.message=message



})

}}