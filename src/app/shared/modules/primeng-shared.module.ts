import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    TooltipModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    DialogModule,
    CalendarModule,
    CardModule,
    RadioButtonModule,
    DividerModule,
    SplitButtonModule,
    AccordionModule,
    AutoCompleteModule,
    CheckboxModule,
    InputTextareaModule,
    FileUploadModule,
    MenuModule,
    TabViewModule,
    ToastModule
  ],
  exports: [
    CommonModule,
    ToolbarModule,
    TooltipModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    DialogModule,
    BreadcrumbModule,
    CalendarModule,
    CardModule,
    RadioButtonModule,
    DividerModule,
    SplitButtonModule,
    AccordionModule,
    AutoCompleteModule,
    CheckboxModule,
    InputTextareaModule,
    FileUploadModule,
    MenuModule,
    TabViewModule,
    ToastModule
  ]
})
export class PrimengSharedModule { }
