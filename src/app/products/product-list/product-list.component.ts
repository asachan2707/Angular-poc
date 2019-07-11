import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {

    pageTitle = 'Products';
    errorMessage: string;
    displayCode: boolean;
    products: Product[];
    selectedProduct: Product | null;
    sub: Subscription;

    constructor(private productService: ProductService, private ref: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.sub = this.productService.selectedProductChanges$.subscribe(
            (selectedProduct) => {
                this.selectedProduct = selectedProduct;
                this.ref.detectChanges();
            }
        );

        this.productService.getProducts().subscribe(
            (products: Product[]) => {
                this.products = products;
                this.ref.detectChanges();
            },
            (err: any) => this.errorMessage = err.error
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    checkChanged(value: boolean): void {
        this.displayCode = value;
    }

    newProduct(): void {
        this.productService.changeSelectedProduct(this.productService.newProduct());
    }

    productSelected(product: Product): void {
        this.productService.changeSelectedProduct(product);
    }

}
