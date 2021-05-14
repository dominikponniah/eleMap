import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  frameLink: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.collectMapData();
    this.registerEventListener();
  }

  registerEventListener() {
    window.addEventListener('message', (e) => {
      if( e.data.type == 'gaFeatureSelection') {
        document.getElementById('name').innerHTML = e.data.payload['layerId'];
        document.getElementById('placemark').innerHTML = e.data.payload['featureId'];
      }
    }, false);
  }

  collectMapData() {
    var latitude;
    var longitude;
    var baseMap = 'ch.swisstipo.pixelkarte-grau';


        var generatedLink = "https://map.geo.admin.ch/embed.html?lang=de&topic=ech&layers=ch.swisstopo.zeitreihen,ch.bfs.gebaeude_wohnungs_register,ch.bav.haltestellen-oev,ch.swisstopo.swisstlm3d-wanderwege,ch.astra.wanderland-sperrungen_umleitungen,ch.bfe.ladestellen-elektromobilitaet&layers_opacity=1,1,1,0.8,0.8,1&layers_visibility=false,false,false,false,false,true&layers_timestamp=18641231,,,,,&geolocation=true&notooltip=true&bgLayer=ch.swisstopo.pixelkarte-farbe&E=2598188.11&N=1195268.19&zoom=8&swisssearch=46.9,7.0";

        this.frameLink = this.sanitizer.bypassSecurityTrustResourceUrl(generatedLink);



}
}
