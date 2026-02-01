
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
        affiliateUrl: 'https://shope.ee/example'
      },
      {
        id: 'sf2',
        title: 'Voucher Diskon Janji Jiwa - Cashback 60%',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-16293cb50228?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      },
      {
        id: 'sf3',
        title: 'Flash Sale Kuliner Lampung Hemat 60%',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      },
      {
        id: 'sf4',
        title: 'Menu Makan Siang di Bawah 10rb',
        store: 'ShopeeFood',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      }
    ]
  },
  {
    title: 'Rekomendasi Fashion Pria',
    products: [
      {
        id: 'fp1',
        title: 'Celana Cargo Premium - Best Seller',
        price: 'IDR. 59.850',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      },
      {
        id: 'fp2',
        title: 'Kaos Polos Cotton Combed 30s',
        price: 'IDR. 49.200',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      },
      {
        id: 'fp3',
        title: 'Celana Pendek Chino Canvas Premium',
        price: 'IDR. 54.900',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      },
      {
        id: 'fp4',
        title: 'Kemeja Flanel Slimfit Modern',
        price: 'IDR. 89.000',
        store: 'Shopee',
        imageUrl: 'https://images.unsplash.com/photo-1565084888279-aff9969bb048?q=80&w=300&h=300&auto=format&fit=crop',
        affiliateUrl: 'https://shope.ee/example'
      }
    ]
  }
];
