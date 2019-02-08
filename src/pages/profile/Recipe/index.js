import React from 'react';

import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';


import RecipeStep from '../../../components/RecipeStep'; 
import Pageheader from '../../../components/PageHeader';
import TargetDetails from '../../../components/TargetDetails/profile';
import RightNav from '../../../components/RightNav';
import button from '@material-ui/core';
 
export default class ProfileRecipe extends React.Component {

    constructor() {
        super();
        this.state = {
            sideNavToggle: false,
            Data : [
                {
                    id: '0',
                    title: 'Fetuchini Alfredo',
                    thumbnail: "https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg",
                    description: "This is a recipe that has been pased on for many generations.  My great great great grandma got the recupe off a box at publix. This is a recipe that has been pased on for many generations.  My great great great grandma got the recupe off a box at publix.",
                    steps: [
                        {
                            id: 0,
                            img: 'https://photos.smugmug.com/Test/i-MH2SVHP/0/53c840fa/S/pasta-in-boiling-water-S.jpg',
                            instructions: '0 - These are the instructions they will read',
                        },
                        {
                            id: 1,
                            img: 'https://photos.smugmug.com/Test/i-VVZ4Jfg/0/dc7beace/S/BreastFifteenSpatulas-S.jpg',
                            instructions: 'These are the instructions they will read',
                        },
                        {
                            id: 2,
                            img: 'https://photos.smugmug.com/Test/i-cHSqhLn/0/f7c97ec6/S/Pasta-sauce-from-scratch-S.jpg',
                            instructions: 'These are the instructions they will read',
                        },
                        {
                            id: 3,
                            img: 'https://photos.smugmug.com/Test/i-8Fmj9SH/0/1e610618/S/mushrooms-S.jpg',
                            instructions: 'These are the instructions they will read',
                        },
                    ],
                    comments: [
                                {
                                id: '0',
                                user: '',
                                avatar: '100008343750912',
                                comment: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                },
                                {
                                id: '1',
                                user: '',
                                avatar: '100008343750912',
                                comment: '0 - Lorem ipsum dolor sit amet, consectetur.',
                                }
                              ]
                    }
                    
            ],
        }
    }
    render() {
        const Steps = this.state.Data.map((item) => {
            return(
                <div>
                {item.steps.map((step) => {
                    return(
                        <RecipeStep
                        key={step.id}
                        step={step.id  + 1 } 
                        img={step.img}
                        instructions={step.instructions}
                        />
                    )
                })}
                </div>
            )
        });

        const Details = this.state.Data.map(item => (
            <TargetDetails
            title={item.title} 
            thumbnail={item.thumbnail}
            description={item.description}
            />
        ));
            
            
           


      return (
        <div className="Wrapper"> 
 
        <RightNav sideNavToggle={this.state.sideNavToggle}>
            <p>this is items</p>
        </RightNav>


        <div className="Grid_wrapper">
            <div className="Grid_2Col">

            <div className="Column1">
            <button className="outlined" onClick={() => this.setState({sideNavToggle: !this.state.sideNavToggle}) }> Sidenav</button>

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
                        
                        {Steps}
                       
                    </div>

                    <div className="Column">
                        {Details}
                    </div>

                </div>

            </div>
            
            </div>
        </div>
        </div>
        );
    }
}

