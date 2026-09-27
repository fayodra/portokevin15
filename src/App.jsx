import { Phone, Camera, Video, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import React from 'react';
import './App.css';
// 1. Impor gambar dari folder assets
import profilePhoto from "./assets/hero-bg.jpeg";

function App() {
  const projectsData = [
    {
      id: '01',
      title: 'Penghitung Barang Otomatis',
      category: 'IoT & Embedded System',
      image: "/project1.jpeg",
      desc: 'Merancang sistem penghitung barang otomatis berbasis ESP32 menggunakan sensor untuk mendeteksi dan menghitung jumlah objek.',
      tech: ['ESP32', 'Sensor IR/Ultrasonik', 'C++']
    },
    {
      id: '02',
      title: 'Pemberi Pakan Ikan Otomatis & Pendeteksi',
      category: 'Otomasi & Sistem Kontrol',
      image: "/project2.jpeg",
      desc: 'Membuat alat pakan ikan otomatis terjadwal yang dilengkapi dengan sensor pendeteksi ketersediaan pakan.',
      tech: ['Mikrokontroler', 'Motor Servo', 'Sensor Proximity']
    },
    {
      id: '03',
      title: 'Robot ARM Terintegrasi Website',
      category: 'Robotika & Web Control',
      image: "/project3.jpeg",
      desc: 'Merancang dan mengendalikan pergerakan lengan robot (Robot ARM) secara antarmuka berbasis website.',
      tech: ['Robot ARM', 'Web Server', 'HTML/JS']
    },
    {
      id: '04',
      title: 'Robot Self-Balancing',
      category: 'Robotika & Kontrol PID',
      image: "/project4.jpeg",
      desc: 'Membuat robot dua roda yang dapat menyeimbangkan diri secara otomatis menggunakan masukan sensor gyro/accelerometer.',
      tech: ['Gyro Sensor (MPU6050)', 'PID Control', 'DC Motor']
    },
    {
      id: '05',
      title: 'Rangkaian Digital: Up/Down Counter & Flip-Flop',
      category: 'Sistem Digital',
      image: "/project5.jpeg",
      desc: 'Membuat rangkaian pencacah naik-turun (Up/Down Counter), Flip-Flop, dan generator sinyal detak (Clock Generator).',
      tech: ['IC Logika', 'Clock Generator', 'Breadboard']
    },
    {
      id: '06',
      title: 'Perancangan Power Supply DC',
      category: 'Elektronika Daya',
      image: "/project6.jpeg",
      desc: 'Merancang dan merakit catu daya (Power Supply DC) teregulasi dari tegangan AC ke DC untuk kebutuhan praktikum.',
      tech: ['Trafo', 'Diode Bridge', 'Kapasitor', 'Regulator IC']
    }
  ];

  const servicesData = [
    {
      id: '01',
      title: 'Mikrokontroler & Hardware ',
      desc: 'ESP32, Seri Arduino (Uno, Nano) dan pengujian rangkaian dengan menggunakan alat ukur seperti osiloskop dan multimeter.'
    },
    {
      id: '02',
      title: 'Konektivitas IoT',
      desc: 'Wi-Fi, integrasi platform IoT seperti Blynk.'
    },
    {
      id: '03',
      title: 'Komponen',
      desc: 'Sensor: sensor jarak (ultrasonik dan IR), sensor gerakan (PIR). Output & aktuator: Motor servo, relay, LCD, LED, dan audio.'
    },
    {
      id: '04',
      title: 'Software & Simulasi',
      desc: 'Arduino IDE, Proteus, EasyEDA untuk simulasi dan perancangan skematik.'
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Header / Navbar */}
      <nav className="navbar">
        <div className="logo">ELECTRO.LAB</div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#services">Keahlian</a></li>
          <li><a href="#portfolio">Proyek</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="greeting">HELLO, I AM</p>
          <h2 className="name" style={{ color: '#ff6600' }}>
            <Typewriter
              options={{
                strings: ['KEVIN SULTAN FAYODRA'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <h1 className="role">Electronics Engineering Department</h1>
          
          <div className="social-icons" style={{ display: 'flex', gap: '12px', marginTop: '15px' }}>
            <div className="social-links">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/6283806565407" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="icon-box"
              >
                <Phone size={20} />
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/fayodra15" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="icon-box"
              >
                <Camera size={20} />
              </a>

              {/* Email */}
              <a 
                href="mailto:fayodra15@gmail.com" 
                className="icon-box"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="cta-buttons">
            <button className="btn-orange">Hire Me</button>
            <a 
              href="/cv.pdf" 
              download="CV_KEVIN_SULTAN_FAYODRA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">2+ Thn</span>
              <span className="stat-label">Pengalaman Kuliah</span>
            </div>
           
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Siap Industri</span>
            </div>
          </div>
        </div>

        {/* Gambar Profil */}
        <div className="hero-image-container">
          <div className="circle-bg">
            <img 
              src={profilePhoto} 
              alt="Foto Profil Kevin Sultan Fayodra" 
              className="profile-img" 
            />
          </div>
        </div>
      </section>

      {/* SECTION TENTANG SAYA & PENDIDIKAN */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <h3 className="about-subtitle">TENTANG SAYA</h3>
            <h2 className="about-title">Mahasiswa Teknik Elektronika</h2>
            
            <p className="about-desc">
              Saya Praktisi Teknik Elektronika yang mendalami perancangan embedded systems dan integrasi perangkat IoT. Memiliki pengalaman teknis dalam pemrograman mikrokontroler (ESP32 & Arduino), otomasi sensorik, komunikasi data nirkabel (Wi-Fi), serta pengujian rangkaian secara terstruktur. Menangani alur pengembangan hardware dari tahap simulasi, breadboarding, hingga validasi fungsi sistem akhir. Saya selalu antusias mempelajari teknologi baru dan siap berkontribusi dalam proyek-proyek inovasi berbasis teknologi pintar.
            </p>

            <div className="education-box">
              <h3 className="education-heading">🎓 RIWAYAT PENDIDIKAN</h3>
              
              {/* Perguruan Tinggi */}
              <div className="education-item" style={{ marginBottom: '20px' }}>
                <div className="edu-header">
                  <h4 className="edu-degree">D3 Teknik Elektronika</h4>
                  <span className="edu-years">2024 – Sekarang</span>
                </div>
                <div className="institution-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                  <img 
                    src="/logo-pnp.png" 
                    alt="Logo PNP" 
                    style={{ width: '24px', height: 'auto', objectFit: 'contain' }} 
                  />
                  <p className="edu-institution" style={{ margin: 0 }}>POLITEKNIK NEGERI PADANG</p>
                </div>
                <ul className="edu-highlights">
                  <li><strong>IPK Sementara:</strong> 3.20</li>
                  <li>
                    Fokus pada perancangan rangkaian elektronik, hardware prototyping, dan pemrograman mikrokontroler.
                  </li>
                  <li>
                    Menguasai integrasi sensor, aktuator, dan komunikasi data untuk sistem otomasi serta IoT.
                  </li>
                </ul>
              </div>

              {/* SMA */}
              <div className="education-item">
                <div className="edu-header">
                  <h4 className="edu-degree">Jurusan IPA (MIPA)</h4>
                  <span className="edu-years">2020 - 2023</span>
                </div>
                <div className="institution-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                  <img 
                    src="/logo-sman4.png" 
                    alt="Logo SMAN 4 Padang" 
                    style={{ width: '24px', height: 'auto', objectFit: 'contain' }} 
                  />
                  <p className="edu-institution" style={{ margin: 0, fontWeight: 'bold' }}>SMAN 4 PADANG</p>
                </div>
                <ul className="edu-highlights">
                  <li><strong>Fokus Studi:</strong> Matematika dan Ilmu Pengetahuan Alam (Fisika, Kimia, Matematika).</li>
                </ul>
              </div>
            </div>

            <div className="experience-box">
              <h3 className="experience-heading">💼 Pengalaman Magang</h3>
              <div className="experience-item">
                <div className="exp-header">
                  <h4 className="exp-role">OJT Facility Maintenance Technician</h4>
                  <span className="exp-years">10 Agustus - Sekarang</span>
                </div>
                <p className="exp-company">PT Angkasa Pura II — Bandara Halim Perdanakusuma</p>
                <ul className="exp-highlights">
                  <li>Melakukan preventive & corrective maintenance pada X-RAY, WTMD, HHMD di Bandara Halim Perdanakusuma.</li>
                  <li>Mendiagnosis serta memperbaiki gangguan teknis pada instrumen pendukung operasional penerbangan.</li>
                  <li>Melakukan pengecekan & konfigurasi resolusi CCTV di area Bandara Halim Perdanakusuma.</li>
                  <li>Perbaikan tampilan FIDS untuk keberangkatan dan kedatangan penerbangan.</li>
                </ul>
              </div>
            </div>

            <a 
              href="/cv.pdf" 
              download="cv.pdf"
              className="btn-orange"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}
            >
              Unduh Transkrip & CV
            </a>
          </div>
        </div>
      </section>

      {/* SECTION KEAHLIAN / SERVICES */}
      <section className="services-section" id="services">
        <div className="section-title">
          <h2>Keahlian Utama</h2>
          <p>Dalam mengerjakan proyek-proyek otomasi dan hardware prototyping di kampus, saya didukung oleh keahlian teknis serta tools berikut:</p>
        </div>

        <div className="services-grid">
          {servicesData.map((item) => (
            <div className="service-card" key={item.id}>
              <div className="service-number">{item.id}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION PROYEK / PORTFOLIO */}
      <section className="portfolio-section" id="portfolio" style={{ padding: '60px 20px' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Proyek Terbaru</h2>
          <p>Beberapa proyek teknis dan eksperimen yang telah saya kerjakan.</p>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card" style={{ background: '#1e1e1e', padding: '24px', borderRadius: '12px', border: '1px solid #333', textAlign: 'center' }}>
              
              {/* 1. Kategori (Di paling atas) */}
              <span style={{ color: '#ff6b00', fontSize: '14px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                {project.category}
              </span>
              
              {/* 2. Gambar Proyek (Di bawah kategori, di atas judul) */}
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px', display: 'block' }} 
                />
              )}

              {/* 3. Judul Proyek */}
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#fff' }}>
                {project.title}
              </h3>

              {/* 4. Deskripsi Proyek */}
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
                {project.desc}
              </p>
              
              {/* 5. Tech Stack */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {project.tech.map((item, index) => (
                  <span key={index} style={{ background: '#2a2a2a', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '12px' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION KONTAK */}
      <section className="contact-section" id="contact" style={{ padding: '60px 20px', background: '#121212', color: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#ff6600', fontSize: '14px', fontWeight: 'bold', textAlign: 'center', marginBottom: '5px' }}>HUBUNGI SAYA</p>
          <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '40px', color: '#ff6600' }}>
            "Siap Mewujudkan Ide & Inovasi Teknologi Anda"
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            {/* Kartu Informasi Kontak */}
            <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px', background: '#1e1e1e', borderRadius: '8px', border: '1px solid #333' }}>
                <span style={{ fontSize: '24px' }}>📍</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#ff6600' }}>Lokasi</h4>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#ccc' }}>Padang, Sumatera Barat</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px', background: '#1e1e1e', borderRadius: '8px', border: '1px solid #333' }}>
                <span style={{ fontSize: '24px' }}>✉️</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#ff6600' }}>Email</h4>
                  <a href="mailto:fayodra15@gmail.com" style={{ margin: '5px 0 0', fontSize: '14px', color: '#ccc', textDecoration: 'none', display: 'block' }}>fayodra15@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px', background: '#1e1e1e', borderRadius: '8px', border: '1px solid #333' }}>
                <span style={{ fontSize: '24px' }}>📞</span>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#ff6600' }}>WhatsApp / Telepon</h4>
                  <a href="https://wa.me/6283806565407" target="_blank" rel="noopener noreferrer" style={{ margin: '5px 0 0', fontSize: '14px', color: '#ccc', textDecoration: 'none', display: 'block' }}>Hubungi via WhatsApp</a>
                </div>
              </div>
            </div>

            {/* Form Pesan terhubung ke WhatsApp */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const nama = e.target.nama.value;
                const email = e.target.email.value;
                const pesan = e.target.pesan.value;
                
                const teksWA = `Halo Kevin, saya ${nama} (${email}).%0A%0APesan:%0A${pesan}`;
                window.open(`https://wa.me/6283806565407?text=${teksWA}`, '_blank');
              }}
              style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <input 
                type="text" 
                name="nama" 
                placeholder="Nama Anda" 
                style={{ padding: '12px', background: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Anda" 
                style={{ padding: '12px', background: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                required 
              />
              <textarea 
                name="pesan" 
                placeholder="Pesan Anda..." 
                rows="5" 
                style={{ padding: '12px', background: '#1e1e1e', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} 
                required
              ></textarea>
              <button type="submit" className="btn-orange">Kirim via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;