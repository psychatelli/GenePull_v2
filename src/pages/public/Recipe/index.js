import React from 'react';

import LeftNav from '../../../components/LeftNav';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

import InfoCardSkills from '../../../components/Infocard/skills';
import ImgPostPublic from '../../../components/PublicImgPost';
import TreeBranchGroup from '../../../components/TreeBranchGroup';
import PublicPostDetails from '../../../components/PublicPostDetails';
import RecipeStep from '../../../components/RecipeStep'; 
import Pageheader from '../../../components/PageHeader';



export default class Recipe extends React.Component {
    render() {
      return (
        <div className="Wrapper"> 
        <div className="Grid_wrapper">
            <div className="Grid_2Col">

            <div className="Column_feed">
                <TreeItem img="100008343750912" name="Adam Donatelli" location="St. Petersburg" bornYear="1983"/>
                <LeftNav/>
                <InfoCard location='St. Petersburg'
                    age='35'
                    education='University of Arizona'
                    bornIn="Hobbs,NM"
                    />
            </div>
            

            <div> 
                <div className="HeaderWrapper"> 
                <Pageheader text="Recipe" icon="fastfood" />
                </div>

                <div className="Grid_2Col_Modified"> 

                    <div className="Column">
                        <RecipeStep img="1174001948" name="Linda Aldas" 
                        post="https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg"/>

                        <RecipeStep img="100002699328486"  name="Pauline Sanchez"
                        post="https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg"/>

                        <RecipeStep img="619562340" name="Vivi Mon"
                        post="https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg"/>

                        <RecipeStep img="10127597" name="Sabit Bojaj"
                        post="https://photos.smugmug.com/Test/i-ZGwNPnR/0/528b9141/S/Christmas-Party-S.jpg"/>

                        <RecipeStep img="1449017116" name="Tish Contrares"
                        post="https://photos.smugmug.com/Test/i-n2csRzx/0/1d20a7a3/S/taco1-S.jpg"/>
                    </div>


                    <div className="Column">
                    <PublicPostDetails img="100008343750912" img2="1424683623"/>
                   

                    </div>

                </div>

            </div>
            
            </div>
        </div>
        </div>
        );
    }
}

