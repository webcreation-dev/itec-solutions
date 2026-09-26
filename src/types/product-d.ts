// ================= TYPES =================
export interface ProductBadge {
    text: string;
    className: string;
}
export interface ProductDT {
    id: number;
    title: string;
    price: number;
    oldPrice?: number;
    description: string;
    images: string[];
    colors: string[];
    rating: number;
    reviews: number;
    stock: boolean;
    category: string;
    tags: string[];
    sku: string;
    badge?: ProductBadge;
    shoes?: boolean;
    clothing?:boolean;
    bags?:true;
}