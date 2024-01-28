import './assets/styles/_main.scss'
import Header from './components/header/header';
import SubHeaderComponent from './components/sub-header/sub-header';
import RouterComponent from './router/router';

function App() {

  return (
    <>
      <Header />
      <main>
        <SubHeaderComponent />
        <RouterComponent/>
      </main>
    </>
  )
}

export default App
