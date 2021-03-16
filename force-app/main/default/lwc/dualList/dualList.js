import { LightningElement } from 'lwc';

export default class DualList extends LightningElement {

  
 selected

    get options(){
        return [{

            label:"Virat Kohli",
            value:"Virat Kohli"
},
{
label:"Rohit Sharma",
value:"Rohit Sharma"




},
{
label:"Jasprit Bumrah",
value:"Jasprit Bumrah"



},
{label:"Ishant Sharma",
value:"Ishant Sharma"
}
]




    }

handleChange(event)
{
this.selected= event.detail.value




}




}