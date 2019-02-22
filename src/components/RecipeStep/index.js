import React from 'react'
import PropTypes from 'prop-types';
import EditableInput from '../common/editableInput';
import MenuDropdown from './menuDropdown';

const RecipeStep = ({ img, step, instructions, liked, items, fileUploadHandler, fileInput, fileSelectedHandler, fileInputRef, findUserLike}) => { 
 
const ImageContent = () => {
    if(img.length > 0) 
        return  (<img src={img} alt=""/>)  

         return (<div> 
            <input ref={fileInputRef} style={{display: 'none'}}  type="file" onChange={fileSelectedHandler}/>
            <div className=""  onClick={fileInput}> 
            <span>
            <button onClick={fileUploadHandler} className="btn waves-effect waves-light" >Add Image
                <i className="material-icons right">add_a_photo</i>
            </button>
            
            </span> 
            </div>
        </div>)
       
}

    return(
      <div> 
      <div className="imgPost Card"> 
          <div className="controls"> 
              <div>   
                Step {step}
              </div>

              <div> 
              <MenuDropdown/>

                    {/* <i onClick={findUserLike} className="material-icons"> {liked ? 'favorite_border' : 'favorite'} </i>  */}
                  {/* <i className="material-icons">redo</i> */}
              </div>
          </div>

          <div className="img_container">
                <ImageContent/>
          </div>

          <div className="instructionBox"> 
              <EditableInput description={instructions} />
          </div>
      </div>
    </div>
    )
};

RecipeStep.propTypes = {
    img: PropTypes.string.isRequired,
    step: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    instructions: PropTypes.string.isRequired,
        fileUploadHandler: PropTypes.func.isRequired,
        fileInput: PropTypes.func.isRequired,
        fileSelectedHandler: PropTypes.func.isRequired,
        fileInputRef: PropTypes.func.isRequired,
        findUserLike: PropTypes.func.isRequired,
  };

  export default RecipeStep;