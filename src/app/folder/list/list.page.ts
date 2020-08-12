import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  value:detail;

  constructor(public storage:Storage,public loadingController:LoadingController) { 
    this.presentLoading();


    storage.get("1").then((val)=>{
      this.value={firstname:val["firstname"],lastname:val["lastname"],email:val["email"],pass:val["password"]}
    });
  }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 10000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
interface detail{
  firstname:String;
  lastname:String;
  email:String;
  pass:String;
}