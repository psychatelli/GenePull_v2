import React from 'react';
import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

import InfoCardSkills from '../../../components/Infocard/skills';
import ImgPostProfile from '../../../components/PostItem/profile';
import TreeBranchGroup from '../../../components/TreeBranchGroup';
import TargetDetails from '../../../components/TargetDetails/profile';
import Pageheader from '../../../components/PageHeader'; 
import Button from '@material-ui/core/Button';

 
 const Postings =  [
    {
        img: '100008343750912',
        name: 'Adam Donatelli',
        thumbnail: 'https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg',
        description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        comments: [
                    {
                    img: '100008343750912',
                    description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                    },
                    {
                    img: '100008343750912',
                    description: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                    }
                  ]

        },
        {
        img: '100008343750912',
        name: 'Sam Jones II',
        thumbnail: 'https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg',
        description: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        comments: [
                    {
                    img: '100008343750912',
                    description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                    },
                    {
                    img: '100008343750912',
                    description: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                    }
                  ]

        },
        {
        img: '100008343750912',
        name: 'Sam Jones',
        thumbnail: 'https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg',
        description: '2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        comments: [
                    {
                    img: '100008343750912',
                    description: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                    },
                    {
                    img: '100008343750912',
                    description: '1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
                    }
                  ]

        }
];




  export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            isSwitchOn: false,
            img: '',
            name: '',
            thumbnail: '',
            description: '',
        }
    }
    
    // state = {
    //     isSwitchOn: false,
    // }


    showDetails = () => {
        console.log(Postings.name, Postings.img)
      }

    

    render() {
        let PostFeed;
        PostFeed = Postings.map(posts => (
            <ImgPostProfile  post={posts} />
          ));


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
                {/* <TargetDetails 
                thumbnail="https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                img="100008343750912"  
                img2="1424683623"/> */}

                <TargetDetails 
                thumbnail={Postings[0].thumbnail}
                description={Postings[0].description}
                img={Postings[0].img}  
                img2="1424683623"/>

                </div>
            </div> 

            </div>  
        </div>
    </div>
</div>
        );
    }
}

