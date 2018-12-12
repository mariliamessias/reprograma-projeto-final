import React, { Component } from 'react';
import Hug from '../Box/hug.gif'
import YouTube from 'react-youtube';
import Chat from '../Box/chat.png';
import Book from '../Box/book.png';
import Lupa from '../Box/lupa.png';
import { Link, withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Ansiedade from '../Box/ansiedade1.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Box.css';
//import './Box.scss';
class Box extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return (

    <div className={this.props.className}>
      <video playsInline autoPlay muted loop> >
        <source src="https://staging.coverr.co/s3/mp4/Lonely-Chair.mp4" type="video/mp4" />
        teste
        </video>
      {(this.props.className==='box1')? 
        <div className="conteudo__">

         <section className="secao__1">
           <h1>Está cansado(a) de conversar com as "paredes"?</h1>
           <p></p>
           <p>Sabe quando você não está legal, mas prefere não falar nada para ninguém, ou fala mas a resposta não é efetiva e você continua se sentindo mal?</p>
           <p>As vezes só precisamos desabafar, conversar com alguém sobre algo que aconteceu no nosso dia, um pensamento que te perturba ha tempos, mas você acha que é normal ou que ninguém entenderia. </p>
          </section>                    
          <button type="button" className="buttonFixo">Next</button>
       </div>

       : null
      }
      {(this.props.className==='box2')? 
        <div className="conteudo__">
         <section className="secao1_2">
         <Flippy
               
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
               // if you pass isFlipped prop component will be controlled component.
               // and other props, which will go to div
               style={{ width: '100%', height: '100%' }}   
             >
             <FrontSide className="FrontSide_2" >
             <img className ="ansiedade" src={Ansiedade} />

             </FrontSide>
             <BackSide className="BackSide_2">
              <h1>...</h1>
               <p>Você já parou e refletiu sobre o que sente, o que pensa e o que faz todos os dias?</p>
             </BackSide>
           </Flippy>
        
          </section>                    
        
         <section className="secao2_2">

          <h1>Já pensou se isso que você sente ou que alguém que você conhece sente, pode não ser frescura?</h1>
           <p></p>
           <p>Existem atualmente inúmeras doenças psicológicas graves, que devem ser levadas a sério. Tais como os dados  REAIS abaixo demonstram:</p>
           <p>A depressão afeta 4,4% da população mundial e 5,8% dos brasileiros, segundo dados da OMS. Brasil é o país com maior prevalência de ansiedade no mundo: 9,3%.</p>
           <p>Ainda segundo a OMS, o número de pessoas com transtornos de ansiedade era de 264 milhões em 2015, com um aumento de 14,9% em relação a 2005. A prevalência na população é de 3,6%. É importante observar que muitas pessoas têm tanto depressão quanto transtornos de ansiedade.</p>
           <p>Quase um em cada três adolescentes brasileiros sofre de transtornos mentais comuns (TMC), caracterizados por tristeza frequente, dificuldade para se concentrar ou para dormir, falta de disposição para tarefas do dia a dia, entre outros sintomas. Se não tratado, um problema desse tipo pode evoluir para distúrbios mais sérios.</p>
           <h6>Fontes: https://g1.globo.com e https://oglobo.globo.com </h6>
           </section>
       </div>

       : null
      }
      {(this.props.className==='box3')? 
        <div className="conteudo__">
         <section className="secao1_3">
          <h2>Para qualquer caso de doença diagnosticada ou não, antes de qualquer coisa, o ideal é se informar.</h2>
          <p></p>
          <p>Só reclamar ou ficar chateado(a) com as coisas não resolve. Se você sente que precisa de ajuda mas não sabe com quem contar ou acredita que alguém precise de ajuda, achamos um bom primeiro passo assistir esse vídeo para entender melhor alguns aspectos mais técnicos.</p>
          <h6>Fontes: https://youtu.be/EIVpJt2Po0c e https://www.holiste.com.br/</h6>
          </section>                    
        
         <section className="secao2_3">
              <ReactPlayer url='https://www.youtube.com/watch?v=EIVpJt2Po0c' width='100%' height="100%" />
          </section>

       </div>

       : null
      }

      {(this.props.className==='box4')? 
        <div className="conteudo__">

         <section className="secao1_4">
           <h1>Parou para pensar que: <i>talvez você não estivesse aqui se algum veículo de mídia não tivesse te mostrado algum dado alarmante?</i></h1>
           <p></p>
           <p>Acreditamos que se você chegou aqui, entende que só olhar não resolve. Achar que não é doença, que é coisa da idade, não resolve nenhum problema, só cria mais. Pensando nisso, o que você acha de fazer algo efetivo para salvar o dia ou a vida de alguém/sua?</p>
            <p>Não precisa nem responder...</p>
            <p>A <b>QUER UM CONSELHO? </b>está com você nessa missão, e juntos vamos conseguir ajudar de forma efetiva a mudar a vida das pessoas, porque sim, nós nos importamos.</p>
          </section>                    
        
         <section className="secao2_4">
         <img className ="gif" src={Hug} />
         <h6>Fonte:https://giphy.com/gifs/hug-studio-ghibli-hayao-miyazaki-14aBJO7py75MD6</h6>
        </section>
       </div>

       : null
      }

       {(this.props.className==='box5')? 
        <div className="conteudo__">

        <section className="secao1_5">
                    
           <h1>A <b>"QUER UM CONSELHO?"</b> acredita que a colaboração pode salvar vidas.</h1>
           <p></p>
           <p>Nossa plataforma baseia-se no conceito de aconselhamentos gratuitos, e tem a finalidade de permitir que as pessoas conversem sobre o que sentem com um especialista, para desmificar alguns conceitos sobre consultas psicológicas/psiquiátricas, ou seja, de maneira informal e descontraída, tal como os aplicativos de mensagem que possuem instalados em seus celulares. </p>
           <p>A partir do momento que existe um conselheiro e um aconselhado, existe uma pré-consulta, isso significa que a plataforma nunca irá substituir uma consulta real e presencial.</p>
           <p>Possuímos normas rígidas e bem definidas que irão garantir segurança e integridade da conversa entre ambas as partes, respeitando-se as leis e o que o Conselho determina aos profissionais na área.</p>
           <p>Recomendamos que após finalizar seu cadastro, leia com calma as normas e termos da nossa plataforma.</p>
          </section>                      
    
       </div>

       : null
      }
      {(this.props.className==='box6')?
      <div className="conteudo__box6"> 
        <div className="conteudo__box6-sub">

         <section className="secao1_6">

          <Flippy
               
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
               // if you pass isFlipped prop component will be controlled component.
               // and other props, which will go to div
               style={{ width: '100%', height: '100%' }}   
             >
             <FrontSide className="FrontSide_3" >
             <h1>É profissional da área da Psicologia ou Psiquatria?</h1>
             </FrontSide>
             <BackSide className="BackSide_3">
            
            <p>Contamos com seu bom-senso e profissionalismo para dar bons conselhos. Para utilizar nossos serviços, será necessário criar uma conta e informar o seu número de registro da profissão.</p>
            <p>Em seguida você será direcionado a responder um aconselhado.</p>
              </BackSide>
           </Flippy>

         </section>                    
        
         <section className="secao2_6">
        
         <Flippy
               
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
               // if you pass isFlipped prop component will be controlled component.
               // and other props, which will go to div
               style={{ width: '100%', height: '100%' }}   
             >
             <FrontSide className="FrontSide_4" >
             <h1>Chegou até aqui e entende que precisa conversar com alguém?</h1>
             </FrontSide>
             <BackSide className="BackSide_4">
              <p>Não prometemos resolver todos os problemas, mas sim ajudar da melhor maneira que pudermos.Sinta-se livre para falar o que sente, pois o especialista com quem irá conversar tem identidade anônima.</p>
              <h5>Lembre-se, essa plataforma não substitui uma consulta presencial a um especialista!</h5>
              </BackSide>
           </Flippy>
        
        
        </section>
       </div>
        
         <Link to="/login" className="buttonConselho">
            QUER UM CONSELHO?
         </Link>
        
      </div>
       : null
      }       

     {(this.props.className==='box7')? 
        <div className="conteudo__box7">
          <div className="conteudo__box7-sub">
            <section className="secao1_7">
              <div className="conteudo__box7-sub-section">
                <div className="conteudo__box7-sub-section-container1">
                <img className ="image__box7" src={Chat} />
                </div>
                <div className="conteudo__box7-sub-section-container2">
                    <h3>Chat</h3>
                    <p>Nossa plataforma proporciona uma experiência bidimensional, entre o aconselhado e o conselheiro, tal como uma conversa em um aplicativo de celular.</p>
                </div>
              </div>
            </section>      
            <section className="secao2_7">
              <div className="conteudo__box7-sub-section">
              <div className="conteudo__box7-sub-section-container1">
              <img className ="image__box7" src={Lupa} />
              </div>
              <div className="conteudo__box7-sub-section-container2">
                  <h3>Busca por clínicas/consultórios</h3>
                    <p>Proporcionamos aos usuários a busca por clínicas por região do Brasil, para atendimentos de forma gratuita ou em clínicas pagar/conveniadas.</p>
              </div>
              </div>
            </section>   
            <section className="secao3_7">
              <div className="conteudo__box7-sub-section">
                <div className="conteudo__box7-sub-section-container1">
                <img className ="image__box7" src={Book} />
                </div>
                <div className="conteudo__box7-sub-section-container2">
                  <h3>Glossário e Banco de Conhecimento</h3>
                  <p>Disponibilizamos um banco de conhecimento carregado de informações pertinentes a doenças psicológicas, a tratamentos, a dicas e demais assuntos relacionados. </p>
                </div>
              </div>
            </section>   

          </div>                
         </div>

       : null
      }

      </div>
    )
  }
}

export default Box
