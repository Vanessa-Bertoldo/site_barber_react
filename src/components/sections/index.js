import React from "react";
import "./sections.css";


export default function Section(){
    return(
        <main>
            <section id="about" class="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 order-1 order-lg-2">
                                <img src="../../../assets/images/pexels-thgusstavo-santana-2062463.jpg" class="img-fluid" alt=""/>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                                <h3>Manutenção em Pc, Mac, Notebook & etc...</h3>
                                <p class="fst-italic">
                                <img src="../../../assets/images/pexels-thgusstavo-santana-2062463.jpg" class="img-fluid" alt=""/>
                                </p>
                            
                            </div>
                        </div>
                    </div>
            </section>
        </main>
        
    )
}