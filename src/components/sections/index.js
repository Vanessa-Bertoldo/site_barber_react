import React from "react";
import "./sections.css";
import imageSectioOne from "../../images/salEmpty.jpg";


export default function Section(){
    return(
        <main>
           <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                        <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={imageSectioOne} class="img-fluid" alt=""/>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                            <h3>Manutenção em Pc, Mac, Notebook & etc...</h3>
                            <p class="fst-italic">
                            Atuamos com assistência técnica, implantação de redes cabeadas e WIFI, suporte técnico em Sistemas Operacionais Windows, MacOS, Android, aplicativos e equipamentos diversos de T.I. Entre em contato, estamos à disposição para te ajudar com suas demandas na área de TI.
                            </p>
                            <ul>
                            <li><i class="ri-check-double-line"></i> Referência em concertos de MacBook´s e Imac</li>
                            <li><i class="ri-check-double-line"></i> Possuimos 5 estrelas em atendimentos pela GetNinja</li>
                            <li><i class="ri-check-double-line"></i> Serviço de BGA em máquinas profissionais</li>
                            <li><i class="ri-check-double-line"></i> Possuimos ponto fisico a mais de 20 anos</li>
                            <li><i class="ri-check-double-line"></i> Serviço de Taxi, buscamos estragado na sua casa e devolvemos concertado</li>
                            </ul>
                            <p>
                            Possuimos um time de técnicos experientes, que atuam no mercado a mais de 20 anos. Somos referência em assistência técnica e possuimos maquinário profissional e uma estrutura única para atender nossos clientes com eficiência e qualidade.
                            </p>
                        </div>
                        </div>

                </div>
            </section>
        </main>
        
    )
}