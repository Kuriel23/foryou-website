export type LojaBannerType =
  | {
      name: string;
      custo: number;
      code: string;
      preview: string;
    }
  | {
      name: string;
      custo: string;
      code: string;
      preview: string;
    };

export class LojaBanner {
  static ALL: LojaBannerType[];

  static getBannerByCode(code: string): LojaBannerType | null {
    const banner = this.ALL.find(b => b.code === code);

    if (!banner) {
      return null;
    }

    return banner;
  }
}

/**
 * SE FOR ADICIONAR UM NOVO BANNER
 * COLOCAR O CODE SEM HÍFEN "-" NO NOME
 * OBRIGADO!
 */

LojaBanner.ALL = [
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
    name: 'Shinobu (Kimetsu No Yaiba)',
    custo: 1000000,
    code: 'shinobu',
    preview: 'https://i.imgur.com/xKK3SSA.jpg',
  },
  {
    name: 'Douma 1 (Kimetsu No Yaiba)',
    custo: 'Exclusivo de Evento para Ganhador',
    code: 'douma1',
    preview: 'https://i.imgur.com/YKskJgC.jpg',
  },
  {
    name: 'Espaço com um Cachorro (PC Wallpaper)',
    custo: 'Exclusivo de Evento para Ganhador',
    code: 'space',
    preview: 'https://i.imgur.com/9HScJcx.jpg',
  },
  {
    name: 'Nakiri Ayame (YouTuber Virtual)',
    custo: 'Exclusivo de Evento para Ganhador',
    code: 'nakiriayame',
    preview: 'https://i.imgur.com/JNr41cG.jpg',
  },
  {
    name: '3º Akaza (Kimetsu No Yaiba)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'akazoficial',
    preview: 'https://i.imgur.com/gpfAOSj.jpg',
  },
  {
    name: 'Koalas (PC Wallpaper)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'koalas',
    preview: 'https://i.imgur.com/IjTvsCK.jpg',
  },
  {
    name: 'Kirito e Asuna (SAO Alicization)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'saokirito',
    preview: 'https://i.imgur.com/7lc8a1w.jpg',
  },
  {
    name: 'Hantengu (Kimetsu no Yaiba)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'hantengu',
    preview: 'https://i.imgur.com/cDSeADw.jpg',
  },
  {
    name: 'Maki-san (Jujutsu Kaisen)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'makisan',
    preview: 'https://i.imgur.com/0JergjB.png',
  },
  {
    name: 'Floresta Noturna (PC Wallpaper)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'floresta',
    preview: 'https://i.imgur.com/jOMO3Ju.jpg?1',
  },
  {
    name: 'Rengoku (Kimetsu No Yaiba)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'rengoku',
    preview: 'https://i.imgur.com/8pqm9b8.jpg',
  },
  {
    name: 'Bart Simpson (The Simpsons)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'bartsimpson',
    preview: 'https://i.imgur.com/uqlUjhG.jpg',
  },
  {
    name: 'Super Saiyajin Blue (Dragon Ball)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'supersaiyajin',
    preview: 'https://i.imgur.com/R2AzoXT.jpg',
  },
  {
    name: 'Raiden Shogun (Genshin Impact)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'raiden',
    preview: 'https://i.imgur.com/KOzVWrq.png?1',
  },
  {
    name: '"Nosso Amor" (PC Wallpaper)',
    custo: 'Exclusivo de Evento Halloween',
    code: 'nossoamor',
    preview: 'https://i.imgur.com/Eck017V.jpg',
  },
  {
    name: 'Arcane (League of Legends)',
    custo: 'Exclusivo de Evento Natal',
    code: 'arcane',
    preview: 'https://i.imgur.com/QCsZoyJ.png?1',
  },
];
