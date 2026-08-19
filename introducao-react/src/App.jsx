import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import ImgCard from "./components/ImgCard.jsx";
import "./App.css"

function App() {
  return (
    <>
      <Header title="tcheibis"/>
      <Header title="hiiiii"/>

      <ImgCard caption="Imagem top"/>

      <Banner>
        <h1>Bem vindo ao meu site</h1>
      </Banner>

      <Card />

      <Footer/>

      <footer>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      </footer>
    </>
  );
}

export default App;
