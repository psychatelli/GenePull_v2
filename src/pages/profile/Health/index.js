import React from 'react';

import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';

 
import Pageheader from '../../../components/PageHeader';
import TargetDetails from '../../../components/TargetDetails/profile';
import Pill from '../../../components/common/pill';
import Comment from '../../../components/comment/profile';
import Textbox from '../../../components/TextBox';

export default class ProfileHealth extends React.Component {

    constructor() {
        super();
        this.state = {
                selectedTitle: this.title,
                selectedSymptoms: this.selectedSymptoms,
                selectedTreatment: this.selectedTreatment,
                selectedMedications: this.selectedMedications,
                selectedResults: this.selectedResults,
                selectedComment: 0,
                Data : [
                    {
                        id: 0,
                        title: 'Constant Headackes',
                        symptoms: 'head hurt',
                        treatment: 'Adam Donatelli',
                        medications: 'coffe',
                        results: 'felt better',
                        comments: [
                                    {
                                    id: 0,
                                    img: '100008343750912',
                                    comment: '0 - Lorem ipsum dolor sit amet, consectetur adipiscing.',
                                    },
                                    {
                                    id: 1,
                                    img: '100008343750912',
                                    comment: '0 - Lorem ipsum dolor sit amet, consectetur.',
                                    }
                                  ]
                        },
                        {
                        id: 1,
                        title: 'Pimples',
                        symptoms: 'Face looked bad',
                        treatment: 'Adam Donatelli',
                        medications: 'coffe',
                        results: 'felt better',
                        comments: [
                                    {
                                    id: 0,
                                    img: '100008343750912',
                                    comment: '1 - Lorem ipsum dolor sit amet, consectetur.',
                                    },
                                    {
                                    id: 1,
                                    img: '100008343750912',
                                    comment: '1 - Lorem ipsum dolor sit amet, consectetur.',
                                    }
                                  ]
                        },
                        
                ],
                   }
                   this.state.selectedSymptoms = this.state.Data[0].symptoms;
                   this.state.selectedTreatment = this.state.Data[0].treatment;
                   this.state.selectedMedications = this.state.Data[0].medications;
                   this.state.selectedResults = this.state.Data[0].results;
            }


            ShowDetails(medical) {
                console.log(medical);

                this.setState({
                    selectedSymptoms: medical.symptoms,
                    selectedTreatment: medical.treatment,
                    selectedMedications: medical.medications,
                    selectedResults: medical.results,
                    selectedComment: medical.id
                });
            }

    render() {

        const Pills = this.state.Data.map(medical => (
                <Pill 
                selected={'PillItem'} 
                text={medical.title}
                showDetails={this.ShowDetails.bind(this, medical)}
                />
        ));

        const Comments = this.state.Data[this.state.selectedComment].comments.map(x => (
            <Comment  
                key={x.id}  
                avatar={x.img} 
                comment={x.comment} />
        ));


        



      return (
        <div className="Wrapper"> 
        <div className="Grid_wrapper">
            <div className="Grid_2Col">



            <div className="Column1">
                <TreeItem img="100008343750912" name="Adam Donatelli" location="St. Petersburg" bornYear="1983"/>
                <LeftNav/>
                <InfoCard 
                    location='St. Petersburg'
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
                                {Pills}
                        </div>
                       
                       <Textbox 
                        title="Symptoms"
                        content= {this.state.selectedSymptoms}
                       />
                       
                       <Textbox 
                        title="Treatment Approach"
                        content= {this.state.selectedTreatment}
                       />

                       <Textbox 
                        title="Medications"
                        content= {this.state.selectedMedications}
                       />

                        <Textbox 
                        title="Results"
                        content= {this.state.selectedResults}
                       />
                       
                     </div>  {/* end Column */}


                    <div className="Column">
                        <TargetDetails 
                        title="Contant Headaches" 
                        img="100008343750912" 
                        img2="1424683623"/>

                        {Comments}
                    </div>

    </div> {/* end Grid_2Col */}






            </div>
            </div>
        </div>
        </div>
        );
    }
}

