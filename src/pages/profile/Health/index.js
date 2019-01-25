import React from 'react';

import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

 
import Pageheader from '../../../components/PageHeader';
import TargetDetails from '../../../components/TargetDetails';


export default class ProfileHealth extends React.Component {
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
                <Pageheader text="Health Watch" icon="local_hospital" /> 
                </div>

                <div className="Grid_2Col_Modified"> 

                    <div className="Column">

                        <div className="PillList">
                                <div className="PillItemActive">Contant Headaches</div>
                                <div className="PillItem">Pimples</div>
                                <div className="PillItem">Flu</div>
                                <div className="PillItem">Cancer</div>
                                <div className="PillItem">Allergies</div>
                                <div className="PillItem">Kidney Stones</div>
                                <div className="PillItem">Kidney Stones</div>
                                <div className="PillItem">Kidney Stones</div>
                                <div className="PillItem">Kidney Stones</div>
                        </div>
                       
                       <div className="Medical_card">
                           <div className="Title"> Symptoms </div>
                           <div className="Content">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    
                            </p>
                           </div>
                       </div>

                       <div className="Medical_card">
                           <div className="Title"> Treatment Approach </div>
                           <div className="Content">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    
                            </p>
                           </div>
                       </div>

                       <div className="Medical_card">
                           <div className="Title"> Medications </div>
                           <div className="Content">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    
                            </p>
                           </div>
                       </div>

                       <div className="Medical_card">
                           <div className="Title"> Results </div>
                           <div className="Content">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.    
                            </p>
                           </div>
                       </div>

                    </div>

                    <div className="Column">
                        <TargetDetails 
                        thumbnail="" 
                        title="Contant Headaches" 
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

