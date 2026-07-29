export default function DuoNote() {
  // Fungsi pemanggil suara untuk tombol interaktif
  const playSound = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        INI PAGE DUO-NOTE,  DISINI
      </h1>
    </div>
  );
}