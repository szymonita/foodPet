import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements AfterViewInit {
  @ViewChild(BarecodeScannerLivestreamComponent)
  barcodeScanner: BarecodeScannerLivestreamComponent;
  barcodeValue;

  constructor() { }

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result) {
    console.log(result);
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started) {
    console.log(started);
  }

}
