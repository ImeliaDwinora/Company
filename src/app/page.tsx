import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center font-sans bg-amber-50 text-gray-800">
      {/* HEADER */}
      <header className="bg-cover bg-center">
        <div className="bg-amber-150 bg-opacity-70">
          <nav className="bg-[#B17F59] py-4 px-6 flex justify-between items-center">
            <Link href="/" className="text-[#D5E2B6] text-xl font-cherry">
              Hello Life
            </Link>
            <ul className="flex gap-6 text-[#D5E2B6] font-cherry">
              <li>
                <Link href="/auth/sign-in" className="hover:text-white">
                  Login
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <Image
              src="/mental-health.png"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <h1 className="text-5xl font-bold text-[#A5B68D] font-cherry mt-4">
              Hello Life
            </h1>
            <p className="mt-2 text-lg font-playwrite">
              Listening, Understanding, Empowering.
            </p>
            <nav className="mt-6">
              <ul className="flex justify-center gap-8 text-[#5a604d] font-cherry">
                <li>
                  <Link href="/about-us" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    About Us
                  </Link>
                </li>
                <li>
                 <Link href="/services" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    Services
                  </Link>
                </li>
                <li>
                <Link href="/articles" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    Articles
                  </Link>
                </li>
                <li>
                <Link href="/teams" className="hover:text-black bg-yellow-300 p-2 rounded-xl shadow">
                    Teams
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-8 flex flex-col justify-center gap-8 m-3">
        <section className="lg:col-span-5 space-y-10">
          {/* About Hello Life */}
          <article id="sejarah" className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              Inside Hello Life
            </h2>
            <Image
              src="https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?w=600"
              alt="Psychologist"
              width={800}
              height={500}
              className="rounded-xl w-full object-cover"
            />
            <div className="mt-6 space-y-4 font-playwrite text-sm">
              <p>
                Hello Life is a psychology service platform dedicated to helping
                individuals find emotional balance, improve mental well-being,
                and live a more meaningful life. Founded in 2023, Hello Life
                serves as a bridge between the growing need for trusted
                psychological services and easy, safe, and accessible support.
              </p>
              <p>
                Our team brings together diverse backgrounds in clinical
                psychology, counseling, child development, and organizational
                behavior. We work collaboratively to provide a supportive,
                non-judgmental space for individuals, couples, and families
                facing emotional or psychological challenges.
              </p>
              <p>
                At the heart of our culture is a passion for helping people.
                Whether through one-on-one therapy, group sessions, or corporate
                wellness programs, we aim to empower every client with the tools
                and insights they need to heal, grow, and thrive.
              </p>
            </div>
          </article>

          {/* Background */}
          <article id="services" className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              Our Background
            </h2>
            <p className="font-playwrite text-sm">
              We believe that everyone deserves a space to understand themselves
              and grow emotionally. Hello Life was established by a team of
              professionals from diverse backgrounds—psychology, technology, and
              design—who share a common mission: to make mental health a
              priority in modern life.
            </p>
          </article>

          {/* Our Team */}
          <article id="blog" className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              Our Team of Professionals
            </h2>
            <p>
              At Hello Life, we take pride in our licensed and experienced
              psychologists who have supported hundreds of clients from various
              walks of life. All of our psychologists are certified and trained
              in clinical, developmental, educational, and
              industrial-organizational psychology.
            </p>
            <p>
              We also collaborate with skilled technical and creative teams to
              ensure our services are not only secure and efficient but also
              enjoyable to use.
            </p>
          </article>

          {/* Core Values */}
          <section className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#A5B68D] mb-8 font-sour">
              Our Values
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/empathy.png"
                  alt="Empathy"
                  width={40}
                  height={40}
                />
                <p className="mt-2 font-bold">Empathy</p>
                <span className="text-sm text-gray-600">
                  We listen without judgement
                </span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/success.png"
                  alt="Privacy"
                  width={40}
                  height={40}
                />
                <p className="mt-2 font-bold">Confidentiality</p>
                <span className="text-sm text-gray-600">
                  Client privacy is our priority
                </span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/helping-hand.png"
                  alt="Accessibility"
                  width={40}
                  height={40}
                />
                <p className="mt-2 font-bold">Accessibility</p>
                <span className="text-sm text-gray-600">
                  Support for everyone, everywhere
                </span>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image src="/growth.png" alt="Growth" width={40} height={40} />
                <p className="mt-2 font-bold">Growth</p>
                <span className="text-sm text-gray-600">
                  Continuous learning and evolving
                </span>
              </li>
            </ul>
          </section>

          {/* Vision */}
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              🌍 Our Vision
            </h2>
            <p>
              To become Indonesia’s leading digital psychology platform that
              helps people live more mindfully, emotionally healthy, and
              meaningfully connected with themselves and others.
            </p>
          </article>

          {/* Mission */}
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-[#A5B68D] font-sour mb-4">
              🎯 Our Mission
            </h2>
            <ul className="list-disc list-inside space-y-2 font-playwrite">
              <li>
                Provide affordable and professional psychological services.
              </li>
              <li>Raise awareness about the importance of mental health.</li>
              <li>Innovate digital solutions in the field of psychology.</li>
              <li>Build a caring and supportive community.</li>
            </ul>
          </article>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#B17F59] text-[#D5E2B6] text-center p-4 font-cherry">
        Hello Life © 2025. Built with ❤️ by Saye.
      </footer>
    </div>
  );
}
