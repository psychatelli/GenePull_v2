import React from 'react';
import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

import InfoCardSkills from '../../../components/Infocard/skills';
import PostItem from '../../../components/PostItem/profile';
import TargetDetails from '../../../components/TargetDetails/profile';
import Pageheader from '../../../components/PageHeader'; 
import Comment from '../../../components/comment/profile';
import EditableInput from '../../../components/common/editableInput';

  export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            sideNavToggle: false,
            selectedThumbnail: this.selectedThumbnail,
            selectedDescription: this.selectedDescription,
            newComment: '',
            commentsMessage: this.commentsMessage,
            selectedComment: 0,
            Data : [
                {
                    id: 0,
                    avatar: '100008343750912',
                    name: 'Adam Donatelli',
                    thumbnail: 'https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg',
                    gallery: true,
                    description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                    likes: [
                        {
                            user: '',
                        },
                        {
                            user: '',
                        },
                    ],
                    comments: [
                                {
                                    id: 0,
                                    user: '',
                                    avatar: '100008343750912',
                                    comment: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                },
                                {
                                id: 1,
                                user: '',
                                avatar: '100008343750912',
                                comment: '0 - Lorem ipsum dolor sit amet, consectetur.',
                                }
                              ]
                    },
                    {
                    id: 1,
                    avatar: '100008343750912',
                    name: 'Sam Jones II',
                    thumbnail: 'https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg',
                    gallery: false,
                    description: '1 - Lorem ipsum dolor sit amet, . ',
                    comments: [
                                {
                                id: 0,
                                user: '',
                                avatar: '100008343750912',
                                comment: '1 - Lorem ipsum dolor sit amet, consectetur.',
                                },
                                {
                                id: 1,
                                user: '',
                                avatar: '100008343750912',
                                comment: '1 - Lorem ipsum dolor sit amet, consectetur.',
                                }
                              ]
                    },
                    {
                    id: 2,   
                    avatar: '100008343750912',
                    name: 'Donald Jones',
                    thumbnail: 'https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg',
                    gallery: true,
                    description: '2 - Lorem ipsum dolor sit amet. ',
                    comments: [
                                {
                                id: 0,
                                user: '',
                                avatar: '100008343750912',
                                comment: '2 - Lorem ipsum dolor sit amet.',
                                },
                                {
                                id: 1,
                                user: '',
                                avatar: '100008343750912',
                                comment: '2 - Lorem ipsum dolor sit amet, consectetur..',
                                },
                                {
                                id: 3,
                                user: '',
                                avatar: '100008343750912',
                                comment: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                }
                              ]
                    },
            ],
        }
        this.state.selectedThumbnail = this.state.Data[0].thumbnail;
        this.state.selectedDescription = this.state.Data[0].description;
        this.handleCommentSubmitChange = this.handleCommentSubmitChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount() {
        
      }

     ShowDetails(posts) {
        this.setState({
            selectedThumbnail: posts.thumbnail,
            selectedDescription: posts.description,
            // commentsMessage: this.findComments(posts.id),
            selectedComment: posts.id
        });
     }

  

    handleCommentSubmitChange(event) {
        this.setState({newComment: event.target.value});
        }
    
    handleCommentSubmit(event) {
        const {newComment} = this.state;

            alert('A name was submitted: ' + this.state.newComment);
            event.preventDefault();

            this.state.Data.push({
                id: 3,
                avatar: '100008343750912',
                comment: newComment,
            })
            console.log(this.state.Data);
    }  


        render() {
        const PostFeed = this.state.Data.map(posts => (
            <PostItem key={posts.id} name={posts.name}  avatar={posts.avatar} thumbnail={posts.thumbnail} gallery={posts.gallery} showDetails={this.ShowDetails.bind(this, posts)}  />
        ));

        const myComments = this.state.Data[this.state.selectedComment].comments.map(x => (
            <Comment  
                key={x.id}  
                avatar={x.avatar} 
                comment={x.comment} />
        ));


      return (
        <div className="Wrapper"> 

        <div className="Grid_wrapper">
            <div className="Grid_2Col">
            
                <div className="Column1">
                    <TreeItem img="100008343750912" name="Adam Donatelli (ME)" location="St. Petersburg" bornYear="1983"/>
                    <LeftNav/>
                    <InfoCard location='St. Petersburg' age='35' education='University of Arizona' bornIn="Hobbs,NM" />
                </div>

            <div className="Column2"> 
                <div className="HeaderWrapper"> 
                    <Pageheader text="Adam Donatelli" icon="person" />
                </div>

                <div className="Grid_2Col_Container"> 
                    <div className="Column">
                        {PostFeed}
                    </div>

                    <div className="Column">
                        <TargetDetails 
                        thumbnail={this.state.selectedThumbnail} 
                         description={this.state.selectedDescription} 
                        handleCommentSubmit = {this.handleCommentSubmit}
                        newComment = {this.state.newComment}
                        handleCommentSubmitChange = {this.handleCommentSubmitChange}
                        />
                        {myComments}
                    </div>
                </div> 
            </div> 

        </div>
    </div>
</div>
        );
    }
}

