import React from "react";
//material ui
import { Grid, Typography } from "@material-ui/core";
//style
import "./sections.css";
//images
import imageSectioOne from "../../images/salaoXX.jpg";
import imageBar from "../../images/barBarber.jpg";
import imageLocal from"../../images/local.png";
import imageWhatss from "../../images/whatsApp.png";
import imageEmail from "../../images/email.png";



export default function Section(){
    return(
        <main class="marginMain fontMain fontGlobal">
           <section id="about" class="about conteiner">
                <h2 class="title"> Bem-vindo à "Barbearia Mineira" em Belo Horizonte!</h2>
                <div class="spacingGrid">
                    <Grid container spacing={2} md={12}>
                        <Grid item md={6}>
                            <img src={imageSectioOne} alt="Imagem"  class="image"/>
                        </Grid>
                        <Grid item md={6} alignVertical>
                            <Typography variant="body1" class="spacingText">
                                Na Barbearia Mineira, celebramos a tradição e a modernidade, 
                                oferecendo serviços de barbearia premium em um ambiente acolhedor e amigável. 
                                Situada no coração de Belo Horizonte, nossa barbearia é o destino perfeito para homens 
                                que valorizam um visual impecável e um momento de relaxamento.
                            </Typography>
                            <Typography class="spacingText">
                                Agende sua visita hoje e experimente o melhor em serviços de barbearia em Belo Horizonte. 
                                Estamos ansiosos para recebê-lo na Barbearia Mineira, onde a tradição se encontra com a modernidade em cada corte.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div >
                    <Grid container spacing={2} md={12} >
                        <Grid item md={6}>
                            <Typography variant="body1" class="spacingText alignVertical"> 
                                Conheça o nosso openBar exclusivo para clientes. 
                                Nada como um corte impecável acompanhado de um bom drink para completar a experiência. Brindemos à sua elegância!
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <img src={imageBar} alt="Imagem"  class="image"/>
                        </Grid>
                    </Grid>
                </div>
            </section>

            <section id="services" class="services marginMain fontMain conteiner">
                <div >
                    <div class="section-title fontGlobal">
                    <h2 class="titleNoCenter">Serviços</h2>
                    <p>Veja nossos Serviços</p>
                    </div>
                    <div class="row fontGlobal">
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch " >
                            <div class="icon-box">
                            <h4><a href="">Cortes</a></h4>
                            <p>Um corte de cabelo que realça sua aparência e estilo, feito por nossos especialistas em barbearia.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div class="icon-box">
                            <h4><a href="">Escova</a></h4>
                            <p>Experimente a transformação completa com o nosso serviço de escova profissional.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" >
                            <div class="icon-box">
                            <h4><a href="">Dia do noivo</a></h4>
                            <p>Um momento exclusivo de relaxamento e cuidados personalizados.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" >
                            <div class="icon-box">
                            <h4><a href="">Tratamento Capilar</a></h4>
                            <p>Um tratamento que revitaliza e nutre o couro cabeludo, deixando o cabelo mais saudável e brilhante.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div class="icon-box">
                            <h4><a href="">Depilação Facial</a></h4>
                            <p>Remoção de pelos faciais indesejados para um rosto limpo e suave.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" >
                            <div class="icon-box">
                            <h4><a href="">Massagem Relaxante</a></h4>
                            <p>Uma massagem relaxante para aliviar o estresse e proporcionar um momento de tranquilidade durante sua visita.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section id="contact" class="contact">
                <div class="container fontGlobal" >
                    <div class="section-title ">
                    <h2 class="titleNoCenter">Contato</h2>
                    <p>Canais de Contato</p>
                                    

                    </div>

                    <div>
                    <iframe class="frameMap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1193885.7954959522!2d-42.689414046472926!3d-21.914736267077956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1695917358552!5m2!1sen!2sbr" width="600" max-height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div class="row mt-5">

                    <div class="col-lg-4">
                        <div class="txtImage spacingBott">
                            <img src={imageLocal} alt="Ícone" class="imgWithTextR"/>
                            <p><h3>Endereço</h3>Rua xxxxx xx xxxx xxxx, xx, xxx xxx</p>
                        </div>
                        <div class="txtImage spacingBott">
                            <img src={imageEmail} alt="Ícone" class="imgWithTextR"/>
                            <p><h3>E-mail</h3>xxxxxx@gmail.com</p>
                        </div>
                        <div class="txtImage">
                            <img src={imageWhatss} alt="Ícone" class="imgWithTextR"/>
                            <p><h3>WhatssApp</h3>(xx) xxxxx-xxxx</p>
                        </div>

                    </div>
                    <div >
                        <iframe src="" width="640" height="1018" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
                    </div>
                    </div>
                </div>
            </section >
        </main>
        
    )
}