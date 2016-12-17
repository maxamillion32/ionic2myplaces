import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { PlaceProvider } from '../../providers/place-provider';
import { PlaceAddPage } from '../../pages/place-add/place-add';

@Component({
  selector: 'page-place-list',
  templateUrl: 'place-list.html'
})

export class PlaceListPage {

  places: 11;

  constructor (
  	public navCtrl: NavController, 
  	public modalCtrl: ModalController,
  	public placeProvider: PlaceProvider) {

      this.getAll();
  }

  getAll(){
    this.placeProvider.getAllPlaces();
    alert(this.placeProvider.places);
  }


  addItem() {
    let addModal = this.modalCtrl.create(PlaceAddPage);
    // call back when modal dismissed
    addModal.onDidDismiss((data) => {
      if(data){
        this.saveItem(data);
      }
    });
    addModal.present();
  }
 
  saveItem(data) {
    this.placeProvider.placeSave(data);
  } 
 		 
}