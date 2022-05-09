import logo from './images/logo-horizontal-v2.png'
import workflow from './images/workflow.png'

import capture from './images/capture.png'
import manage from './images/manage.png'
import share from './images/share.png'
import storage from './images/storage.png'

const data = {
  headerLinks: [
    { text: "início", path: "inicio" },
    { text: "quem somos", path: "quem-somos" },
    { text: "serviços", path: "servicos" },
    { text: "contato", path: "contato" },
  ],

  logoPath: logo,
  workflowImagePath: workflow,

  homeParagraphs: [
    "Digitalizar documentos facilita o armazenamento e o gerenciamento dos dados de uma organização. Trata-se de uma maneira de disseminar mais facilmente as informações entre os colaboradores e agilizar a busca de arquivos.",
    "O arquivamento é de vital importância para o gerenciamento de informações e pode dar às empresas maior controle sobre seus processos. À medida que a empresa cresce, ela gera mais dados - que precisam ser meticulosamente gerenciados e monitorados para serem utilizados adequadamente." 
  ],

  features: [
    {title: "Captura", description: "Guarde tudo!", imagePath: capture},
    {title: "Armazenamento", description: "Salve os documentos na nuvem!", imagePath: storage},
    {title: "Gerenciamento", description: "Ache imediatamente!", imagePath: manage},
    {title: "Compartilhamento", description: "Acesse em qualquer lugar!", imagePath: share},
  ],

  aboutUsParagraphs: [
    "Fundada com a missão de corroborar com o universo digital, através da conversão dos acervos documentais físicos para um ambiente virtual digital, somos uma empresa jovem e dinâmica, detentora de um perfil inovador além de uma visão focada em resultados eficientes, através de soluções tecnológicas para o seu acervo documental fisíco a fim de promover uma melhor gestão documental, facilitando o acesso as suas informações, tudo isso com muita transparência, idoneidade e ética profissional, praticas das quais norteiam nossas metas.",
    "Com isso, assumimos o compromisso de proporcionar aos nossos parceiros de negócios, maior agilidade na busca e obtenção de suas informações após a implantação de nosso trabalho."
  ],

  benefits: {
    title: "Benefícios",
    paragraphs: [
      "- Preservar um documento original de consultas constantes.",
      "- Agilizar a consulta a informações importantes.",
      "- Dar mobilidade aos documentos e informações da empresa ou escritório, auxiliando na tomada de decisão.",
      "- Facilitar, com agilidade e mobilidade, a integração entre matriz e filiais.",
      "- Reduzir o acervo físico de documentos e informações que sobrecarregam o espaço físico do escritório."
    ]
  }
};

export { data };
