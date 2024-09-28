import './style.css';
import DoctorAndCat from "../assets/doctor-cat.png";
import DoctorAndCalf from "../assets/doctor-calf.png";
import DoctorAndBlackCat from "../assets/doctor-black-cat.png";

function Home() {
  return (
    <div className="main">
      <div className='container-one'>
        <div className="content">
          <div className="left-box">
            <h1>Erica Ellen</h1>
            <h1>
              Saúde e carinho para
              seu melhor amigo.
            </h1>
            <button>FALE CONOSCO</button>
          </div>
          <div className="right-box">
            <img src={DoctorAndCat} alt="doctor and cat" />
          </div>
        </div>
      </div>
      <div className='container-two'>
        <div className="content">
          <div className="left-box">
            <img src={DoctorAndCalf} alt="doctor and calf" />
          </div>
          <div className="right-box">
            <h2>Bem-vindo ao Consultório veterinário Erica Ellen!</h2>
            <h2>
              Com mais de 30 anos de experiência no cuidado veterinário em Surubim, oferecemos atendimento especializado e carinho para o seu pet. Agende uma consulta e descubra por que somos referência em saúde animal.
            </h2>
          </div>
        </div>
      </div>
      <div className='container-three'>
        <div className="content">
          <div className="left-box">
            <h2>Nosso conceito de</h2>
            <h1>Cuidado Veterinário</h1>
            <h2>
              No Consultório Erica Ellen, combinamos mais de 30 anos de experiência com uma abordagem moderna e humanizada para oferecer o melhor cuidado veterinário em Surubim. Sob a liderança do Dr. Evaldo de Farias Guerra Junior, nossa equipe se dedica a promover a saúde e o bem-estar dos animais, sempre com carinho e atenção personalizada.
            </h2>
          </div>
          <div className="right-box">
            <img src={DoctorAndBlackCat} alt="doctor and black cat" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;