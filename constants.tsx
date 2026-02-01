
import { LinkItem, ProductSection } from './types';

export const PROFILE_DATA = {
  username: '@lokerlampuung.id',
  isVerified: true,
  logoUrl: 'https://lokerlampung.online/favicon.ico',
  bio: 'Portal Lowongan Kerja #1 di Provinsi Lampung',
};

export const ACTION_LINKS: LinkItem[] = [
  {
    id: 'post-loker',
    title: 'Pasang Lowongan Kerja Disini',
    url: 'https://www.lokerlampung.online/p/pasang-iklan.html',
    image: 'https://i.ibb.co.com/5bhR3Yy/logo.jpg',
    type: 'success',
  },
  {
    id: '1',
    title: 'Website Utama Loker Lampung',
    url: 'https://lokerlampung.online',
    icon: 'fa-solid fa-globe',
    type: 'primary',
    image: 'https://i.ibb.co.com/5bhR3Yy/logo.jpg'
  },
  {
    id: '2',
    title: 'Join Community (Telegram/WA)',
    url: 'https://wa.me/6283161621443?text=Halo%20Admin,%20saya%20ingin%20join%20group%20loker%20lampung',
    icon: 'fa-solid fa-users',
    type: 'secondary',
  },
];

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    title: 'Promo Pilihan Hari Ini',
    products: [
      {
        id: 'sf1',
        title: 'Promo ShopeeFood Diskon s.d 50% Mie Gacoan',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.8,
        reviewsCount: 1250
      },
      {
        id: 'sf2',
        title: 'Voucher Diskon Janji Jiwa - Cashback 60%',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-16293cb50228?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.9,
        reviewsCount: 840
      },
      {
        id: 'sf3',
        title: 'Flash Sale Kopi Kenangan - Beli 1 Gratis 1',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.7,
        reviewsCount: 2100
      },
      {
        id: 'sf4',
        title: 'Diskon Akhir Bulan Richeese Factory 40%',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1562967914-6cbb048c6f2e?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.8,
        reviewsCount: 3500
      }
    ]
  },
  {
    title: 'Gadget & Elektronik Pilihan',
    products: [
      {
        id: 'g1',
        title: 'TWS Bluetooth 5.3 Suara Bass Mantap',
        price: 'IDR. 89.000',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.9,
        reviewsCount: 5400
      },
      {
        id: 'g2',
        title: 'Powerbank 20.000mAh Fast Charging 22.5W',
        price: 'IDR. 145.000',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.8,
        reviewsCount: 12000
      },
      {
        id: 'g3',
        title: 'Smartwatch Full Screen Waterproof IP68',
        price: 'IDR. 199.000',
        store: 'Tokopedia',
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://tokopedia.link/example',
        rating: 4.7,
        reviewsCount: 890
      },
      {
        id: 'g4',
        title: 'Lampu LED Strip RGB 5M Smart Control',
        price: 'IDR. 45.000',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.9,
        reviewsCount: 25000
      }
    ]
  },
  {
    title: 'Fashion & Gaya Hidup',
    products: [
      {
        id: 'fp1',
        title: 'Celana Cargo Premium - Best Seller',
        price: 'IDR. 59.850',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.7,
        reviewsCount: 3200
      },
      {
        id: 'fp2',
        title: 'Kaos Polos Cotton Combed 30s Premium',
        price: 'IDR. 49.200',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.8,
        reviewsCount: 15400
      },
      {
        id: 'fs1',
        title: 'Sepatu Sneakers Pria Casual Trendy',
        price: 'IDR. 125.000',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example',
        rating: 4.9,
        reviewsCount: 1200
      },
      {
        id: 'fs2',
        title: 'Hoodie Oversize Unisex Bahan Tebal',
        price: 'IDR. 85.000',
        store: 'Tokopedia',
        imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://tokopedia.link/example',
        rating: 4.8,
        reviewsCount: 4300
      }
    ]
  }
];
