export default function AboutUs() {
  return (
    <div className="bg-amber-50">
      <div className="px-6 py-10 max-w-4xl mx-auto text-[#3A3A3A] font-sans space-y-10">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#B17F59] mb-4">
            🧠 About Us — Hello Life
          </h1>
          <h2 className="text-2xl font-semibold text-[#56776C] mb-2">
            🌿 Company History
          </h2>
          <p className="mb-2">
            Hello Life didirikan pada tahun 2023 dengan visi untuk menjadikan
            kesehatan mental sebagai bagian penting dari kehidupan sehari-hari.
            Berawal dari kekhawatiran bahwa akses terhadap layanan psikologi
            masih terbatas dan seringkali dianggap tabu, sekelompok profesional
            dari bidang psikologi, teknologi, dan desain bergabung untuk
            menciptakan sebuah platform yang ramah, inklusif, dan mudah
            dijangkau.
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>
              Membantu lebih dari 2.000 klien dari berbagai latar belakang.
            </li>
            <li>Meluncurkan fitur konsultasi online yang aman dan nyaman.</li>
            <li>Bekerja sama dengan organisasi pendidikan dan perusahaan.</li>
          </ul>
          <p>
            Kami percaya bahwa mendengarkan adalah awal dari penyembuhan, dan
            Hello Life hadir untuk mendengarkan dengan empati.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#56776C] mb-4">
            👩‍⚕️ Meet the Team
          </h2>

          <div className="mb-6 ">
            <h3 className="text-xl font-semibold mb-2">⭐ Tim Psikolog</h3>
            <ul className="space-y-2">
              <li>
                <strong>Dr. Anindya Putri</strong> – Lead Clinical Psychologist
                <br />
                <span className="text-sm text-gray-700">
                  10+ tahun pengalaman di psikologi klinis dewasa. Ahli dalam
                  terapi perilaku dan mindfulness.
                </span>
              </li>
              <li>
                <strong>Irwan Yudha, M.Psi</strong> – Child & Adolescent
                Specialist
                <br />
                <span className="text-sm text-gray-700">
                  Fokus pada perkembangan anak dan remaja, pendidikan emosional,
                  dan terapi keluarga.
                </span>
              </li>
              <li>
                <strong>Sheila Hartanto, M.Psi</strong> – Counselor & Group
                Therapist
                <br />
                <span className="text-sm text-gray-700">
                  Berpengalaman dalam konseling kelompok dan permasalahan
                  hubungan interpersonal.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              💻 Tim Teknologi & Kreatif
            </h3>
            <ul className="space-y-2">
              <li>
                <strong>Rizky Ramadhan</strong> – Head of Product
                <br />
                <span className="text-sm text-gray-700">
                  Merancang pengalaman pengguna yang intuitif agar layanan
                  psikologis lebih mudah dijangkau.
                </span>
              </li>
              <li>
                <strong>Nadia Amelia</strong> – Content & Community Manager
                <br />
                <span className="text-sm text-gray-700">
                  Menyusun konten edukatif seputar kesehatan mental, serta
                  membangun komunitas support Hello Life.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#56776C] mb-4">
            💬 Culture & Values
          </h2>
          <p className="mb-4">
            Di Hello Life, budaya kerja kami dibangun atas dasar empati,
            kolaborasi, dan keseimbangan hidup. Kami percaya bahwa tempat kerja
            harus mendukung pertumbuhan pribadi dan profesional.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Empathy First</strong>: Kami mendengarkan tanpa
              menghakimi.
            </li>
            <li>
              <strong>Integrity & Privacy</strong>: Kami menjaga kerahasiaan dan
              etika dalam semua layanan.
            </li>
            <li>
              <strong>Continuous Learning</strong>: Kami mendorong pembelajaran
              dan pengembangan diri.
            </li>
            <li>
              <strong>Inclusive Environment</strong>: Kami terbuka terhadap
              keberagaman dan menghormati setiap individu.
            </li>
          </ul>
          <p className="mt-4">
            Kami bekerja dengan fleksibilitas dan tujuan: memberikan dampak
            positif bagi kehidupan banyak orang.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-[#56776C] mb-2">
            🎯 Ingin kenal kami lebih dekat?
          </h2>
          <p className="text-sm">
            📩 <strong>Email</strong>:{" "}
            <a
              href="mailto:support@hellolife.id"
              className="text-blue-600 underline"
            >
              support@hellolife.id
            </a>
            <br />
            📍 <strong>Lokasi</strong>: Jakarta, Indonesia
            <br />
            📱 <strong>Instagram</strong>:{" "}
            <a
              href="https://instagram.com/hellolife.id"
              target="_blank"
              className="text-blue-600 underline"
            >
              @hellolife.id
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
