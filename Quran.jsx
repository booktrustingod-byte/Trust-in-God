import { Link } from "react-router-dom";

const sampleAyat = [
  { id: 1, text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
  { id: 2, text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" },
  { id: 3, text: "الرَّحْمَٰنِ الرَّحِيمِ" },
];

export default function Quran() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">سورة الفاتحة</h2>
      <ul className="space-y-2">
        {sampleAyat.map((ayah) => (
          <li
            key={ayah.id}
            className="p-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Link to={`/tafsir/${ayah.id}`}>{ayah.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}