
import img from '../assets/foto5.jpg'
import img1 from '../assets/Design2.webp'
import img2 from '../assets/sla9.png'
import img3 from '../assets/business-deal.svg'

import Languages from '../Components/Languages'
import Style from '../Components/Style'
import Platafoms from '../Components/Platafoms'
import Workflow from '../Components/Workflow'

const tabs = [
    {
        title: 'Code',
        text: 'Nosso Desenvolvimento é focado na escelencia em qualidade escalonamento. ultilizamos as linguagens mais bem conseituados, que se melhor se encaixem nos requisitos do clientes. Com as melhores técnicas desenvolvidas atualmente no mercado, para um durabilidade e versatilidade de código. Estamos comprometidos em fornecer soluções de software inovadoras, confiáveis e de alta qualidade que impulsionem o sucesso dos nossos clientes no mundo digital.',
        img: img,
        container: <Languages />,
        subtitle: 'language',
        subtext: 'Linguagens de promação ultizadas no desenvimento do produto.'
    },
    {
        title: 'Design',
        text: 'Nosso processo de design começa com uma compreensão profunda das necessidades e objetivos do cliente, seguido por uma análise detalhada dos requisitos do projeto, identificando fluxos de trabalho, funcionalidades essenciais e público-alvo. Com base nessa estratégia, nossa equipe cria wireframes e mockups para visualizar a estrutura da interface do usuário, colaborando de perto com o cliente para garantir que atendam às suas expectativas. Uma vez aprovados, nossos designers trabalham no design visual final, considerando a identidade visual da marca do cliente e as tendências de design atuais para criar interfaces atraentes e alinhadas com a visão do projeto.',
        img: img1,
        container: <Style />,
        subtitle: 'Style',
        subtext: 'Cada site tem um propósito e desenvolvimento. que corresponde os requisitos de cada cliente.'
    },
    {
        title: 'Responsive',
        text: 'Nós também priorizamos a responsividade em todos os nossos projetos. Nossos designs são desenvolvidos para serem totalmente responsivos, adaptando-se automaticamente a uma variedade de dispositivos e tamanhos de tela, incluindo smartphones, tablets, laptops e desktops. Isso garante que a experiência do usuário seja consistente e otimizada, independentemente do dispositivo que estão usando. Além disso, testamos rigorosamente nossos designs em uma variedade de dispositivos e navegadores para garantir a máxima compatibilidade e funcionalidade em todos os cenários de uso.',
        img: img2,
        container: <Platafoms />,
        subtitle: 'platafoms',
        subtext: 'desenvolvemos em todas as plataformas, alem de sistemas operacionais para desktop, web e mobile'
    },
    {
        title: 'Simple',
        text: 'Em nosso processo de desenvolvimento de software, priorizamos a colaboração contínua com o cliente, desde o planejamento até a entrega final. Isso inclui uma comunicação ativa e regular, iterando nos designs com base no feedback do cliente e garantindo transparência em todas as etapas. Após o desenvolvimento, realizamos testes rigorosos para garantir a qualidade do software, compartilhando os resultados com o cliente para revisão e aprovação. Por fim, entregamos o produto final e fornecemos suporte contínuo, garantindo que as necessidades do cliente sejam atendidas além da conclusão do projeto.',
        img: img3,
        container: <Workflow />,
        subtitle: 'workflow',
        subtext: 'Fluxo de trablalho, como é apresentada o passo a passo do nosso desenvovimento de técnologias.'
    }
]

export default tabs
