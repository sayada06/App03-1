import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton, IonModal, IonButtons, IonList, IonImg, IonAvatar, IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonAvatar, IonImg, IonList, IonButtons, IonModal, IonButton, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {
  presentingElement = undefined;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
}

canDismiss = async () => {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Are you sure?',
    buttons: [
      {
        text: 'Yes',
        role: 'confirm',
      },
      {
        text: 'No',
        role: 'cancel',
      },
    ],
  });

  actionSheet.present();

  const { role } = await actionSheet.onWillDismiss();

  return role === 'confirm';
};

}
