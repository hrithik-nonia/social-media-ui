import Header from "./component/header";
import Footer from "./component/footer";
import Sidebar from "./component/sidebar";
import MainSection from "./component/mainSection";
function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <div className="d-flex flex-grow-1">
          <Sidebar />

          <main className="flex-grow-1 p-3 bg-light">
            <h4>
              <MainSection></MainSection>
            </h4>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
