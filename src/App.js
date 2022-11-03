import Header from './header/Header';
import Footer from './footer/Footer'
import SearchArticle from './articles/SearchArticle';
import Article01 from './articles/Article01';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <article>
          <SearchArticle />
        </article>
        <article>
          <Article01 />
        </article>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
