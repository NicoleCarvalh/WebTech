import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import ImgCard from "./components/ImgCard.jsx";
import "./App.css"
import Jogos from "./components/Jogos.jsx";

function App() {
  return (
    <>
      <Header title="Site de assuntos aleatórios"/>

      <Jogos time="Brasil" quantJogos="3" status="Derrota"/>

      <Jogos time="Canadá" quantJogos="3" status="Vitória"/>

      <Jogos time="EUA" quantJogos="3" status="Derrota"/>

      <ImgCard caption="Imagem times"/>

      <Banner>
        <h1>Bem vindo ao meu site</h1>
      </Banner>

      <Card />

      <Footer/>

    </>
  );
}

export default App;
