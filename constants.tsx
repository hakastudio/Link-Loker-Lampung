
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
    url: 'https://t.me/lokerlampuung',
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
        title: 'Stand Holder Phone Kelinci Cute Folding Dekstop Universal Portable',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/qL9FnX3R/sg-11134201-7rblf-lpeyouax5kjqd5-resize-w450-nl.webp',
        affiliateUrl: 'https://s.shopee.co.id/AKUojMBbR7',
        rating: 4.8,
        reviewsCount: 1250
      },
      {
        id: 'sf2',
        title: 'Ellena Dress Gamis Wanita Rayon Motif Mix Rayon Jaguard Lembut Adem Nyaman Daily Bumil dan Busui Friendly By Irmalaila',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/XfM5DZ8F/id-11134207-82250-mj850p7sabczb6.webp',
        affiliateUrl: 'https://s.shopee.co.id/2B970pZf4Y',
        rating: 4.9,
        reviewsCount: 840
      },
      {
        id: 'sf3',
        title: 'Emeron Lovely Naturals Hand & Body Lotion Intense Moisturizing 400 ml x3',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/sJHtS2FQ/id-11134201-7ra0u-md2xr0k51vfoc3.webp',
        affiliateUrl: 'https://s.shopee.co.id/2B9710vChY',
        rating: 4.7,
        reviewsCount: 2100
      },
      {
        id: 'sf4',
        title: 'OMG - OMBRE BUNDLE LIP SERIES - Lip Tint | Lip Cream | Warna Intense, Tahan Lama & Ringan',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/NdckhwNC/id-11134207-7rase-m2e2g7mywfzt42.webp',
        affiliateUrl: 'https://s.shopee.co.id/7AXmyKLjqe',
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
        title: 'Samsung Galaxy A17 8/128GB - Gray',
        price: 'IDR.2.948.000',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/fdL8v3tn/sg-11134201-81zvn-micqzxjqdm9z21.webp',
        affiliateUrl: 'https://s.shopee.co.id/7fU3ZSdXRY',
        rating: 4.9,
        reviewsCount: 5400
      },
      {
        id: 'g2',
        title: 'ROBOT Power Bank RT12 RT180S 10000mAh - 3 Output, Dual Input Type-C & Micro, Fast Charging 12W, Slim & Ringan ',
        price: 'IDR. 99.999',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/ZDs248p/id-11134207-82251-mg8uc57kj6kpe3.webp',
        affiliateUrl: 'https://s.shopee.co.id/LhSq8KrYH',
        rating: 4.8,
        reviewsCount: 12000
      },
      {
        id: 'g3',
        title: 'Aolon Curve 3 Ultra Jam Smartwatch 60Hz Amoled 1.93-inci',
        price: 'IDR. 529.100',
        store: 'Shopee',
        imageUrl: 'https://ibb.co.com/fGVgNtQY',
        affiliateUrl: 'https://s.shopee.co.id/7AXmyqmCfh',
        rating: 4.9,
        reviewsCount: 4890
      },
      {
        id: 'g4',
        title: 'AZKO Krisbow Travel Adaptor 2 Usb A & 1 Usb C 20 watt Qc',
        price: 'IDR. 259.100',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/7x1pGtN7/sg-11134201-7ra13-m4kl8x0fal6w98.webp',
        affiliateUrl: 'https://s.shopee.co.id/6AfFn7Vn2j',
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
        title: 'GIRLFASHIONSTORY ORIGINAL CELANA ORO',
        price: 'IDR. 46.500',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/RG4TkzHg/id-11134207-7rbk6-m9btxsnfuo424a.webp',
        affiliateUrl: 'https://s.shopee.co.id/8pg0z8c2Q1',
        rating: 4.7,
        reviewsCount: 5000
      },
      {
        id: 'fp2',
        title: 'Pashmina Kaos Rayon | Pashmina Oman (Turkey Shawl)',
        price: 'IDR. 32.950',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/5gbpk5hq/id-11134207-7rask-m1pt3cbdk2pi90.webpp',
        affiliateUrl: 'https://s.shopee.co.id/8zzRBYcyY9',
        rating: 4.8,
        reviewsCount: 15400
      },
      {
        id: 'fs1',
        title: 'Remaja Kekinian Outfit Bukber Wanita Hijab',
        price: 'IDR. 117.808',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/J8xbQRB/id-11134207-7ra0l-mcpujdxotu6w4e.webp',
        affiliateUrl: 'https://s.shopee.co.id/40alEUSWAK',
        rating: 4.9,
        reviewsCount: 1200
      },
      {
        id: 'fs2',
        title: 'One set 3in1 Kemeja Celana Cutbray Jeans Hijab Segi Empat Bella',
        price: 'IDR. 142.594',
        store: 'Shopee',
        imageUrl: 'https://i.ibb.co.com/4RqkxFr2/id-11134207-7ra0m-mbc6zyn9vy6u5b.webp',
        affiliateUrl: 'https://s.shopee.co.id/2VlxRvftOz',
        rating: 4.8,
        reviewsCount: 4300
      }
    ]
  }
];
