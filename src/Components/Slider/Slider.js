//css
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider'> 

            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.liderinteriores.com.br/wp-content/uploads/2015/11/banner-promocoes-quinzena-colchoes-desktop.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://confortoparacasa.com.br/wp-content/uploads/2019/08/01.-Banner-Colch%C3%A3o-Imperatore-min.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.liderinteriores.com.br/wp-content/uploads/2015/11/banner-promocoes-quinzena-colchoes-desktop.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider