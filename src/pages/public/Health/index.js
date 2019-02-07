import React from 'react';

import LeftNav from '../../../components/LeftNav';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';
import Pageheader from '../../../components/PageHeader';
import TargetDetails from '../../../components/TargetDetails'
import TextBox from '../../../components/TextBox';


export default class Health extends React.Component {
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
                       
                       
                       <TextBox 
                        title= 'Symptoms'
                        content= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
                       />

                       <TextBox 
                        title= 'Treatment Approach'
                        content= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
                       />

                       <TextBox 
                        title= 'Medications'
                        content= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
                       />

                       <TextBox 
                        title= 'Results'
                        content= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
                       />


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

