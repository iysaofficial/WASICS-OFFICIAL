import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function InternationalOffline() {
  const [selectedMaxNamaLengkap, setselectedMaxNamaLengkap] = useState("");
  const maxNameChars = 180;
  const [selectedMaxProject, setselectedMaxProject] = useState("");
  const [selectedNamaSekolah, setselectedNamaSekolah] = useState("");
  const maxSchoolChars = 500;
  const maxProjectChars = 160;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();

  const handleInputNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setselectedMaxNamaLengkap(value);
    }
  };

  const handleInputNameSchoolChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxSchoolChars) {
      setselectedNamaSekolah(value);
    }
  };

  const handleInputProjectChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxProjectChars) {
      setselectedMaxProject(value);
    }
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);

    switch (value) {
      case "Jakarta International Science Fair - Online Competition":
        setCategoryPrice("RP 1.150.000");
        break;
      default:
        setCategoryPrice("");
        break;
    }
  };

  useEffect(() => {
    const termsAccepted = sessionStorage.getItem("termsAccepted");
    if (!termsAccepted) {
      alert("You must agree to the Terms & Conditions first.");
      navigate("/homeinter");
    }
  }, [navigate]);

  const scriptURL = "";

  useEffect(() => {
    const form = document.forms["regist-form"];

    if (form) {
      const handleSubmit = (e: Event) => {
        e.preventDefault();
        setShowModal(true);
        setCanClick(false);
        setCountdown(5);

        let count = 5;
        const interval = setInterval(() => {
          count -= 1;
          setCountdown(count);

          if (count <= 0) {
            clearInterval(interval);
            setCanClick(true);
          }
        }, 1000);
      };

      form.addEventListener("submit", handleSubmit);
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  const handleConfirmSubmit = async () => {
    setShowModal(false);
    const form = document.forms["regist-form"];

    if (!form) return;

    setIsLoading(true);
    setStatusMessage("Submitting data...");
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setStatusMessage("Data submitted successfully!");
        form.reset();
        setTimeout(() => {
          navigate(
            `/thankyouinter?namaLengkap=${encodeURIComponent(
              selectedMaxNamaLengkap
            )}&projectTitle=${encodeURIComponent(
              selectedMaxProject
            )}&category=${encodeURIComponent(
              selectedCategory
            )}&namasekolah=${encodeURIComponent(selectedNamaSekolah)}`
          );
        }, 1500);
      } else {
        setStatusMessage("An error occurred while sending data.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setStatusMessage("An error occurred while sending data.");
    } finally {
       setTimeout(() => setIsLoading(false), 2000);
    }
  };

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl shadow-elevated animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              REGISTRATION FORM
            </h1>
            <div className="w-24 h-1.5 bg-secondary rounded-full mb-8"></div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              HELLO WASISC 2026 INTERNATIONAL CITIZEN, Please consider the following
              information before filling out the registration form:
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                1.&nbsp; &nbsp; Please fill in the required data correctly and
                ensure there are no writing errors. Also make sure that the data
                submitted is final and has not changed.
              </p>
              <p>
                2.&nbsp; &nbsp; After making sure the data is correct, you can
                click the <span className="font-semibold text-primary">"SUBMIT FORM"</span>{" "}
                button once. If the data has been successfully submitted, you will
                be moved to another page.
              </p>
              <p>
                3.&nbsp; &nbsp; There will be an information email that the
                registration has been received sent to the team leader's
                email address, and the file will be validated by our team. Please
                be patient and wait for a maximum of 3 days after the registration
                time, the Letter of Acceptance (LOA) will be sent to the team
                leader's email address.
              </p>
            </div>

            {showModal && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-scale-in">
                <div className="bg-card p-8 rounded-2xl shadow-xl max-w-lg w-full border border-border">
                  <h2 className="text-2xl font-bold text-destructive mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    WARNING!
                  </h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Submitted data cannot be changed. The committee will use the
                      latest submitted data for certificate printing.
                    </p>
                    <p className="font-bold text-foreground">
                      MAKE SURE ALL DATA IS CORRECT!
                    </p>
                    <p className="font-bold text-destructive">
                      DO NOT RE-REGISTER WITH THE SAME DATA MULTIPLE TIMES!
                    </p>
                  </div>
                  <div className="flex justify-end gap-4 mt-8">
                    <button
                      onClick={() => setShowModal(false)}
                      className="bg-muted text-muted-foreground hover:bg-border px-6 py-2 rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleConfirmSubmit}
                      disabled={!canClick || isLoading}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading
                        ? "Submitting..."
                        : canClick
                        ? "Continue"
                        : `Please wait... ${countdown}`}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form name="regist-form" className="mt-12">
              <h1 className="text-2xl font-bold text-primary border-b-2 border-border pb-2 mb-6">
                BIODATA
              </h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium text-foreground mb-2"
                    htmlFor="CATEGORY_PARTICIPANT"
                  >
                    Categories Participants
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PARTICIPANT"
                    name="CATEGORY_PARTICIPANT"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none cursor-not-allowed"
                    value="INTERNATIONAL"
                    readOnly
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="CATEGORY_COMPETITION"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Category Competition
                  </label>
                  <select
                    id="CATEGORY_COMPETITION"
                    name="CATEGORY_COMPETITION"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    onChange={handleCategoryChange}
                    required
                  >
                    <option value="">--Choose Category Competition--</option>
                    <option value="Jakarta International Science Fair - Online Competition">
                      Online Competition
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="NAMA_LENGKAP"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name of Leader & Member Team
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2 space-y-1">
                    <p>
                      <b>Noted:</b> Input the name of the team leader and team
                      members with the team leader's name at the beginning,
                      with the following format:
                    </p>
                    <p className="pl-4">
                      <i>- Kamal Putra Simatupang (Leader)</i>
                    </p>
                    <p className="pl-4">
                      <i>- Nur Alif Rajaloa Hidayat</i>
                    </p>
                    <p className="pl-4">
                      <i>- Irsyad Zaidan</i>
                    </p>
                    <p>
                      <b>Note:</b> maximum 5 members + 1 team leader.
                    </p>
                  </div>
                  <textarea
                    id="NAMA_LENGKAP"
                    name="NAMA_LENGKAP"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Name of Leader & Member team"
                    required
                    value={selectedMaxNamaLengkap}
                    onChange={handleInputNameChange}
                    rows={5}
                  ></textarea>
                  <p className="text-xs text-right text-muted-foreground mt-1">
                    {selectedMaxNamaLengkap.length} / {maxNameChars} character
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="LEADER_WHATSAPP"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Leader WhatsApp Number
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      Please write with phone code, example:{" "}
                      <b>+62 8177091xxxx</b>
                    </p>
                    <p>
                      <b>Notes:</b> Please fill in the team leader number
                      correctly, to be included in the group.
                    </p>
                  </div>
                  <input
                    type="number"
                    id="LEADER_WHATSAPP"
                    name="LEADER_WHATSAPP"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Leader WhatsApp Number"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="LEADER_EMAIL"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Leader Email Address
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      <b>Notes:</b> Please fill in the email correctly, LOA
                      submissions will be sent via the team leader's email
                      address filled in.
                    </p>
                  </div>
                  <input
                    type="email"
                    id="LEADER_EMAIL"
                    name="LEADER_EMAIL"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Your Leader Email Address"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="NISN_NIM"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    NISN / NIM Team Leader & Team Member
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      <b>Notes:</b> Enter the NISN / NIM in the order of the
                      names of the team leader and team members, in the following
                      format:
                    </p>
                    <p className="pl-4">
                      <i>231700 (Kamal Putra Simatupang)</i>
                    </p>
                    <p className="pl-4">
                      <i>241700 (Nur Alif Rajaloa Hidayat)</i>
                    </p>
                    <p className="pl-4">
                      <i>251700 (Irsyad Zaidan)</i>
                    </p>
                  </div>
                  <textarea
                    id="NISN_NIM"
                    name="NISN_NIM"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input NISN / NIM Team Leader & Team Member"
                    required
                    rows={5}
                  ></textarea>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-primary border-b-2 border-border pb-2 mb-6 mt-12">
                SCHOOL DATA
              </h1>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="NAMA_SEKOLAH"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name of School/University
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2 space-y-1">
                    <p>
                      <b>Noted:</b> If all members are in the same institution,
                      write only 1 institution.
                    </p>
                    <p>
                      If the members are not in the same institution, enter the
                      name of the school with the format in the order of the
                      name of the team leader and team members from each
                      school, with the following format:
                    </p>
                    <p className="pl-4">
                      <i>SMA CERIA (Kamal Putra Simatupang)</i>
                    </p>
                    <p className="pl-4">
                      <i>HAPPY HIGH SCHOOL (Nur Alif Rajaloa Hidayat)</i>
                    </p>
                    <p className="pl-4">
                      <i>SMA TADIKA MESRA (Irsyad Zaidan)</i>
                    </p>
                  </div>
                  <textarea
                    id="NAMA_SEKOLAH"
                    name="NAMA_SEKOLAH"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input School Name of Leader & Member Team"
                    required
                    value={selectedNamaSekolah}
                    onChange={handleInputNameSchoolChange}
                    rows={5}
                  ></textarea>
                  <p className="text-xs text-right text-muted-foreground mt-1">
                    {selectedNamaSekolah.length} / {maxSchoolChars} character
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="NPSN"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nomor Pokok Sekolah Nasional (NPSN)
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      <b>Notes:</b> Enter the NPSN if you are still in school
                      with the following the order of the names of the team
                      leader and members, with the format as follows:
                    </p>
                    <p className="pl-4">
                      <i>1201301 (SMA CERIA)</i>
                    </p>
                    <p className="pl-4">
                      <i>1302402 (HAPPY HIGH SCHOOL)</i>
                    </p>
                    <p className="pl-4">
                      <i>1020100 (SMA TADIKA MESRA)</i>
                    </p>
                  </div>
                  <textarea
                    id="NPSN"
                    name="NPSN"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Nomor Pokok Sekolah Nasional (NPSN)"
                    rows={5}
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="GRADE"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Grade
                  </label>
                  <select
                    id="GRADE"
                    name="GRADE"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    required
                  >
                    <option value="">--Choose Grade--</option>
                    <option value="Elementary">Elementary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="University">University</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="PROVINCE"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Province
                  </label>
                  <input
                    type="text"
                    id="PROVINCE"
                    name="PROVINCE"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input your Province"
                    required
                  />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-primary border-b-2 border-border pb-2 mb-6 mt-12">
                SUPERVISOR DATA
              </h1>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="NAME_SUPERVISOR"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name of Teacher/Supervisor
                  </label>
                  <textarea
                    id="NAME_SUPERVISOR"
                    name="NAME_SUPERVISOR"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Name of Teacher/Supervisor"
                    required
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="WHATSAPP_NUMBER_SUPERVISOR"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teacher/Supervisor WhatsApp Number
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      Please write with phone code, example: <b>+62 8177091xxxx</b>
                    </p>
                  </div>
                  <input
                    type="number"
                    id="WHATSAPP_NUMBER_SUPERVISOR"
                    name="WHATSAPP_NUMBER_SUPERVISOR"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Teacher/Supervisor WhatsApp Number"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="EMAIL_TEACHER_SUPERVISOR"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teacher/Supervisor Email Address
                  </label>
                  <input
                    type="email"
                    id="EMAIL_TEACHER_SUPERVISOR"
                    name="EMAIL_TEACHER_SUPERVISOR"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Teacher/Supervisor Email Address"
                    required
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-primary border-b-2 border-border pb-2 mb-6 mt-12">
                DETAIL PROJECT
              </h1>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="PROJECT_TITLE"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Project Title
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      <b>Notes:</b> Please fill in the title data CORRECTLY, the
                      data entered cannot be changed!
                    </p>
                  </div>
                  <textarea
                    id="PROJECT_TITLE"
                    name="PROJECT_TITLE"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Your Project Title"
                    required
                    value={selectedMaxProject}
                    onChange={handleInputProjectChange}
                    rows={3}
                  ></textarea>
                  <p className="text-xs text-right text-muted-foreground mt-1">
                    {selectedMaxProject.length} / {maxProjectChars} character
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="CATEGORIES"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Categories
                  </label>
                  <select
                    id="CATEGORIES"
                    name="CATEGORIES"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    required
                  >
                    <option value="">--Choose Categories--</option>
                    <option value="Plant & Crop Science">Plant & Crop Science</option>
                    <option value="Food Security & Sustainable Agriculture">Food Security & Sustainable Agriculture</option>
                    <option value="AI & IoT in Agriculture">AI & IoT in Agriculture</option>
                    <option value="Education & Social Impact Studies">Education & Social Impact Studies</option>
                    <option value="Digital & Sustainable Cooperative Innovation">Digital & Sustainable Cooperative Innovation</option>
                    <option value="Disaster and Crisis Studies">Disaster and Crisis Studies</option>
                    <option value="Innovation for Public Systems">Innovation for Public Systems</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Life Science">Life Science</option>
                    <option value="Environmental Science">Environmental Science</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="YES_NO"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Does the project title have ever participated in an
                    invention and innovation competition before?
                  </label>
                  <select
                    id="YES_NO"
                    name="YES_NO"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    required
                  >
                    <option value="">--Choose--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="JUDUL_PERNAH_BERPATISIPASI"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    If the project title have ever participated in other
                    invention and innovation competition, please write down the
                    name of competition
                  </label>
                  <textarea
                    id="JUDUL_PERNAH_BERPATISIPASI"
                    name="JUDUL_PERNAH_BERPATISIPASI"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input Competition Name"
                    rows={3}
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="CATEGORY_PRICE"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Registration Price
                  </label>
                  <input
                    type="text"
                    id="CATEGORY_PRICE"
                    name="CATEGORY_PRICE"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none cursor-not-allowed"
                    value={categoryPrice}
                    readOnly
                    placeholder="The price will appear based on the selected category"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-primary border-b-2 border-border pb-2 mb-6 mt-12">
                GENERAL INFORMATION
              </h1>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="COMPLETE_ADDRESS"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Address
                  </label>
                  <div className="text-xs text-muted-foreground mt-1 mb-2">
                    <p>
                      Please write down the complete address (Street Name,
                      House Number, RT&RW, District, Regency, City, Province,
                      Postal Code)
                    </p>
                  </div>
                  <textarea
                    id="COMPLETE_ADDRESS"
                    name="COMPLETE_ADDRESS"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Input your Full Address"
                    required
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="mb-6">
                  <label
                    htmlFor="INFORMATION_RESOURCES"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    WASISC 2026 Competition Information Resources
                  </label>
                  <select
                    id="INFORMATION_RESOURCES"
                    name="INFORMATION_RESOURCES"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    required
                  >
                    <option value="">
                      --Select the Source of Information--
                    </option>
                    <option value="WASISC Website">WASISC Website</option>
                    <option value="IYSA Website">IYSA Website</option>
                    <option value="IYSA Instagram">IYSA Instagram</option>
                    <option value="WASISC Instagram">WASISC Instagram</option>
                    <option value="Supervisor/School">
                      Supervisor/School
                    </option>
                    <option value="IYSA Facebook">IYSA Facebook</option>
                    <option value="IYSA Linkedin">IYSA Linkedin</option>
                    <option value="IYSA Email">IYSA Email</option>
                    <option value="WASISC Email">WASISC Email</option>
                    <option value="Previous Event">Previous Event</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="FILE"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    If you received free registration, please attach evidence.
                  </label>
                  <input
                    type="url"
                    id="FILE"
                    name="FILE"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Upload Link Google Drive"
                  />
                </div>
              </div>

              <div className="mt-12">
                <input
                  type="submit"
                  value={isLoading ? "SUBMITTING..." : "SUBMIT FORM"}
                  disabled={isLoading}
                  className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                />
              </div>
            </form>

            {isLoading && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="flex flex-col items-center">
                  <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mb-4 animate-spin"></div>
                  <p className="text-white text-xl">
                    {statusMessage || "Submitting data..."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default InternationalOffline;
