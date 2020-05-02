import React, { Component } from 'react'
import TestProp from './testProp';



function checkField(field1, field2) {
    if ((field1 == "") && (field2 == ""))
      return true;
    else if ((field1 == "") || (field2 == ""))
      return false;
    else
      return true;
  }


export default class Test extends Component {


    render() {

function checkField(field1, field2) {
  if ((field1 == "") && (field2 == ""))
    console.log('true')
  else if ((field1 == "") || (field2 == ""))
    console.log('false')
  else
    console.log('true')
}

checkField("1","1")        

        return (
            <div>
                <h2>Home </h2>
               
            </div>
        )
    }
}
