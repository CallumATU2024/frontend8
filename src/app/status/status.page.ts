import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButtons,IonBackButton, IonItem, IonList, IonLabel, IonRadio, IonRadioGroup, IonButton, } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';//Storage for saving info
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadioGroup, IonRadio, IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton]
})
export class StatusPage implements OnInit {
status:string= "";//Allowing radio to log

  constructor(private storage:Storage, private router:Router) { }//saving storage to it

  async onButtonClick(){
    console.log(this.status);//Save status
    await this.storage.create();//creates storage
    await this.storage.set('status', this.status);//saves the status
    this.router.navigate(['/home']);//going back to the home page
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.status= await this.storage.get('status');
    
    
  }
  ngOnInit() {
  }

}
