//page
import Page from "./components/Page"

//header
import Header from "./components/Header"
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";

//main
import Main from "./components/Main";
import Steps from "./components/Steps/Steps";

function App() {
  return <Page>
    <Header>
      <Navigation />
      <Hero />
    </Header>

    <Main>
      <Steps/>
    </Main>
  </Page>;
}

export default App;
