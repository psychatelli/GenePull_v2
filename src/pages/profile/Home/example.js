import React from 'react';

//Source for this code
// https://codereview.stackexchange.com/questions/176495/react-component-click-to-edit-text

export default class EditableField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      submitting: false,
      draftText: this.props.text,
      text: this.props.text,
      error: false,
    }

    this.success = this.success;
    this.failure = this.failure;
  }

    success = () => {
        this.setState({submitting: false});
    }


    failure = () => {
        this.setState({
            submitting: false,
            error: true
        });
    }


    handleClickOutside = (e) => {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.toggleEditing();
        }
    }
    
    handleCancel = () => {
        this.setState({draftText: this.state.text});
        this.toggleEditing();
    }
    
    toggleEditing = () => {
        // so we can close on outside click
        if (this.state.editing) {
            document.removeEventListener('mousedown', this.handleClickOutside);
        } else {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
    
        this.setState({editing: !this.state.editing});
    }

    handleChange = (e) => {
        this.setState({draftText: e.target.value});
    }

  // actually submit the request etc.
    triggerSubmit = () => {
        this.setState({
            text: this.state.draftText,
            submitting: true,
        });
        // submit
        // this.props.submitCallback(this.state.draftText, this.success, this.failure);
    }
  

  // check for enter or cancel
    handleKeyDown = (e) => {
        const enter_key = 13;
        const escape_key = 27;

        if (e.keyCode == enter_key) {
        this.toggleEditing();
        this.triggerSubmit();
        } else if (e.keyCode == escape_key) {
        this.toggleEditing();
        }
    }


  render() {
    let controlLinks;
    let editing;
    let textOrInput;
    let error;

    if (this.state.error) {
      error = <span className="error">error!</span>
    }

    
 
    if (this.state.editing) {
      textOrInput = <input
                      autoFocus
                      type="text"
                      id={this.props.id}
                      onChange={this.handleChange}
                      onKeyDown={this.handleKeyDown}
                      value={this.state.draftText}
                    />

      controlLinks = (
        <div>
          <a className="edit-link blue-link" onClick={this.handleCancel} href="#">CANCEL</a>
        </div>
      )

      editing = 'editing';
    } else {
      textOrInput = <span className="text">{this.state.text}</span>
      controlLinks = <div><a className="edit-link blue-link" onClick={this.toggleEditing} href="#">EDIT</a></div>
      editing = '';
    }

    return (

      <div
        className={`${this.props.className} ${editing} editable-field`}
        ref={(node) => { this.wrapperRef = node; }}
      >
        {textOrInput}
        {error}
        {controlLinks}
      </div>
    );
  }
}