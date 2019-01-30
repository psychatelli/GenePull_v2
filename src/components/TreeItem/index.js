import React, { Component } from 'react'
import Avatar from 'react-avatar';

const TreeItem = (props) => {
  return (
<div>
        <div className="treeItem">
            <div className="box">
            <Avatar facebookId={props.img} size="50" round={true} />  
            </div>
            <div className="box"> {props.name} <br/> {props.location}</div>
            <div className="box">
                {props.bornYear} 
            </div>
        </div>
      </div>
  );
};

export default TreeItem;


