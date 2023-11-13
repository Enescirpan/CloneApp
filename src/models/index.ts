export declare class Category{ //export declare ifadesi sınıfın dışa aktarılabilir olduğunu ve dısşarıdan erişilebildiğini gösterir.
    readonly id:string; //readonly ifadesi sınıfın özelliklerinin property olduğunu belirtir.Bu özelliklere bir kez değer atandıktan sonra değiştirilemezler.
    readonly name: string;
    readonly src:string;
    readonly subCategories: string[]
}
export declare class Product{
    readonly id:string;
    readonly image:string;
    readonly images:string[];
    readonly name:string;
    readonly miktar:string;
    readonly fiyat:number;
    readonly fiyatIndırımlı?: number;
   


}