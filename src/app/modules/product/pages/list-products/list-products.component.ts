import { Component } from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CategoryInterface } from 'src/app/modules/category/interfaces/category.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: [],
})
export class ListProductsComponent {
  public rows: ProductInterface[] = [];
  public loadRows: boolean = false;
  public subscription: Subscription | null = null;

  public visibleSaveModal: boolean = false;
  public visibleDeleteModal: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadRows = true;
    this.subscription = this.productService.productsList$
      .pipe(switchMap(() => this.productService.getProducts()))
      .subscribe((response) => {
        console.log(response);
        this.rows = response;
        this.loadRows = false;
      });
    this.productService.productsList$.next();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSaveModal() {
    this.visibleSaveModal = !this.visibleSaveModal;
  }

  toggleDeleteModal() {
    this.visibleDeleteModal = !this.visibleDeleteModal;
  }

  selectProduct(product: ProductInterface) {
    this.productService.selectedProduct$.next(product);
  }
}
