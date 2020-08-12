import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm:FormGroup;
  value:detail;

  constructor(public formbuilder:FormBuilder,public alert:AlertController,public storage:Storage) {
    this.registerForm=this.formbuilder.group({firstname:['', [Validators.required,Validators.minLength(1)]], 
                              lastname: ['', [Validators.required,Validators.minLength(1)]], 
                              email: ['', [Validators.required, Validators.email]], 
                              password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]]
    })
   }

  ngOnInit() {
  }

  loginfo(){
    console.log(this.registerForm.value)
  }
  async showConfirm(){
    const confirm = await this.alert.create({
      header:'Confirm!',
      message:'Should I save the detail?',
      buttons:[
        {
          text:'Cancel',
          role:'cancel',
          handler: () => {  
            console.log('Confirm Cancel');  
          }
        },
        {
          text:'Save',
          handler: () => {  
            this.loginfo()
            this.storage.set("1",this.registerForm.value)
            console.log('Data Saved');  
            console.log(this.value.firstname)
          }
        }
      ]
    });
    await confirm.present();
  }
  

}
interface detail{
  firstname:String;
  lastname:String;
  email:String;
  pass:String;
}
