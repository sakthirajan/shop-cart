import { Component, OnInit } from '@angular/core';
import { Product} from '../entities/product.entity';
import { ProductService } from '../service/product.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Product[];

  constructor(private _service:ProductService) { }

  ngOnInit() {
    this.products=this._service.findAll();
  }

}
