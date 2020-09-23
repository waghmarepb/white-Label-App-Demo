import { IProduct } from '../shared/interface/product.interface';

export class Product implements IProduct {
    productName: string;
    productTag: string;
    productPrice: string;
    imagePath: string;
}
