import './style.scss';

import firstSectionCover from './images/cover-intro.jpg'
import whiteLogo from './images/logo_white.png'

import ellipseParticles from './images/cropped_particles_ellipse.png'
import upParticles from './images/particles_up.png'
import downParticles from './images/particles_down.png'

import capturePanel from './images/panel_capture.png'
import storagePanel from './images/panel_storage.png'
import managePanel from './images/panel_manage.png'
import sharePanel from './images/panel_share.png'

const featureCard = (imgPath: string, title: string, description: string) =>
  <div className="feature-card">
    <img src={imgPath} />
    <p className="title">{title}</p>
    <p className="description">{description}</p>
  </div>

function Website() {
  return (
    <div className="global-wrapper">
      <section className="intro" style={{ backgroundImage: `url(${firstSectionCover})`}}>

        <div className="main-logo">
          <img src={whiteLogo} />
        </div>

        <div className="upper-text">
          <h2 className="upper-header">FACILITE O ARMAZENAMENTO <br/>E O GERENCIAMENTO</h2>
          <h2>DOS DADOS DA SUA <br/>ORGANIZAÇÃO</h2>
        </div>

        <hr className="divider"/>

        <div className="lower-text">
          <p>Digitalizar documentos facilita o armazenamento</p>
          <p>e o gerenciamento de uma organização.</p>
          <p>Trata-se de uma maneira de disseminar facilmente</p>
          <p>as informações entre os colaboradores e agilizar a busca de arquivos.</p>
        </div>

        <button className="btn-orange">saiba mais</button>
      </section>

      {/* SECOND SECTION: FEATURES */}
      <section className="features">

        {/* PARTICLES */}
        <div className="particles">
          <div className="ellipse-container">
            <img src={ellipseParticles}/>
            <img src={downParticles} className="inner-particle"/>
          </div>

          <div className="empty"></div>
          <div className="lower-particle-wrapper">
            <img src={upParticles} className="up-particles" />
            <img src={downParticles} className="inner-lower-particle"/>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <p>O arquivamento é de vital importância para o gerenciamento de informações e pode dar às empresas maior controle sobre seus processos.</p>
          <p>À medida que a empresa cresce, ela gera mais dados que precisam ser meticulosamente gerenciados e monitorados para serem utilizados adequadamente.</p>

          <h2 className="first-content-header">O QUE FAZEMOS<br/>DE MELHOR</h2>

          <div className="feature-cards-wrapper">
            {featureCard(capturePanel, "CAPTURA", "Guarde tudo!")}
            {featureCard(storagePanel, "ARMAZENAMENTO", "Salve os documentos na nuvem!")}
            {featureCard(managePanel, "GERENCIAMENTO", "Ache imediatamente!")}
            {featureCard(sharePanel, "COMPARTILHAMENTO", "Acesse em qualquer lugar!")}
          </div>

          <h2>BENEFÍCIOS</h2>

          <p>• Preservar um documento original de consultas constantes</p>
          <p>• Agilizar a consulta a informações importantes</p>
          <p>• Dar mobilidade aos documentos e informações da empresa ou escritório, auxiliando na tomada de decisão</p>
          <p>• Facilitar, com agilidade e mobilidade, a integração entre matriz e filiais</p>
          <p>• Reduzir o acervo físico de documentos e informações que sobrecarregam o espaço físico do escritório</p>
        </div>
      </section>


      <section className="intro" style={{ backgroundImage: `url(${firstSectionCover})`}}>

        <div className="main-logo">
          <img src={whiteLogo} />
        </div>

        <div className="upper-text">
          <h2 className="upper-header">INOVAÇÃO, FOCO<br/>EFICIÊNCIA E<br/>TECNOLOGIA!</h2>
        </div>

        <hr className="divider"/>

        <div className="lower-text">
          <p>Fundada com a missão de corroborar com o universo digital, através da
conversão dos acervos documentais físicos para um ambiente virtual
digital, somos uma empresa jovem e dinâmica, detentora de um perfil
inovador além de uma visão focada em resultados eficientes, através de
soluções tecnológicas para o seu acervo documental fisíco a fim de
promover uma melhor gestão documental, facilitando o acesso as suas
informações, tudo isso com muita transparência, idoneidade e ética
profissional, praticas das quais norteiam nossas metas.</p>
          <p style={{marginTop: "1em"}}>Com isso, assumimos o compromisso de proporcionar aos nossos
parceiros de negócios, maior agilidade na busca e obtenção de suas
informações após a implantação de nosso trabalho.</p>
        </div>

        <button className="btn-orange">ENTRE EM CONTATO</button>
      </section>

    </div>
  );
}

export default Website;
