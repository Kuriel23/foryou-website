export type ShopType = {
  name: string;
  custo: number;
  code: string;
  preview: string;
};

export class Shop {
  static Banners: ShopType[];

  static Vips: ShopType[];

  static getBannerByCode(code: string): ShopType | null {
    const banner = this.Banners.find(b => b.code === code);

    if (!banner) {
      return null;
    }

    return banner;
  }
}

Shop.Banners = [
  {
    name: 'Cidade de Noite (Background Padrão)',
    custo: 0,
    code: 'cidadenoite',
    preview: 'https://i.imgur.com/UdskPJa.jpg',
  },
  {
    name: '2º Kizuki Douma (Kimetsu No Yaiba)',
    custo: 100000,
    code: 'akaza',
    preview: 'https://i.imgur.com/Gd2qBUr.jpg',
  },
  {
    name: 'Cyber Girl (Sem Anime Encontrado)',
    custo: 100000,
    code: 'cybergirl',
    preview: 'https://i.imgur.com/Xb3WsGv.jpg',
  },
  {
    name: 'Garota De Máscara (Sem Anime Encontrado)',
    custo: 100000,
    code: 'garotamascara',
    preview: 'https://i.imgur.com/juIxpko.jpg',
  },
  {
    name: 'Goku Black (Dragon Ball Super)',
    custo: 100000,
    code: 'gokublack',
    preview: 'https://i.imgur.com/0pmlQd5.jpg',
  },
  {
    name: 'Bell Craner (Dungeon ni Deai)',
    custo: 500000,
    code: 'bellcraner',
    preview: 'https://i.imgur.com/1m3017k.jpg',
  },
  {
    name: "Kanna Kamui (Miss Kobayashi's Dragon Maid)",
    custo: 500000,
    code: 'kanna',
    preview: 'https://i.imgur.com/dnBRbEb.png',
  },
  {
    name: 'Satoru Gojo (Jujustu Kaisen)',
    custo: 500000,
    code: 'satorugojo',
    preview: 'https://i.imgur.com/Tsdk7OA.jpg',
  },
  {
    name: 'Tanjiro e Nezuko (Kimetsu No Yaiba)',
    custo: 500000,
    code: 'tanjironezuko',
    preview: 'https://i.imgur.com/56eKMO9.jpg',
  },
  {
    name: 'Megumin (Kono Subarashii Sekai ni Shukufuku wo!)',
    custo: 1000000,
    code: 'megumin',
    preview: 'https://i.imgur.com/rC4MDkJ.jpg',
  },
  {
    name: '"Nosso Amor" (PC Wallpaper)',
    custo: 30000,
    code: 'nossoamor',
    preview: 'https://i.imgur.com/Eck017V.jpg',
  },
  {
    name: 'Arcane (League of Legends)',
    custo: 100000,
    code: 'arcane',
    preview: 'https://i.imgur.com/QCsZoyJ.png?1',
  },
  {
    name: 'Shinobu (Kimetsu No Yaiba)',
    custo: 1000000,
    code: 'shinobu',
    preview: 'https://i.imgur.com/xKK3SSA.jpg',
  },
  {
    name: 'Koalas (PC Wallpaper)',
    custo: 50000,
    code: 'koalas',
    preview: 'https://i.imgur.com/IjTvsCK.jpg',
  },
  {
    name: 'Maki-san (Jujutsu Kaisen)',
    custo: 700000,
    code: 'makisan',
    preview: 'https://i.imgur.com/0JergjB.png',
  },
  {
    name: 'Floresta Noturna (PC Wallpaper)',
    custo: 300000,
    code: 'floresta',
    preview: 'https://i.imgur.com/jOMO3Ju.jpg?1',
  },
  {
    name: 'Douma 1 (Kimetsu No Yaiba)',
    custo: 500000,
    code: 'douma1',
    preview: 'https://i.imgur.com/YKskJgC.jpg',
  },
  {
    name: 'Espaço com um Cachorro (PC Wallpaper)',
    custo: 300000,
    code: 'space',
    preview: 'https://i.imgur.com/9HScJcx.jpg',
  },
  {
    name: 'Nakiri Ayame (YouTuber Virtual)',
    custo: 100000,
    code: 'nakiriayame',
    preview: 'https://i.imgur.com/JNr41cG.jpg',
  },
  {
    name: '3º Akaza (Kimetsu No Yaiba)',
    custo: 600000,
    code: 'akazoficial',
    preview: 'https://i.imgur.com/gpfAOSj.jpg',
  },
  {
    name: 'Kirito e Asuna (SAO Alicization)',
    custo: 600000,
    code: 'saokirito',
    preview: 'https://i.imgur.com/7lc8a1w.jpg',
  },
  {
    name: 'Hantengu (Kimetsu no Yaiba)',
    custo: 500000,
    code: 'hantengu',
    preview: 'https://i.imgur.com/cDSeADw.jpg',
  },
  {
    name: 'Rengoku (Kimetsu No Yaiba)',
    custo: 450000,
    code: 'rengoku',
    preview: 'https://i.imgur.com/8pqm9b8.jpg',
  },
  {
    name: 'Bart Simpson (The Simpsons)',
    custo: 300000,
    code: 'bartsimpson',
    preview: 'https://i.imgur.com/uqlUjhG.jpg',
  },
  {
    name: 'Super Saiyajin Blue (Dragon Ball)',
    custo: 500000,
    code: 'supersaiyajin',
    preview: 'https://i.imgur.com/R2AzoXT.jpg',
  },
  {
    name: 'Raiden Shogun (Genshin Impact)',
    custo: 400000,
    code: 'raiden',
    preview: 'https://i.imgur.com/KOzVWrq.png?1',
  },
];

Shop.Vips = [
  {
    name: 'Vip Cloud',
    custo: 1000000,
    code: 'cloud',
    preview: 'https://i.imgur.com/1m3017k.jpg',
  },
  {
    name: 'Vip Moon',
    custo: 10000000,
    code: 'moon',
    preview: 'https://i.imgur.com/1m3017k.jpg',
  },
  {
    name: 'Vip Sun',
    custo: 50000000,
    code: 'sun',
    preview: 'https://i.imgur.com/1m3017k.jpg',
  },
];
