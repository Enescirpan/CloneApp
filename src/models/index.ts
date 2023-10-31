export declare class Category{ //export declare ifadesi sınıfın dışa aktarılabilir olduğunu ve dısşarıdan erişilebildiğini gösterir.
    readonly id:string; //readonly ifadesi sınıfın özelliklerinin property olduğunu belirtir.Bu özelliklere bir kez değer atandıktan sonra değiştirilemezler.
    readonly name: string;
    readonly src:string;
    readonly subCategories: string[]
}