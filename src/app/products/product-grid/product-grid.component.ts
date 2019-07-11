import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-product-grid',
    templateUrl: './product-grid.component.html',
    styleUrls: ['./product-grid.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridComponent implements OnInit {

    products: Product[];
    errorMessage: string;

    constructor(private productService: ProductService, private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.productService.getProducts().subscribe(
            (products: Product[]) => {
                this.products = products;
                this.ref.detectChanges();
            },
            (err: any) => this.errorMessage = err.error
        );
    }
}
