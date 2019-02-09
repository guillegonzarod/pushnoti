import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';



@Injectable({
  providedIn: 'root'
})
export class PushnotificationService {

  constructor(private oneSignal: OneSignal, private platform: Platform) { }

  init_notifications() {

    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('b7e6ca95-c8bc-4e92-a21b-0ce359dbb6ed', '234058015166');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    } else {
      console.log('OneSignal no funciona en Chrome');
    }
  }

}
