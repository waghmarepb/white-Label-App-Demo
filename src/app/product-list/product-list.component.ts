import { Component, OnInit } from '@angular/core';

import { Product } from './product-list.model';
import { HttpService } from '../shared/services/http.service';
import { environment } from '../../environments/environment';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public colorCode = environment.colorCode;
  public allData: Product[];
  constructor(private readonly httpService: HttpService, private sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {

    this.httpService.getDataFromJson().subscribe((res: Product[]) => {
      this.allData = res;
    });
  }
  public sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
