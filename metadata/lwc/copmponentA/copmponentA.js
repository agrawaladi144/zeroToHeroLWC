import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class CopmponentA extends LightningElement {
message
changeHandler(event){

 this.message=event.target.value

}

publishHandler(){



pubsub.publish('myEvent',this.message)


}




}