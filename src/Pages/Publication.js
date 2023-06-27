import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { NavigationBar } from "../components/PageNavbar";
import "../style/publication.css";
import { Publications } from "../components/Publication";
import { useState } from "react";

export default function Publication() {
  const [publication, setPublication] = useState([
    {
      year: 2019,
      publications: [
        {
          id: 0,
          title:
            "Perancangan Sistem Deteksi Objek Pada Robot KRSBI Berbasis Mini PC Raspberry Pi 3",
          image: "/image/publication/Screenshot (78).png",
          url: "http://tip.ppj.unp.ac.id/index.php/tip/article/view/177",
        },
        {
          id: 1,
          title:
            "Perancangan Pergerakan Kaki Robot Humanoid Menggunakan Servo Dynamixel Berbasis OPENCM 9.04",
          image: "/image/publication/Screenshot (80).png",
          url: "https://ejournal.unp.ac.id/index.php/voteknika/article/view/105185",
        },
      ],
    },
    {
      year: 2020,
      publications: [
        {
          id: 0,
          title:
            "Sistem Pergerakan Robot Kiper Beroda Menggunakan Metode Wall Follower Berbasis Image Processing",
          image: "/image/publication/Screenshot (77).png",
          url: "https://jurnal.untan.ac.id/index.php/Elkha/article/view/35245/pdf",
        },
        {
          id: 1,
          title:
            "Sistem Pergerakan dan Deteksi Pada Robot Sepak Bola Beroda Berbasis Image Processing dengan Penerapan Multivision",
          image: "/image/publication/Screenshot (76).png",
          url: "http://invotek.ppj.unp.ac.id/index.php/invotek/article/view/830/173",
        },
      ],
    },
    {
      year: 2021,
      publications: [
        {
          id: 0,
          title:
            "Pergerakan Autonomous Pesawat Tanpa Awak Berdasarkan Tinggi Terbang Pesawat",
          image: "/image/publication/Screenshot (81).png",
          url: "https://jurnal.ranahresearch.com/index.php/R2J/article/view/391",
        },
        {
          id: 1,
          title:
            "Perancangan Monitoring Robot Kiper Melalui Access Point Sebagai Media Kendali Robot",
          image: "/image/publication/Screenshot (79).png",
          url: "http://jtein.ppj.unp.ac.id/index.php/JTEIN/article/view/142",
        },
      ],
    },
    {
      year: 2022,
      publications: [
        {
          id: 0,
          title:
            "ComparisonLift and Drag of Airfoil NACA 1408 Standard and Modification Using Computational Fluid Dynamic",
          image: "/image/publication/Screenshot (83).png",
          url: "http://motivection.imeirs.org/index.php/motivection/article/view/146",
        },
      ],
    },
  ]);
  return (
    <>
      <header>
        <NavigationBar color={true} page={"publication"} />
      </header>
      <Publications publications={publication} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
