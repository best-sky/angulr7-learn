import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  // dataSource:Observable<any>;

  // products:Array<any> = [];
  products:Observable<any>;
  constructor(private httpClient:HttpClient) { 
    const headers = new HttpHeaders({
      'Authorization': '1233',
    });
    // this.dataSource = this.httpClient.get<any>('/api/products')
    this.products = this.httpClient.get<any>('/api/products',{headers:headers})
  }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   (data) => this.products = data
    // )
  }

}
