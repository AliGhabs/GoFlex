import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-connexion-entreprise',
  templateUrl: './connexion-entreprise.page.html',
  styleUrls: ['./connexion-entreprise.page.scss'],
})
export class ConnexionEntreprisePage implements OnInit {
  dataUser = {
    email: '',
    password: '',
  };

  connected: boolean;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if(!auth){
          console.log('non connecté');
          this.connected = false;
      }
      else {
        console.log('connecté');
        this.connected = true;
      }

    });
  }

  login() {
    console.log('email: ' + this.dataUser.email);
    console.log('password: ' + this.dataUser.password);
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      email: '',
      password: '',
  };
}

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }
}
