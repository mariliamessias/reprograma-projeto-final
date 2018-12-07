import React, { Component } from 'react';
import Hug from '../Box/hug.gif'
import Blocos from '../Box/blocos.png'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
import Ansiedade from '../Box/ansiedade1.jpg';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './Box.css';
class Box extends Component{
  constructor(props) {
    super(props)
  }

  render(){

    return (
    <div className={this.props.className}>
      {(this.props.className==='box1')? 
        <div className="conteudo">

         <section className="secao__1">
           <h1>Está cansado(a) de conversar com as "paredes"?</h1>
           <p></p>
           <p>Sabe quando você não está legal, mas prefere não falar nada para ninguém, ou fala mas a resposta não é efetiva e você continua se sentindo mal?</p>
           <p>As vezes só precisamos desabafar, conversar com alguém sobre algo que aconteceu no nosso dia, um pensamento que te perturba ha tempos, mas você acha que é normal ou que ninguém entenderia. </p>
           
           </section>                    

       </div>

       : null
      }
      {(this.props.className==='box2')? 
        <div className="conteudo">
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
        <div className="conteudo">
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
        <div className="conteudo">

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
        <div className="conteudo">

        <section className="secao1_5">
           <h1>Se você está aqui é porque conhece alguém que solta frases aleatórias como se obtivesse todo o conhecimento do mundo, "querendo ajudar":</h1>
           <p></p>
           <p>Nós acreditamos no conceito de colaboração e por isso, a nossa plataforma funcionará com base em pessoas tecnicamente habilitadas disponíveis para fornecer um primeiro contato e auxílio de forma gratuita a quem precisar, no passo de um click.</p>
          </section>                      
    
       </div>

       : null
      }
      {(this.props.className==='box6')?
      <div className="conteudo1"> 
        <div className="conteudo_">

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
             <p>Você se cadastrará na nossa plataforma, e a partir daí poderá dar conselhos de forma anônima respondendo as mensagens que chegarão em sua caixa de entrada.</p>
            <p>Pedimos bom senso, e cautela nos aconselhamentos, lembre-se que pode se tratar do primeiro contato das pessoas com um profissional da área. Que não substitui uma consulta psicológica e psiquiátrica.</p>
            <p>Caso tenha dúvidas de como proceder, recomendamos ler as políticas da nossa plataforma, clicando aqui.</p>
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
              <p>Não prometemos resolver seus problemas, mas assim como informamos anteriormente, pretendemos ajudar de maneira mais efetiva.</p>
              <p>Por isso preparamos para você uma plataforma que te proporcionará ter um diálogo saudável, no caráter de aconselhamentos junto a um especialista. Toda comunicação será feita via chat de mensagens, a forma mais segura e prática para te proporcionar liberdade para falar o que sente.</p>
               <h5>Lembre-se, essa plataforma não substitui uma consulta presencial a um especialista!</h5>
               </BackSide>
           </Flippy>
        
        
        </section>
       </div>
      
         <button className="bConversar" type="button">Vamos Conversar?</button>
      </div>
       : null
      }       
      </div>
    )
  }
}

export default Box
