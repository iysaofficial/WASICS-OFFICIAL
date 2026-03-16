import { useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import html2canvas from "html2canvas";

const ThankYouPage = () => {
  const [searchParams] = useSearchParams();
  const printRef = useRef<HTMLDivElement>(null);

  const data = {
    "Nama Lengkap": searchParams.get("namaLengkap"),
    "Judul Projek": searchParams.get("projectTitle"),
    "Kategori": searchParams.get("category"),
    "Nama Sekolah": searchParams.get("namasekolah"),
  };

  const handleDownloadImage = async () => {
    const element = printRef.current;
    if (element) {
      const canvas = await html2canvas(element, {
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: true,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });
      const data = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");

      link.href = data;
      link.download = "bukti-pendaftaran.jpeg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="rounded-2xl shadow-elevated overflow-hidden">
          <div
            ref={printRef}
            className="bg-white text-card-foreground p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary pb-4 border-b-4 border-secondary mb-8 inline-block">
              Terima Kasih!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Pendaftaran Anda telah berhasil diserahkan. Berikut adalah rincian
              data yang Anda kirimkan. Silakan ambil tangkapan layar halaman ini
              sebagai bukti pendaftaran Anda.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-4 border border-border">Keterangan</th>
                    <th className="p-4 border border-border">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                      <td className="p-4 border border-border font-medium">
                        {key}
                      </td>
                      <td className="p-4 border border-border">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center flex gap-4 justify-center">
          <button
            onClick={handleDownloadImage}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg transition-colors shadow-md"
          >
            Unduh Bukti Pendaftaran
          </button>
          <Link
            to="/homeregist"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-lg transition-colors shadow-md"
          >
            Kembali ke Pendaftaran
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
