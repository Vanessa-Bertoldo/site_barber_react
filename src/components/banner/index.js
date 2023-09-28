import "./banner.css";

export default function Banner(){
    return(
        <section id="hero" class="d-flex align-items-center justify-content-center">
            <div class="container" data-aos="fade-up">
                <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div class="col-xl-6 col-lg-8">
                        <h1>A melhor barbearia de BH<span>!</span></h1>
                        <h2>A mais de 20 anos no mercado de hardware</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}