// ============================================================
// stores.js — 全店舗データ（このファイル1本で完結）
// ------------------------------------------------------------
// 新しい店舗を追加するときは、下の stores 配列に 1 ブロック足すだけ。
// Eleventy が /{region}/{slug}/index.html を自動生成します。
//
// ・省略した項目は defaults の値が使われます
// ・instagram_url が空の店舗は defaults.instagram_official にフォールバック
// ============================================================

const domain = "https://burger.halal-food-wagyu.com";

const defaults = {
  instagram_official: "https://www.instagram.com/5w_tokyo_official/",
  google_rating: "",
  google_count: "",
  google_rating_img: "assets/google_rating.jpg",
  tripadvisor_img: "assets/tripadvisor.jpg",
  // モーニング（朝食・ブランチ）セクション。morning: true の店舗だけ表示される
  morning: false,
  morning_hours: "",
  morning_note: ""
};

const stores = [
  // ===== Asakusa Shotengai (tokyo/asakusa-shotengai) =====
  {
    slug: "asakusa-shotengai",
    region: "tokyo",
    floor: "1F",
    name_short: "Asakusa Shotengai",
    name_full_en: "Wagyu Steak Hamburger (Halal Vegan Gluten Free) Asakusa Restaurant",
    name_cn: "浅草 和牛 餐厅",
    area_label: "ASAKUSA · TOKYO",
    city: "Asakusa",
    hero_headline_place: "Tokyo's Asakusa",
    station_en: "Asakusa Station",
    station_note: "Asakusa, Taito-ku",
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",
    tel_display: "03-3844-8764",
    tel_raw: "81338448764",
    address_en: "26-4 Asakusa 2-chome, Taito-ku, Tokyo 111-0032, Japan",
    address_jp: "〒111-0032 東京都台東区浅草２丁目２６−４",
    instagram_url: "https://www.instagram.com/asakusa_5w_tokyo?igsh=MWtucGx3eHZ0b2h0aQ==",
    maps_link: "https://maps.app.goo.gl/fXbRutAYbfwRURvb8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3041.1465698468437!2d139.7915157!3d35.7166131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f7f6725d0bf%3A0x39af2212744db3fa!2zV2FneXUgU3RlYWsgSGFtYnVyZ2VyIChIYWxhbCBWZWdhbiBHbHV0ZW4gRnJlZSkgQXNha3VzYSBSZXN0YXVyYW50IOa1heiNiSDlkozniZsg6aSQ5Y6F!5e1!3m2!1sja!2sjp!4v1778839909309!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/wagyu-burger-steak-teriyaki-5w-tokyo/reserve",
    google_rating: "4.8",
    google_count: "3,461",
    google_rating_img: "assets/asakusa_review.jpg",
    hero_photos: [
      "assets/hero_asakusa-shotengai_1.jpg",
      "assets/hero_asakusa-shotengai_2.jpg",
      "assets/hero_asakusa-shotengai_3.jpg"
    ]
  },

  // ===== Kyoto Ekimae (kyoto/kyoto-station) =====
  {
    slug: "kyoto-station",
    region: "kyoto",
    floor: "1F",
    name_short: "Kyoto Ekimae",
    name_full_en: "Wagyu Steak Hamburger (Halal Vegan Gluten Free) Kyoto Station Restaurant",
    name_cn: "京都 和牛 牛排",
    area_label: "KYOTO STATION · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Station",
    station_en: "JR Kyoto Station",
    station_note: "Higashikujo, Minami-ku",
    hours: "11:00 — 25:00",
    hours_note: "Open Daily · until 1:00 AM",
    hours_special: "",
    // ===== モーニング（朝食・ブランチ）=====
    morning: true,
    morning_hours: "7:00 — 11:30",
    morning_note: "L.O. 11:00",
    tel_display: "080-2983-0026",
    tel_raw: "818029830026",
    address_en: "3-31 Higashikujo Kitakarasuma-cho, Minami-ku, Kyoto-shi, Kyoto 601-8017, Japan",
    address_jp: "〒601-8017 京都府京都市南区東九条北烏丸町３−３１",
    instagram_url: "https://www.instagram.com/kyoto_beeftei?igsh=MWh0cXF3ajY3ZGZmNw==",
    maps_link: "https://maps.app.goo.gl/FWXEbcpzn2UBsP5R9",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d191.80962803300258!2d135.758567!3d34.9813969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010914c6123c99%3A0xce2cb01951e322a2!2zV2FneXUgU3RlYWsgSGFtYnVyZ2VyIChIYWxhbCBWZWdhbiBHbHV0ZW4gRnJlZSkgS3lvdG8gU3RhdGlvbiBSZXN0YXVyYW50IOS6rOmDvSDlkozniZsg54mb5o6S!5e1!3m2!1sja!2sjp!4v1778840662153!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/5wkyotostation/reserve",
    google_rating: "4.6",
    google_count: "1,563",
    google_rating_img: "assets/kyotostation_review.jpg",
    hero_photos: [
      "assets/hero_kyoto-station_1.jpg",
      "assets/hero_kyoto-station_2.jpg"
    ]
  },

  // ===== Kyoto Kawaramachi (kyoto/kyoto-kawaramachi) =====
  {
    slug: "kyoto-kawaramachi",
    region: "kyoto",
    floor: "2F",
    name_short: "Kyoto Kawaramachi",
    name_full_en: "Kyoto Restaurant Wagyu Steak Hamburger (Halal Vegan Gluten Free) Kawaramachi",
    name_cn: "京都 和牛 牛排",
    area_label: "KAWARAMACHI · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Kawaramachi",
    station_en: "Kyoto Kawaramachi",
    station_note: "Matsugaecho, Nakagyo-ku",
    hours: "11:00 — 25:00",
    hours_note: "Open Daily",
    hours_special: "",
    tel_display: "090-7262-6058",
    tel_raw: "819072626058",
    address_en: "2F, 456 Matsugaecho, Nakagyo-ku, Kyoto-shi, Kyoto 604-8034, Japan",
    address_jp: "〒604-8034 京都府京都市中京区松ケ枝町４５６ ２F",
    instagram_url: "https://www.instagram.com/kyoto_beeftei?igsh=MWh0cXF3ajY3ZGZmNw==",
    maps_link: "https://maps.app.goo.gl/nANKvRW8xDvM6DC2A",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.972209755835!2d135.7679637!3d35.007585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109eb0b6e9e0d%3A0x396abcf92231069c!2zS3lvdG8gUmVzdGF1cmFudCBXYWd5dSBTdGVhayBIYW1idXJnZXIgKEhhbGFsIFZlZ2FuIEdsdXRlbiBGcmVlKSBLYXdhcmFtYWNoaSDkuqzpg70g5ZKM54mbIOeJm-aOkg!5e1!3m2!1sja!2sjp!4v1778840775753!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/5wkawaramachi/reserve",
    google_rating: "4.7",
    google_count: "2,206",
    google_rating_img: "assets/kawaramachi_review.jpg",
    hero_photos: [
      "assets/hero_kyoto-kawaramachi_1.jpg",
      "assets/hero_kyoto-kawaramachi_2.jpg"
    ]
  },

  // ===== Ohatsu Tenjin (osaka/ohatsu-tenjin) =====
  {
    slug: "ohatsu-tenjin",
    region: "osaka",
    floor: "1F",
    name_short: "Ohatsu Tenjin",
    name_full_en: "Wagyu Steak & Hamburger (Halal Gluten Free) Osaka Station Restaurant",
    name_cn: "",
    area_label: "OHATSU TENJIN · OSAKA",
    city: "Osaka",
    hero_headline_place: "Osaka Ohatsu Tenjin",
    station_en: "Osaka Station",
    station_note: "Sonezaki, Kita-ku",
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",
    // ===== モーニング（朝食・ブランチ）=====
    morning: true,
    morning_hours: "7:00 — 11:30",
    morning_note: "L.O. 11:00",
    tel_display: "090-2411-0668",
    tel_raw: "819024110668",
    address_en: "1F, MK Sonezaki Building, 2-14-5 Sonezaki, Kita-ku, Osaka-shi, Osaka 530-0057, Japan",
    address_jp: "〒530-0057 大阪府大阪市北区曾根崎２丁目１４−５ エムケー曽根崎ビル 1F",
    instagram_url: "",
    maps_link: "https://maps.app.goo.gl/ycVUMzupbrTkH5K49",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d208.43404903499732!2d135.50131916090282!3d34.70092857295818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e737d3d79fad%3A0x34aa836911c15bd3!2sWagyu%20Steak%20%26%20Hamburger%20(Halal%20Gluten%20Free)%20Osaka%20Station%20Restaurant!5e1!3m2!1sja!2sjp!4v1778840872907!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ohatsutennjin/reserve",
    google_rating: "4.8",
    google_count: "1,046",
    google_rating_img: "assets/ohatsutenjin_review.jpg",
    hero_photos: [
      "assets/hero_ohatsu-tenjin_1.jpg",
      "assets/hero_ohatsu-tenjin_2.jpg",
      "assets/hero_ohatsu-tenjin_3.jpg"
    ]
  },

  // ===== Shin-Okubo (tokyo/shin-okubo) =====
  {
    slug: "shin-okubo",
    region: "tokyo",
    floor: "1F",
    name_short: "Shin-Okubo",
    name_full_en: "Wagyu Steak & Hamburger Pizza (Halal Vegan Gluten Free) Kabuki Shin Okubo Restaurant",
    name_cn: "新宿 和牛 拉面 餐厅",
    area_label: "SHIN-OKUBO · TOKYO",
    city: "Tokyo",
    hero_headline_place: "Tokyo Shin-Okubo",
    station_en: "Shin-Okubo",
    station_note: "Hyakunincho, Shinjuku-ku",
    hours: "11:00 — 25:00",
    hours_note: "Open Daily · until 1:00 AM",
    hours_special: "",
    tel_display: "090-2265-7102",
    tel_raw: "819022657102",
    address_en: "1F, 1-28 Hyakunincho 1-chome, Shinjuku-ku, Tokyo 169-0073, Japan",
    address_jp: "〒169-0073 東京都新宿区百人町１丁目１−２８ 1F",
    instagram_url: "https://www.instagram.com/shinjuku_5w_tokyo?igsh=MW01OGZ5YXhvaWNsZw==",
    maps_link: "https://maps.app.goo.gl/ENuVfdJZuARJvQjn7",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d760.4621575436136!2d139.7020532!3d35.698213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d0a84c996ff%3A0xa473959440d7db81!2zV2FneXUgU3RlYWsgJiBIYW1idXJnZXIgUGl6emEgKEhhbGFsIFZlZ2FuIEdsdXRlbiBGcmVlKSBLYWJ1a2kgU2hpbiBPa3VibyBSZXN0YXVyYW50IOaWsOWuvyDlkozniZsg5ouJ6Z2iIOmkkOWOhQ!5e1!3m2!1sja!2sjp!4v1778840962512!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-shinokubo-5w-tokyo/reserve",
    google_rating: "4.9",
    google_count: "1,112",
    google_rating_img: "assets/shinokubo_review.jpg",
    hero_photos: [
      "assets/hero_shin-okubo_1.jpg",
      "assets/hero_shin-okubo_2.jpg"
    ]
  },

  // ===== Kiyomizuzaka (kyoto/kiyomizuzaka) =====
  {
    slug: "kiyomizuzaka",
    region: "kyoto",
    floor: "1F",
    name_short: "Kiyomizuzaka",
    name_full_en: "Wagyu & Vegan Hamburger (Halal Gluten Free) Kiyomizu Temple Restaurant",
    name_cn: "和牛汉堡",
    area_label: "KIYOMIZU TEMPLE · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Kiyomizu",
    station_en: "Kiyomizu Temple",
    station_note: "Kiyomizu, Higashiyama-ku",
    hours: "9:00 — 21:00",
    hours_note: "Open Daily",
    hours_special: "Fri 9:00 — 21:00",
    tel_display: "070-3524-6548",
    tel_raw: "817035246548",
    address_en: "1F, 145-1 Kiyomizu 4-chome, Higashiyama-ku, Kyoto-shi, Kyoto 605-0862, Japan",
    address_jp: "〒605-0862 京都府京都市東山区清水４丁目１４５−１ １F",
    instagram_url: "https://www.instagram.com/kiyomizutemple_wagyu?igsh=dDNzZHFlYzZlZ3Zy",
    maps_link: "https://maps.app.goo.gl/wjXaMLqBmmHEDqQH8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d191.7720639052673!2d135.7774029!3d34.9974298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001096c31b78bf7%3A0xa3d8830499cb8d38!2sWagyu%20%26%20Vegan%20Hamburger%20(Halal%20Gluten%20Free)%20%E5%92%8C%E7%89%9B%E6%B1%89%E5%A0%A1%20Kiyomizu%20Temple%20Restaurant!5e1!3m2!1sja!2sjp!4v1778841131814!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-kiyomizuzaka/reserve",
    google_rating: "4.5",
    google_count: "638",
    google_rating_img: "assets/kiyomizu_review.jpg",
    hero_photos: [
      "assets/hero_kiyomizuzaka_1.jpg",
      "assets/hero_kiyomizuzaka_2.jpg"
    ]
  },

  // ===== Pontocho (kyoto/pontocho) =====
  {
    slug: "pontocho",
    region: "kyoto",
    floor: "2F",
    name_short: "Pontocho",
    name_full_en: "Wagyu Halal Hamburger & Steak Ponto Restaurant",
    name_cn: "京都 先斗町 和牛 餐厅",
    area_label: "PONTOCHO · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Pontocho",
    station_en: "Pontocho",
    station_note: "Shimokorikicho, Nakagyo-ku",
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",
    tel_display: "080-6295-0185",
    tel_raw: "818062950185",
    address_en: "2F, 191-9 Shimokorikicho, Nakagyo-ku, Kyoto-shi, Kyoto 604-8016, Japan",
    address_jp: "〒604-8016 京都府京都市中京区下樵木町１９１−９ ２F",
    instagram_url: "",
    maps_link: "https://maps.app.goo.gl/AUdW6VdgHGQYwJAf7",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.002921492206!2d135.7709998!3d35.00676610000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109f8ec8e546d%3A0xb4bace007b0c3c15!2zV2FneXUgSGFsYWwgSGFtYnVyZ2VyICYgU3RlYWsgUG9udG8gUmVzdGF1cmFudCDkuqzpg70g5YWI5paX55S6IOWSjOeJmyDppJDljoU!5e1!3m2!1sja!2sjp!4v1778841232824!5m2!1sja!2sjp",
    tablecheck_url: "",
    google_rating: "4.8",
    google_count: "1,080",
    google_rating_img: "assets/pontocho_review.jpg",
    hero_photos: [
      "assets/hero_pontocho_1.jpg",
      "assets/hero_pontocho_2.jpg"
    ]
  },

  // ===== Arashiyama (kyoto/arashiyama) =====
  {
    slug: "arashiyama",
    region: "kyoto",
    floor: "2F",
    name_short: "Arashiyama",
    name_full_en: "Wagyu Steak & Hamburger (Halal Vegan Gluten free) Arashiyama",
    name_cn: "和牛牛排 汉堡 岚山",
    area_label: "ARASHIYAMA · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Arashiyama",
    station_en: "Arashiyama",
    station_note: "Saga, Ukyo-ku",
    hours: "11:00 — 19:00",
    hours_note: "Open Daily",
    hours_special: "",
    tel_display: "090-1180-7623",
    tel_raw: "819011807623",
    address_en: "2F, Arashiyama Matsumoto Building, 37-3 Saga Tenryuji Tsukurimichi-cho, Ukyo-ku, Kyoto-shi, Kyoto 616-8384, Japan",
    address_jp: "〒616-8384 京都府京都市右京区嵯峨天龍寺造路町３７−３ 嵐山まつもとビル 2階",
    instagram_url: "",
    maps_link: "https://maps.app.goo.gl/a631nd44vdsBEFZu6",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.65173791376475!2d135.6776938!3d35.0143079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001a99212dffc35%3A0xf645c30a9a0b98e8!2zV2FneXUgU3RlYWsgJiBIYW1idXJnZXIgKEhhbGFsIFZlZ2FuIEdsdXRlbiBmcmVlKSBBcmFzaGl5YW1hIOWSjOeJm-eJm-aOkiDmsYnloKEg5bKa5bGx!5e1!3m2!1sja!2sjp!4v1782899640237!5m2!1sja!2sjp",
    tablecheck_url: "https://tablecheck.com/halal-wagyu-kyoto-arashiyama-annex/reserve",
    google_rating: "",
    google_count: "",
    google_rating_img: "assets/google_rating.jpg",
    hero_photos: []
  },

  // ===== Nishiki Market (kyoto/nishiki-market) =====
  {
    slug: "nishiki-market",
    region: "kyoto",
    floor: "3F",
    name_short: "Nishiki Market",
    name_full_en: "Wagyu Hamburger Halal Kobe Beef Vegan Food Nishiki Market Restaurant",
    name_cn: "锦市场和牛餐厅",
    area_label: "NISHIKI MARKET · KYOTO",
    city: "Kyoto",
    hero_headline_place: "Kyoto Nishiki Market",
    station_en: "Nishiki Market",
    station_note: "Umeyacho, Nakagyo-ku",
    hours: "11:00 — 23:00",
    hours_note: "Open Daily",
    hours_special: "",
    tel_display: "070-4430-2059",
    tel_raw: "817044302059",
    address_en: "3F, 501 Umeyacho, Nakagyo-ku, Kyoto-shi, Kyoto 604-8057, Japan",
    address_jp: "〒604-8057 京都府京都市中京区麩屋町通錦小路上る梅屋町５０１ 3F",
    instagram_url: "",
    maps_link: "",
    maps_embed: "",
    tablecheck_url: "",
    google_rating: "",
    google_count: "",
    google_rating_img: "assets/google_rating.jpg",
    hero_photos: []
  },

  // ===== Ginza (tokyo/higashi-ginza) =====
  {
    slug: "higashi-ginza",
    region: "tokyo",
    floor: "1F",
    name_short: "Ginza",
    name_full_en: "Japanese Food Wagyu Beef (Halal) Ramen Hamburger Ginza Restaurant 5W-Tokyo",
    name_cn: "东京和牛拉麺",
    area_label: "GINZA · TOKYO",
    city: "Ginza",
    hero_headline_place: "Tokyo's Ginza",
    station_en: "Higashi-Ginza Station",
    station_note: "Ginza, Chuo-ku",
    hours: "8:00 — 25:00",
    hours_note: "Open Daily · until 1:00 AM",
    hours_special: "",
    // ===== モーニング（朝食・ブランチ）=====
    morning: true,
    morning_hours: "7:00 — 11:30",
    morning_note: "L.O. 11:00",
    tel_display: "03-6278-7139",
    tel_raw: "81362787139",
    address_en: "12-16 Ginza 3-chome, Chuo-ku, Tokyo 104-0061, Japan",
    address_jp: "〒104-0061 東京都中央区銀座３丁目１２−１６",
    instagram_url: "",
    maps_link: "https://maps.app.goo.gl/DyQunnGLgQuuQmcY8",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7478.453910310958!2d139.768631!3d35.671435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8a1b1f7ca7%3A0x8d81bba28006abf!2zSmFwYW5lc2UgRm9vZCBXYWd5dSBCZWVmIChIYWxhbCkgUmFtZW4gSGFtYnVyZ2VyIEdpbnphIFJlc3RhdXJhbnQgNVctVG9reW8gKOS4nOS6rOWSjOeJm-aLiem6uik!5e1!3m2!1sja!2sjp!4v1785475907515!5m2!1sja!2sjp",
    tablecheck_url: "https://www.tablecheck.com/shops/halal-wagyu-ginza-5w-tokyo/reserve",
    google_rating: "",
    google_count: "",
    google_rating_img: "assets/google_rating.jpg",
    hero_photos: []
  },
];

// defaults をマージ（各店舗が値を持っていればそちらを優先）
const merged = stores.map((store) => {
  const m = { ...defaults, ...store };
  if (!m.instagram_url) {
    m.instagram_url = m.instagram_official;
  }
  return m;
});

export default {
  domain,
  defaults,
  stores: merged,
};
