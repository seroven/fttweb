import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';
import { ProductInterface } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/modules/category/interfaces/category.interface';
import { CategoryService } from 'src/app/modules/category/services/category.service';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: [],
})
export class SaveProductComponent {
  @Input() visible: boolean = false;
  @Output() onHidePage = new EventEmitter<void>();

  public formProduct: FormGroup;

  public loadSubmit: boolean = false;

  public categoriesList$: Observable<CategoryInterface[]>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private messageService: MessageService
  ) {
    this.formProduct = formBuilder.group({
      id: new FormControl(null),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      idcategory: new FormControl(null, [Validators.required]),
    });
    this.categoriesList$ = categoryService.getCategory();
  }

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe((product) => {
      this.formProduct.patchValue({
        id: product.id,
        description: product.description,
        price: product.price,
        idcategory: product.category?.id,
      });
    });
  }

  reset() {
    this.formProduct.reset();
  }

  closeModal() {
    this.onHidePage.emit();
  }

  cancel() {
    this.reset();
    this.closeModal();
  }

  submit() {
    if (this.formProduct.invalid) return;
    const product: ProductInterface = this.formProduct.value;
    this.loadSubmit = true;
    if (product.id != null) {
      this.productService.editProduct(product, product.id).subscribe({
        next: (response) => {
          this.loadSubmit = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product updated',
          });
          this.productService.productsList$.next();
          this.reset();
          this.closeModal();
        },
        error: (err) => {
          this.loadSubmit = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'An unknown error ocurred',
          });
        },
      });
    } else {
      this.productService.saveProduct(product).subscribe({
        next: (response) => {
          this.loadSubmit = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product registered',
          });
          this.productService.productsList$.next();
          this.reset();
          this.closeModal();
        },
        error: (err) => {
          this.loadSubmit = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'An unknown error ocurred',
          });
        },
      });
    }
  }
}
