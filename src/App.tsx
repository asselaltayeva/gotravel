//page
import Page from "./components/Page"

//header
import Header from "./components/Header"
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

//main
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";
import Services from "./components/Services/Services";
import News from "./components/News/News";

function App() {
  return <Page>
    <Header>
      <Navigation />
      <Hero />
    </Header>

    <Main>
      <Steps/>
      <Services/>
      <News />
    </Main>
  </Page>;
}

export default App;
