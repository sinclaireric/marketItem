import React,{useState} from 'react';
import Home from './pages/home';
import { AppContext } from "./libs/contextLib";

import {
  Route,
  Switch,BrowserRouter as Router,
} from 'react-router-dom';


import './App.scss';






interface Offer {

    title:string,
    image:string,
    price:number
}



 interface OfferContextState  {
    offers: Offer[];
    addOffer: (Offer:Offer) => void;
    addOffers: (offers:Offer[]) => void;
    deleteOffers: (id:number) => void;

};


 const contextDefaultValues: OfferContextState = {
    offers: [],
    addOffer: () => {},
    addOffers: () => {},
     deleteOffers: () => {}
};



export const AppCtx = React.createContext<OfferContextState>(
    contextDefaultValues
);

function App() {

    const [offers,setOffers] = useState<Offer[]> (contextDefaultValues.offers)

    const addOffers = (offers:Offer[]) => setOffers(offers);
    const addOffer = (offer: Offer) => setOffers((offers) => [...offers, offer]);
    const deleteOffers = (id:number) =>setOffers(offers.filter((o,i) => i != id ))

    return (



    <Router>


              <AppCtx.Provider value={{offers,addOffer,addOffers,deleteOffers}}>

          <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
              </AppCtx.Provider>


      </Router>

  );
}

export default App;
