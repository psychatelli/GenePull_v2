import React from 'react';

import LeftNav from '../../../components/LeftNav';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';


import RecipeStep from '../../../components/RecipeStep'; 
import Pageheader from '../../../components/PageHeader';
import TargetDetails from '../../../components/TargetDetails'


export default class Recipe extends React.Component {
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
                    <div> 
                    <Pageheader text="Recipe" icon="fastfood" />
                    </div>

                    <div>
                    <a className="btn-floating btn-small waves-effect waves-light grey"><i className="material-icons">edit</i></a>

                    </div>
                </div>

                <div className="Grid_2Col_Container"> 

                    <div className="Column">
                        <RecipeStep  
                        img="https://photos.smugmug.com/Test/i-MH2SVHP/0/53c840fa/S/pasta-in-boiling-water-S.jpg"/>
 
                        <RecipeStep  
                        img="https://photos.smugmug.com/Test/i-VVZ4Jfg/0/dc7beace/S/BreastFifteenSpatulas-S.jpg"/>

                        <RecipeStep 
                        img="https://photos.smugmug.com/Test/i-cHSqhLn/0/f7c97ec6/S/Pasta-sauce-from-scratch-S.jpg"/>

                        <RecipeStep 
                        img="https://photos.smugmug.com/Test/i-8Fmj9SH/0/1e610618/S/mushrooms-S.jpg"/>

                        <RecipeStep 
                        img="https://photos.smugmug.com/Test/i-NPcNLT7/0/4cb0aa81/M/garlic-onions-M.jpg"/>

                    </div>

                    <div className="Column">
                        <TargetDetails 
                        thumbnail="https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        title="Pasta" 
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

