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
  const [hasViewedTerms, setHasViewedTerms] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenModal = (link: string, termsKey: TermsKey) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(termsData[termsKey]); // Set isi terms sesuai pilihan
    setTermsAccepted(false); // Reset state persetujuan
    setHasViewedTerms(false); // Reset state sudah melihat
    setShowModal(true); // Tampilkan modal
  };

  const handleViewTerms = () => {
    window.open(
      "https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing",
      "_blank"
    );
    setHasViewedTerms(true);
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
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                REGISTRASTION FORM
              </h1>
              <h3 className="text-lg md:text-xl text-muted-foreground">
                Choose Your Competition Category for WASISC 2026 Registration
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <a
                href="#!"
                role="button"
                className="group flex items-center justify-center p-6 bg-secondary text-secondary-foreground font-semibold rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-soft"
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
                className="group flex items-center justify-center p-6 bg-primary text-primary-foreground font-semibold rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-soft"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal("/indo-offline", "indonesiaOffline");
                }}
              >
                Offline Competition
                <i className="fas fa-building ml-2"></i>
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
                <div
                  className="relative"
                  onMouseEnter={() => !hasViewedTerms && setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() =>
                    !hasViewedTerms && setShowTooltip(!showTooltip)
                  }
                >
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    checked={termsAccepted}
                    disabled={!hasViewedTerms}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  {showTooltip && (
                    <div className="absolute bottom-full mb-2 w-max bg-black text-white text-xs rounded py-1 px-2">
                      Please review the Terms & Conditions link first.
                    </div>
                  )}
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
                    className="font-semibold text-primary hover:underline"
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
