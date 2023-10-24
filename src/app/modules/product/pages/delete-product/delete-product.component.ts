import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: []
})
export class DeleteProductComponent {
  @Input() visible: boolean = false;
  @Output() onHidePage = new EventEmitter<void>();

  public loadSubmit: boolean = false;
  private idProductSelected:number|null = null;
  constructor(private productService:ProductService, private messageService:MessageService) {
    this.productService.selectedProduct$.subscribe(product => {
      this.idProductSelected = product.id;
    })
  }

  closeModal(){
    this.onHidePage.emit();
  }

  cancel(){
    this.closeModal();
  }

  confirm(){
    if (this.idProductSelected != null){
      this.loadSubmit = true;
      this.productService.deleteProduct(this.idProductSelected).subscribe({
        next: response  => {
          this.loadSubmit = false;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product deleted' });
          this.productService.productsList$.next();
          this.closeModal();
        },
        error:  err => {
          this.loadSubmit = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An unknown error ocurred' });
        }
      })
      
    }
  }
}
