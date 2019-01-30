import React from 'react';
import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

import InfoCardSkills from '../../../components/Infocard/skills';
import ImgPostProfile from '../../../components/PostItem/profile';
import TargetDetails from '../../../components/TargetDetails/profile';
import Pageheader from '../../../components/PageHeader'; 
import Button from '@material-ui/core/Button';
import Comment from '../../../components/comment/profile';

  export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            isSwitchOn: false,
            selectedThumbnail: this.thumbnail,
            selectedDescription: this.description,
            commentsMessage: this.commentsMessage,
            value: 1,
            Data : [
                {
                    id: 0,
                    img: '100008343750912',
                    name: 'Adam Donatelli',
                    thumbnail: 'https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg',
                    description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                    comments: [
                                {
                                id: 0,
                                img: '100008343750912',
                                comment: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                },
                                {
                                id: 1,
                                img: '100008343750912',
                                comment: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                }
                              ]
                    },
                    {
                    id: 1,
                    img: '100008343750912',
                    name: 'Sam Jones II',
                    thumbnail: 'https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg',
                    description: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                    comments: [
                                {
                                id: 0,
                                img: '100008343750912',
                                comment: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                },
                                {
                                id: 1,
                                img: '100008343750912',
                                comment: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                }
                              ]
                    },
                    {
                    id: 2,   
                    img: '100008343750912',
                    name: 'Donald Jones',
                    thumbnail: 'https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg',
                    description: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                    comments: [
                                {
                                id: 0,
                                img: '100008343750912',
                                comment: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                },
                                {
                                id: 1,
                                img: '100008343750912',
                                comment: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                },
                                {
                                    id: 3,
                                    img: '100008343750912',
                                    comment: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                                    }

                              ]
                    },
                    
            ],
        }
        this.state.selectedThumbnail = this.state.Data[0].thumbnail;
        this.state.selectedDescription = this.state.Data[0].description;
        this.state.commentsMessage = this.findComments(this.state.value);
    }
    
      
     ShowDetails = (posts) => {
        this.setState({
            selectedThumbnail: posts.thumbnail,
            selectedDescription: posts.description,
            // value: posts.id,
            commentsMessage: this.findComments(posts.id),


        });
        console.log(this.state.value);
    }
     
     findComments = (I) => {
        //  const Item = this.state.value;
     
        const PostComments = this.state.Data[I].comments.map(x => (
                  <div> 
                      
                          <div> 
                            <Comment 
                            key={x.id} 
                            avatar={x.img}
                            comment={x.comment} />
                          </div>
                         
                 </div>
              ));

        return(
        <div>
            {PostComments}
        </div>
        )
    }



    render() {
       
        
        const PostFeed = this.state.Data.map(posts => (
            <ImgPostProfile  key={posts.id} post={posts} showDetails={this.ShowDetails.bind(this, posts)}  />
        ));

        //const  PostComments = this.state.Data.map(posts => (
        //       <div> 
        //           {
        //               posts.comments.map((item ) =>
        //               <div> 
        //                 <Comment 
        //                 key={item.id} 
        //                 avatar={item.img}
        //                 comment={item.comment} />
        //               </div>
        //               )
        //           }
        //      </div>
        //   ));


            
 
      return (
        <div className="Wrapper"> 

        <div  className={ this.state.isSwitchOn ? "EditNav" : "Hidden"}>
            <p>Edit Post</p>
        </div>

        <div className="Grid_wrapper">
            <div className="Grid_2Col">

                <div className="Column1">
                    <button className="outlined" onClick={() => this.setState({isSwitchOn: !this.state.isSwitchOn}) }> Sidenav</button>

                    <TreeItem img="100008343750912" name="Adam Donatelli (ME)" location="St. Petersburg" bornYear="1983"/>
                    <LeftNav/>
                    <InfoCard location='St. Petersburg'
                        age='35'
                        education='University of Arizona'
                        bornIn="Hobbs,NM"
                        />
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

                        {/* {PostDetailsFeed} */}

                <TargetDetails  
                thumbnail={this.state.selectedThumbnail}
                description={this.state.selectedDescription}   
                />

                {/* {PostComments} */}

                {this.state.commentsMessage}



                        

                    </div>
                </div> 

            </div> 

        </div>
    </div>
</div>
        );
    }
}

