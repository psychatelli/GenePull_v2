import React from 'react';
import LeftNav from '../../../components/LeftNav';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

import InfoCardSkills from '../../../components/Infocard/skills';
import PostItem from '../../../components/PostItem';
import TreeBranchGroup from '../../../components/TreeBranchGroup';
import TargetDetails from '../../../components/TargetDetails';
import Pageheader from '../../../components/PageHeader'; 

export default class PublicHome extends React.Component {

    constructor() {
        super(); 
            this.state = {
                gallery: true,
            }
        
    }

    render() {
      return (
        <div className="Wrapper"> 
        <div className="Grid_wrapper">
            <div className="Grid_2Col">

            <div className="Column1">
                <TreeItem img="100008343750912" name="Adam Donatelli" location="St. Petersburg" bornYear="1983"/>
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
                        <PostItem img="1174001948" name="Linda Aldas" post="https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg" gallery={this.state.gallery}/>

                        <PostItem img="100002699328486"  name="Pauline Sanchez" post="https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg" gallery={this.state.gallery}/>

                        <PostItem img="619562340" name="Vivi Mon" post="https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg" gallery={this.state.gallery}/>

                        <PostItem img="10127597" name="Sabit Bojaj" post="https://photos.smugmug.com/Test/i-ZGwNPnR/0/528b9141/S/Christmas-Party-S.jpg" gallery={this.state.gallery}/>

                        <PostItem img="1449017116" name="Tish Contrares" post="https://photos.smugmug.com/Test/i-n2csRzx/0/1d20a7a3/S/taco1-S.jpg" gallery={this.state.gallery}/>
                    </div>

                    <div className="Column">
                    <TargetDetails 
                    thumbnail="https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                    img="100008343750912"  
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

