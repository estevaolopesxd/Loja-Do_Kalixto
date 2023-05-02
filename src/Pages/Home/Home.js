import styles from './Home.module.css'

//components
import Card from '../../Components/Card/Card'
import Container from '../../Components/Container/Container'

const Home = () => {
  return (
    <div>
      <div className={styles.home}>
        <h5 className={styles.title}>Promoções Imperdiveis</h5>

        <Container>
          <Card
            src={"https://global.cdn.magazord.com.br/magazinedecor/img/2022/11/produto/3348/img-9086-copiar-lowres-width-1000px-gigapixel.jpg?ims=fit-in/600x600"}
            title={"Cadeira"}
            text={"Botão card"}
            btnText={"Adicionar"}
          />

          <Card
            src={"https://images.tcdn.com.br/img/img_prod/775420/cadeira_escritorio_giratoria_presidente_cromada_em_madeira_1563_1_20200930105416.jpg"}
            title={"Cadeira"}
            text={"Botão card"}
            btnText={"Adicionar"}
          />

          <Card
            src={"https://img.terabyteshop.com.br/produto/g/cadeira-gamer-ninja-katana-reclinavel-suporta-ate-120kg-preto-cgn-katana-p_158772.jpg"}
            title={"Cadeira"}
            text={"Botão card"}
            btnText={"Adicionar"}
          />

          <Card
            src={"https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/i/m/img-1107_2_1.jpg"}
            title={"Cadeira"}
            text={"Botão card"}
            btnText={"Adicionar"}
          />

        </Container>


      </div>
    </div>
  )
}

export default Home