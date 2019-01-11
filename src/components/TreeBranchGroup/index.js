import React, { Component } from 'react'
import TreeItemGroup from '../TreeItem-group';

export default class TreeBranchGroup extends Component {
  render() {
    return (
      <div>
          <div className="treeBranchGroup">
                <div className="Branch_title">{this.props.title}</div>
                <div className="treeBranchGroup_Parent">
                    <div className="member">            
                    <TreeItemGroup img="10150581634174980" link="Public_home.js" name="Greg Donatelli" bornYear="1957"/>
                    </div>
                    <div className="member"> 
                    <TreeItemGroup img="10156909478539560" link="Public_home.js" name="Victoria Donatelli" bornYear="1960"/>
                    </div>
                </div>


                <div className="treeBranchGroup_Child_end">
                    <div className="member">
                    <TreeItemGroup img="1424683623" link="Public_home.js" name="Marina Lowe" bornYear="1981"/>  
                    </div>
                </div>

                <div className="treeBranchGroup_Child_end">
                    <div className="member">
                    <TreeItemGroup img="10141455" link="Public_home.js" name="Adam Donatelli" bornYear="1983"/>  
                    </div>
                </div>
                
                <div className="treeBranchGroup_Child_center">
                    <div className="member">
                    <TreeItemGroup img="100003338973176" link="Public_home.js" name="Angelo Donatelli" bornYear="2000"/>
                    </div>
                </div>

                <div className="treeBranchGroup_start">
                    <div className="member">
                    <TreeItemGroup img="100000098846254" link="Public_home.js" name="Jo Donatelli" bornYear="2001"/>
                    </div>
                </div>

          </div>
      </div>
    )
  }
}
