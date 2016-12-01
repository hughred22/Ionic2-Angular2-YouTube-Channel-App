import {Component} from '@angular/core';
import {Platform, ionicBootstrap,Events} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform,events:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      StatusBar.styleDefault();
    });
    platform.pause.subscribe(()=>{
      console.log('App Paused');
      events.publish('App:Paused');
    });

    platform.resume.subscribe(()=>{
      console.log('App Resume');
      events.publish('App:Resume');
    }); 
  }
}

ionicBootstrap(MyApp);
