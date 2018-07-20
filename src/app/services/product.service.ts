import { Injectable } from '@angular/core';
import { Product } from 'src/app/domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: Product[];

  constructor() {
    this.data = [
      {'code' : 'P001' , 'libelle' : 'Coffee' , 'prixUnitaire' : 1500},
      {'code' : 'P002' , 'libelle' : 'Orange' , 'prixUnitaire' : 2200},
      {'code' : 'P003' , 'libelle' : 'tea' , 'prixUnitaire' : 1200}
    ];
   }
   public getAllProducts(): Product[] {
     return this.data;
   }
}
