import { IonList,IonItem,IonLabel, IonCard, IonGrid, IonRow, IonCol, IonChip, IonCardHeader, IonCardTitle, IonButton, IonPopover, IonIcon } from '@ionic/react'
import React from 'react'
import * as moment from 'moment'
import { Link } from 'react-router-dom'

import {ellipsisVertical} from 'ionicons/icons';

const ChildDetail = ({child, index}) => {  

  const [ showOptions, setShowOptions ] = React.useState(false);   
  const sexArray = {
		"m": "Male",
		"f": "Female",
    "o": "Not Specified",
    null : "Not mentioned"
	}

  console.log(child);

  return (
    <>
    <IonPopover
        isOpen={showOptions}
        onDidDismiss={e => setShowOptions(false)}
    >
      <IonItem button routerLink={ `/students/${child.id}`} routerDirection="none"> More </IonItem>
      <IonItem button>Alumni</IonItem>      
        
    </IonPopover>
    <IonCard class="light list" key={index}>
      <Link to={ `/students/${child.id}/` }>
        <IonCardHeader className="noPadding">
          <IonCardTitle>
              <p>
                #{index+1}. {child.name}
              </p>                 
          </IonCardTitle>
        </IonCardHeader>
      </Link>
        <IonGrid>
            <IonRow>                
                <IonCol size-md="5" size-xs="6">                    
                    <p>
                      DOB: { moment(child.birthday).format("MMMM Do, YYYY") } <br/>
                      Sex: { sexArray[child.sex] }
                    </p>
                </IonCol>
                <IonCol size-md="5" size-xs="6">                    
                    <p>{ child.center.name }</p>                    
                </IonCol>                
                <IonCol size-md="2" size-xs="6">
                  <IonButton  size="small" fill="clear" slots="icon-only" color="light" className="userEditButton" onClick={() => setShowOptions(true)}><IonIcon icon={ellipsisVertical}></IonIcon></IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonCard>
    </>
  )
}

export default ChildDetail;