import { useParams } from "react-router-dom";

export default function Tafsir() {
  const { ayahId } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">تفسير الآية {ayahId}</h2>
      <p>
        (هنا غادي يتحط التفسير من ملف JSON الكبير ديال التفسير اللي نزيدوه من
        بعد)
      </p>
    </div>
  );
}