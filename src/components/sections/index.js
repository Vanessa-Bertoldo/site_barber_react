import React from "react";
import "./sections.css";
import imageSectioOne from "../../images/salaoXX.jpg";
import imageBar from "../../images/barBarber.jpg";
import { Grid, Typography } from "@material-ui/core";


export default function Section(){
    return(
        <main class="marginMain fontMain">
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
        </main>
        
    )
}