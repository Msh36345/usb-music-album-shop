
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "אוסף הלהיטים הגדולים",
    description: "אוסף מקיף של כל הלהיטים הגדולים מכל האלבומים בקריירה של האמן על גבי התקן USB יוקרתי.",
    albumList: ["אלבום 1 - מסע", "אלבום 2 - בין השמיים", "אלבום 3 - אור חדש"],
    collaborations: ["שיתוף פעולה עם דנה ברגר", "שיתוף פעולה עם עומר אדם"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample1.mp3",
    price: 129.90,
    inStock: true
  },
  {
    id: 2,
    name: "מהדורה מוגבלת - תקופת הזהב",
    description: "מהדורה מוגבלת הכוללת את אלבומי תקופת הזהב בקריירה של האמן עם חומרים נדירים שלא פורסמו.",
    albumList: ["אלבום 4 - הדרך הביתה", "אלבום 5 - היום החדש", "חומרים נדירים שלא פורסמו"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample2.mp3",
    price: 149.90,
    inStock: true
  },
  {
    id: 3,
    name: "אלבום סולו מיוחד",
    description: "האלבום הסולו המצליח ביותר של האמן, בתוספת גרסאות אקוסטיות ייחודיות.",
    albumList: ["אלבום 6 - בדרך שלי", "גרסאות אקוסטיות ייחודיות"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample3.mp3",
    price: 99.90,
    inStock: true
  },
  {
    id: 4,
    name: "אוסף הופעות חיות",
    description: "אוסף נדיר של הופעות חיות מכל השנים, כולל הופעה מיוחדת באמפי קיסריה.",
    albumList: ["הופעה חיה - אמפי קיסריה 2018", "הופעה חיה - היכל התרבות 2020", "הופעות נבחרות 2015-2022"],
    collaborations: ["הופעה משותפת עם שלמה ארצי"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample4.mp3",
    price: 139.90,
    inStock: true
  },
  {
    id: 5,
    name: "אלבומי הבכורה - החבילה המלאה",
    description: "שני אלבומי הבכורה המצליחים שהציגו את האמן לקהל הרחב, כולל גרסאות חלופיות.",
    albumList: ["אלבום ראשון - התחלה", "אלבום שני - ממשיכים", "גרסאות חלופיות"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample5.mp3",
    price: 119.90,
    inStock: true
  },
  {
    id: 6,
    name: "אוסף שיתופי הפעולה",
    description: "אוסף של כל שיתופי הפעולה של האמן עם אמנים מובילים בתעשייה, בהתקן USB מעוצב.",
    albumList: ["שיתופי פעולה 2010-2015", "שיתופי פעולה 2016-2022"],
    collaborations: ["עידן רייכל", "שלומי שבת", "נועה קירל", "עומר אדם", "ועוד רבים"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample6.mp3",
    price: 159.90,
    inStock: true
  },
  {
    id: 7,
    name: "חבילת האלבומים המלאה",
    description: "כל האלבומים המלאים של האמן על גבי התקן USB אחד, עם עיצוב מיוחד ומהדורה מוגבלת.",
    albumList: ["אלבומים 1-3", "אלבומים 4-6", "אלבומים 7-9"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample7.mp3",
    price: 199.90,
    inStock: true
  },
  {
    id: 8,
    name: "אוסף השירים השקטים",
    description: "אוסף מיוחד של כל הבלדות והשירים השקטים באוסף מעוצב ואינטימי.",
    albumList: ["אוסף בלדות - חלק א", "אוסף בלדות - חלק ב", "גרסאות אקוסטיות מיוחדות"],
    image: "/placeholder.svg",
    audioSample: "https://example.com/sample8.mp3",
    price: 109.90,
    inStock: false
  }
];
