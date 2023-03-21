import { Container, Row, Col } from "react-bootstrap";
import ketuaUmum from '../assets/image/ketum.png'
import wkm from '../assets/image/wkm.png'
import bendumI from '../assets/image/bendumI.png'
import bendumII from '../assets/image/bendum-II.png'
import sekretarisI from '../assets/image/sekre-I.png'
import sekretarisII from '../assets/image/sekum-II.png'

const Home = () =>{
    document.title = "Robotik UNP";
 return(
    <div id='home' className="home">
        <Container>
            <Row>
                <Col>
                    <p>
                        Unit Kegiatan Robotika Universitas Negeri Padang (UKRO UNP) atau lebih dikenal dengan <b>ROBOTIK UNP</b> merupakan sebuah unit yang mewadahi potensi mahasiswa UNP khususnya pada bidang rekayasa teknologi robotika. UKRO sendiri berdiri pada tanggal 10 September 2008 dengan nama <b><i>Gaza Robotik Team</i></b>. Nama <i>Gaza</i> diambil dari semangat juang Gaza yang pantang menyerah dan tidak mudah putus asa. <i>Gaza Robotik Team</i> ini masih berada di bawah naungan Fakultas Teknik UNP yang pada akhirnyaa di tahun 2019 menjadi salah satu UKM yang ada di tingkat Universitas. Pada saat ini nama Gaza Robotik Team berubah menjadi Unit Kegiatan Robotika Universitas Negeri Padang.
                    </p>
                </Col>
                <Col>
                    <div className="ratio ratio-16x9 videoProfil">
                        <iframe width="280" height="auto" src="https://www.youtube.com/embed/AeYDPMnbTHQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" ></iframe>
                    </div>
                </Col>
            </Row>
            <Row>
              
            </Row>
        </Container>
        <div className="vision">
            <h2><span>VISION</span></h2>
            <Container>
                <br></br>
                <center><h4>“Menjadi salah satu unit kegiatan mahasiswa yang mewadahi segenap civitas akademika Universitas Negeri Padang dibidang riset teknologi rekayasa robotika yang maju, berprestasi, unggul dan bermartabat di asia”</h4></center>
                <br></br>
                <br></br>
                <center><h4 className="english-description">"Becoming one of the student activity club that accommodates the entire academic community of Universitas Negeri Padang in the field of robotics engineering technology research that is advanced, accomplished, superior and dignified in Asia"</h4></center>
                <br></br>
            </Container>
        </div>
        <div className="mission">
            <h2><span>MISSION</span></h2>
            <br></br>
            <Container>
                <ol type="1">
                    <li>Menumbuh kembangkan kreativitas Mahasiswa dibidang riset teknologi rekayasa robotika </li>
                    <li>Meningkatkan kualitas dan kuantitas Sumber Daya Manusia melalui pengembangan soft skill dan hard skill Mahasiswa</li>
                    <li>Meningkatkan minat mahasiswa untuk dapat berperan aktif dalam kegiatan mahasiswa di bidang riset teknologi rekayasa robotika</li>
                    <li>Meningkatkan minat mahasiswa untuk dapat berperan aktif dalam kegiatan mahasiswa di bidang riset teknologi rekayasa robotika</li>
                    <li>Menjadi Pelopor dibidang riset teknologi dalam bidang rekayasa robotika di wilayah Sumatera</li>
                    <li>Membangun kerja sama dengan unit kegiatan mahasiswa lainnya dan dunia industri di Indonesia yang bergerak dibidang teknologi rekayasa robotika</li>
                </ol>

                <ol type="1">
                    <li className="english-description">Develop students' creativity in the field of robotics engineering</li>
                    <li className="english-description">Improve the quality and quantity of human resources through the development of soft skills and hard skills</li>
                    <li className="english-description">Motivate students to take an active role in developing robotics engineering</li>
                    <li className="english-description">Help realize Universitas Negeri Padang's vision and mission in becoming a leading and dignified university in Asia through robotics engineering</li>
                    <li className="english-description">Become a technological pioneer in the field of robotics engineering in Sumatera</li>
                    <li className="english-description">Collaborate with other student activities and parties that are involved in the development of robotics engineering in Indonesia</li>
                </ol>
            </Container>
            <br></br>
        </div>
        <div className="pengurus">
            <h2><span>ORGANIZATION STRUCTURE</span></h2>
            <Container>
                <br></br>
                <Row>
                    <div className="text-center">
                        <h4>PRESIDENT</h4>
                        <img src={ketuaUmum} alt='ketum'></img>
                        <h5>Willy Hardi Vernando</h5>
                    </div>
                </Row>
                <br></br>
                <Row>
                    <Col xs lg="4">
                        <div className="text-center">
                            <h4>VICE PRESIDENT of OPERATIONS</h4>
                            
                            <h5>Relif Hagler Sentosa Marbun</h5>
                        </div>
                    </Col>
                    <Col xs lg="4"> 
                        <div className="text-center">
                            <h4>VICE PRESIDENT of MANAGEMENT</h4>
                            <img src={wkm} alt='wkm'></img>
                            <h5>Dadang Suriana Fahreza</h5>
                        </div>
                    </Col>
                    <Col xs lg="4">
                        <div className="text-center">
                            <h4>TREASURER I</h4>
                            <img src={bendumI} alt='bendumI'></img>
                            <h5>Kurnia Innalillahi</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="4">
                        <div className="text-center">
                            <h4>TREASURER II</h4>
                            <img src={bendumII} alt='bendumII'></img>
                            <h5>Auliya Einsrizkianne Edray</h5>
                        </div>
                    </Col>
                    <Col xs lg="4">
                        <div className="text-center">
                            <h4>SECRETARY I</h4>
                            <img src={sekretarisI} alt='sekretarisI'></img>
                            <h5>Gusvito Habiby</h5>
                        </div>
                    </Col>
                    <Col xs lg="4">
                        <div className="text-center">
                            <h4>SECRETARY II</h4>
                            <img src={sekretarisII} alt='sekretarisII'></img>
                            <h5>Delila Agustina Tinambunan</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    
    </div>
 )
}

export default Home;