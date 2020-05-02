import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, showDetails } from '../../../actions/postActions';
import PropTypes from 'prop-types'; 
import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

import PostItem from '../../../components/PostItem/profile';
import TargetDetails from '../../../components/TargetDetails/profile';
import Pageheader from '../../../components/PageHeader'; 
import CommentFeed from '../../../components/comment/profile';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            sideNavToggle: false,
            commentsMessage: this.commentsMessage,
            newComment: '',
        }

    }

    componentWillMount() {
        this.props.fetchPosts();
    }


  
    
    // handleCommentSubmitChange(event) {
    //     this.setState({newComment: event.target.value});
    //     }
    
    // handleCommentSubmit(event) {
    //     const {newComment} = this.state;

    //         alert('A name was submitted: ' + this.state.newComment);
    //         event.preventDefault();

    //         this.state.Data.push({
    //             id: 3,
    //             avatar: '100008343750912',
    //             comment: newComment,
    //         })
    // }  

    
    // DeletePost(posts) {
    //     console.log(this.state.Data);

    //     const Post = Object.assign([], this.state.Data);
    //     Post.splice(posts, 1)
    //     this.setState({
    //         Data : Post,
    //         selectedThumbnail: this.state.Data[0].thumbnail,
    //         selectedDescription: this.state.Data[0].description,
    //         selectedComment: 0,
           
    //     })


    // }

 
    render() {
        const { post, posts } = this.props;


    const PostFeed = posts.map(item => (
        <PostItem 
        // commentItem={item.comments[0].text} 
        postId={item.id}
        name={item.name} 
        avatar={item.avatar} 
        thumbnail={item.thumbnail} 
        gallery={item.gallery} 
        displayDetails={() => this.props.showDetails(item)}  />
    ));


        const PostDetails = () => {
            if (!post.name == '') {
                return  <div> 
                    <TargetDetails
                    postId={post.id}  
                    thumbnail={post.thumbnail} 
                    description={post.description}

                    />
                    <CommentFeed comments={post.comments} />
                    </div>
            }

            return <div> {firstPost}</div>
            }


    const firstPost = posts.slice(0, 1).map(item => (
        <div>
                <TargetDetails 
                thumbnail={item.thumbnail} 
                description={item.description}
                postId={item.id}
                />

            <CommentFeed postId={item.id} comments={item.comments} />
        </div>
    ));
            
 
                
    
      return (
        <div className="Wrapper"> 

        <div className="Grid_wrapper">
            <div className="Grid_2Col">
                <div className="Column1">
                    <TreeItem img="100008343750912" name="Adam Donatelli (ME)" location="St. Petersburg" bornYear="1983"/>
                    <LeftNav/>
                    {/* <InfoCard location='St. Petersburg' age='35' education='University of Arizona' bornIn="Hobbs,NM" /> */}
                </div>

                <div className="Column2"> 
                        <div className="HeaderWrapper"> 
                            <Pageheader text="Adam Donatelli" icon="person" />
                        </div>

                        <div className="Grid_2Col_Container"> 
                            <div className="Column">
                                <div className="spacebetween">
                                    <div>
                                    </div>
                                    <div>
                                        <a title="Add a post" className="btn-floating btn-small waves-effect waves-light grey">
                                        <i className="material-icons">add</i>
                                        </a>
                                    </div>
                                </div>
                                {PostFeed}

                            </div>

                            <div className="Column">
                               {PostDetails()}
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
    </div>
        );
    }
}

Profile.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    post: PropTypes.object.isRequired, 
    showDetails: PropTypes.func.isRequired 
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    showDetails: state.posts.item,
    post: state.posts.item,
    //the Key 'posts' and 'post' can be named whatever, but this is what you are naming the prop to be used. 'posts' is used with this.props.posts.
})

export default connect(mapStateToProps, {fetchPosts, showDetails})(Profile)
