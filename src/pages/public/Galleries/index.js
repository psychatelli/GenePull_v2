import React, { Component } from 'react'
import LeftNav from '../../../components/LeftNav';
import InfoCard from '../../../components/Infocard';
import TreeItem from '../../../components/TreeItem';
import ThumbnailList from '../../../components/ThumbnailList';
import Pageheader from '../../../components/PageHeader';

export default class PublicGalleries extends Component {
  render() {
    return (
      <div>
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
                        <Pageheader text="Life Events" icon="burst_mode" />
                        </div>
                        <div className="ThumbnailList_Wrapper"> 
                         <ThumbnailList title="2015" link="gallery" img="https://photos.smugmug.com/Test/i-J6mRXp2/0/6d0fc701/S/phoenixvaca-S.jpg" />
                         <ThumbnailList title="2016" link="gallery" img="https://photos.smugmug.com/Test/i-fwbctT5/0/1c13d36b/S/floridafamily-S.jpg" />
                         <ThumbnailList title="2017" link="gallery" img="https://photos.smugmug.com/Test/i-3J6gxXV/0/d9bc62f6/S/LonelyGirl-S.jpg" />
                         <ThumbnailList title="2018" link="gallery" img="https://photos.smugmug.com/Test/i-ZGwNPnR/0/528b9141/S/Christmas-Party-S.jpg" />
                        </div> 
                    </div>
                </div>
           </div> 
      </div>
    )
  }
}
