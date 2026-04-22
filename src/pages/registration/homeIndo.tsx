import { useState } from "react";
import "./registration.css";
import termsData from "./terms.json";

type TermsKey = keyof typeof termsData;

function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState<{
    title: string;
    list: string[];
    paragraphs: string[];
  } | null>(null);

  const handleOpenModal = (link: string, termsKey: TermsKey) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(termsData[termsKey]); // Set isi terms sesuai pilihan
    setTermsAccepted(false); // Reset state persetujuan
    setShowModal(true); // Tampilkan modal
  };

  const handleViewTerms = () => {
    window.open(
      "https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing",
      "_blank"
    );
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Please agree to the Terms & Conditions to proceed.");
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-elevated p-8 md:p-12 text-center animate-fade-in-up">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
                REGISTRASTION FORM FOR INDONESIAN CITIZEN
              </h1>
              <h3 className="text-lg md:text-xl text-muted-foreground">
                Choose Your Competition Category for WASISC 2026 Registration
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <a
                href="#!"
                role="button"
                className="group flex items-center justify-center p-6 bg-secondary text-secondary-foreground font-bold rounded-2xl text-lg transition-all duration-500 ease-out hover:scale-105 active:scale-95 shadow-md hover:shadow-xl hover:bg-[#e2e8f0] border border-border/50"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal("/indo-online", "indonesiaOnline");
                }}
              >
                Online Competition
                <i className="fas fa-globe-asia ml-2"></i>
              </a>
              <a
                href="#!"
                role="button"
                className="group flex items-center justify-center p-6 bg-gradient-to-r from-primary to-[#2a7a5f] text-primary-foreground font-bold rounded-2xl text-lg transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 active:scale-95 shadow-[0_8px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.5)] border border-primary/20"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal("/indo-offline", "indonesiaOffline");
                }}
              >
                Offline Competition
                <i className="fas fa-building ml-2"></i>
              </a>
              <a
                href="/homeregist"
                className="group flex items-center justify-center p-4 bg-gradient-to-r from-destructive to-[#e11d48] text-destructive-foreground font-bold rounded-xl text-sm transition-all duration-500 ease-out hover:-translate-y-1 active:scale-95 shadow-lg shadow-destructive/30 hover:shadow-destructive/50 hover:shadow-xl md:col-span-2 mt-4 max-w-sm mx-auto w-full"
              >
                <i className="fas fa-arrow-left mr-2 transition-transform duration-300 group-hover:-translate-x-1"></i>
                Back to Registration Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && termsContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-elevated w-full max-w-lg animate-scale-in">
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-foreground">
                Terms & Conditions
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="p-6 text-left max-h-[60vh] overflow-y-auto">
              <h5 className="font-semibold mb-4">{termsContent.title}</h5>
              <ul className="list-disc list-inside space-y-2">
                {termsContent.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {termsContent.paragraphs.map((para, index) => (
                <p key={index} className="mt-4">
                  {para}
                </p>
              ))}

              <p className="text-muted-foreground mt-4">
                Please review the terms and conditions carefully before proceeding.
              </p>
            </div>
            <div className="p-6 bg-muted/50 rounded-b-2xl">
              <div className="flex items-center mb-4">
                <div className="relative flex items-center h-5 w-5">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </div>
                <label htmlFor="terms" className="ml-3 text-sm text-foreground">
                  I Have Read and Accept the{" "}
                  <a
                    href="#!"
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleViewTerms();
                    }}
                    className="font-semibold text-primary underline"
                  >
                    Terms & Conditions
                  </a>
                  .
                </label>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  className="px-6 py-2 rounded-lg text-foreground bg-transparent border border-border hover:bg-muted transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 rounded-lg text-primary-foreground bg-primary hover:bg-opacity-90 transition-colors disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                  onClick={handleAccept}
                  disabled={!termsAccepted}
                >
                  Accept & Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeIndo;
