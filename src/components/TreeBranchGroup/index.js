import React, { Component } from 'react'
import TreeBranchItem from '../TreeBranchItem';
 
export default class TreeBranchGroup extends Component {
  render() {
    return (
     
          <div className="TreeBranchGroup">
                <div className="Branch_title">{this.props.title}</div>

                <div className="TreeBranchGroup_Parent">
                    <div className="Member">            
                    <TreeBranchItem img="81512169979" link="Public_home.js" name="Greg Donatelli" bornYear="1957"/>
                    </div>
                    <div className="Member"> 
                    <TreeBranchItem img="100000512793912" link="Public_home.js" name="Victoria Donatelli" bornYear="1960"/>
                    </div>
                </div>

                <div className="TreeBranchGroup_Child_end">
                    <div className="Member">
                    <TreeBranchItem img="1424683623" link="Public_home.js" name="Marina Lowe" bornYear="1981"/>  
                    </div>
                </div>

                <div className="TreeBranchGroup_Child_end">
                    <div className="Member">
                    <TreeBranchItem img="10141455" link="Public_home.js" name="Adam Donatelli" bornYear="1983"/>  
                    </div>
                </div>
                
                <div className="TreeBranchGroup_Child_center">
                    <div className="member">
                    <TreeBranchItem img="100003338973176" link="Public_home.js" name="Angelo Donatelli" bornYear="2000"/>
                    </div>
                </div>

                <div className="TreeBranchGroup_start">
                    <div className="member">
                    <TreeBranchItem img="100000098846254" link="Public_home.js" name="Jo Donatelli" bornYear="2001"/>
                    </div>
                </div>

          </div>  
    )
  }
}
