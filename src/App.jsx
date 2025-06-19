import './App.css';
import Header from './assets/components/Header/Header.jsx';
import ProductLists from './assets/components/ProductsList/ProductsList.jsx';
import Navigation from './assets/components/Navigation/Navigation.jsx';
import ProductFilters from './assets/components/Filters/ProductFilters.jsx';
import { useState } from 'react';
import { getAllProducts } from './assets/data/products.js';

function App() {
  const prodotti = getAllProducts();
  const [filtroCategory, setFiltroCategory] = useState('')


  // Applica tutti i filtri ai giochi disponibili
  const prodottiFiltrati = prodotti.filter(prodotto => !filtroCategory || prodotto.category === filtroCategory)
    return (
    <>
      <Header products={prodotti}></Header>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
      <GameFilters 
        prodotti={prodotti}
        filtroCategory={setFiltroCategory}
      />
      <div className="filtered-games">
        Risultati: {prodottiFiltrati.length} / {prodotti.length}
      </div>
      {
        prodottiFiltrati.length > 0 ? (
          <GameList prodotti={giochiFiltrati}/>
        ) : (
          <div className="no-games">
            <span className="emoji">emoji</span>
            Nessun gioco trovato, prova a cambiare i filtri o la ricerca
          </div>
        )
      }
    </>
  )
}

export default App;
