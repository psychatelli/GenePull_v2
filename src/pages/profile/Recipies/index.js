import React, { Component } from 'react'
import LeftNav from '../../../components/LeftNav/profile';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';
import ThumbnailList from '../../../components/ThumbnailList';
import Pageheader from '../../../components/PageHeader';

export default class ProfileRecipies extends Component { 
  render() {
    return (
      <div>
          <div className="Grid_wrapper">
                
                <div className="Grid_2Col">
                    <div className="Column">
                        <TreeItem img="100008343750912" name="Adam Donatelli" location="St. Petersburg" bornYear="1983"/>
                        <LeftNav/>
                        <InfoCard location='St. Petersburg'
                            age='35'
                            education='University of Arizona'
                            bornIn="Hobbs,NM"
                            />
                    </div>

                    <div className="Column">
                        <div className="HeaderWrapper"> 
                        <Pageheader text="Recipies" icon="burst_mode"/>
                        </div>


                        <div className="ThumbnailList_Wrapper"> 
                         <ThumbnailList title="Pizza" link="/profile/recipe" img="https://photos.smugmug.com/Test/i-g5GnVtj/0/da49a56b/S/pizza-S.jpg" />
                         <ThumbnailList title="Fetuchini Alredo" link="/profile/recipe" img="https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg" />
                         <ThumbnailList title="Enchiladas" link="/profile/recipe" img="https://photos.smugmug.com/Test/i-7fksTb3/0/cafb1120/L/Enchiladas-L.jpg" />
                         <ThumbnailList title="Tacos" link="/profile/recipe" img="https://photos.smugmug.com/Test/i-n2csRzx/0/1d20a7a3/S/taco1-S.jpg" />
                        </div> 
                    </div>
                </div>
           </div> 
      </div>
    )
  }
}
