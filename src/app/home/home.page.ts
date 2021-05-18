import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  openAboutPopover = false;
  openDetailsPopover = false;
  openReportPopover = false;

  isLoading = false;

  frameLink: SafeResourceUrl;

  stationDetails: any[] = undefined;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.collectMapData();
    this.registerEventListener();
  }

  registerEventListener() {
    window.addEventListener(
      'message',
      (e) => {
        if (e.data.type == 'gaFeatureSelection') {
          this.isLoading = true;
          this.httpClient
            .get(
              'https://api3.geo.admin.ch/rest/services/all/MapServer/find?layer=ch.bfe.ladestellen-elektromobilitaet&searchText=' +
                e.data.payload['featureId'] +
                '&searchField=ChargingStationId&returnGeometry=false'
            )
            .subscribe((data) => {
              this.isLoading = false;
              this.stationDetails = data['results'][0];
              console.log(this.stationDetails);
            });

          this.openAboutPopover = false;
          this.openReportPopover = false;
          this.openDetailsPopover = true;
        }
      },
      false
    );
  }

  collectMapData() {
    var generatedLink =
      'https://map.geo.admin.ch/embed.html?lang=de&geolocation=true&topic=ech&layers=ch.bfe.ladestellen-elektromobilitaet&layers_opacity=1&layers_visibility=true&notooltip=true&bgLayer=ch.swisstopo.pixelkarte-farbe&zoom=8';
    this.frameLink =
      this.sanitizer.bypassSecurityTrustResourceUrl(generatedLink);
  }

  reportProblemBFE() {
    window.open(
      'https://www.uvek-gis.admin.ch/BFE/diemo/feedback/?stationids=' +
        this.stationDetails['attributes'].ChargingStationId
    );
  }

  reportProblemDEV() {
    window.open(
      'mailto:evmap@ponniah.ch?subject=Feedback%20evMap&body=Gib%20hier%20deine%20Nachricht%20ein.%20Ich%20werde%20mich%20bald%20bei%20dir%20melden.%20Bis%20dann!'
    );
  }

  navigate() {
    window.open(
      'http://maps.apple.com/?daddr=' +
        this.stationDetails['attributes'].Latitude +
        ',' +
        this.stationDetails['attributes'].Longitude +
        '&dirflg=d&t=h    '
    );
  }

  callHotline() {
    window.open('tel:' + this.stationDetails['attributes'].HotlinePhoneNumber);
  }

  openHomepage() {
    window.open(this.stationDetails['attributes'].ProviderURL);
  }

  showReportPopover() {
    this.openAboutPopover = false;
    this.openDetailsPopover = false;
    this.openReportPopover = true;
  }

  showAboutPopover() {
    this.openAboutPopover = true;
    this.openDetailsPopover = false;
    this.openReportPopover = false;
  }
  closePopover() {
    this.openDetailsPopover = false;
    this.openAboutPopover = false;
    this.openReportPopover = false;
    this.stationDetails = undefined;
  }
}
