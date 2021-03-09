import React, {useState,useEffect} from 'react';
import Card from '../components/card';
import useModal from "../components/modal/modalhook";
import Modal from "../components/modal/modal";
import axios from "axios";
import AddOffer from './addoffer';

import {URL} from "../urlapi";
interface Offer {

    title:string,
    image:string,
    price:number
}


 const Home: React.FC = () =>  {


     const [offers,setOffers] = useState<Offer[] | null > ([])
     const [loading,setLoading] = useState<boolean> (false)

     const { isShowing, toggle } = useModal();





     const getOffers = async () => {

        setLoading(true)
         const result = await axios.get(URL+'/api/offers', {
         })

         setOffers(result.data);
         setLoading(false)
     };

     useEffect(() => {

         getOffers()

     }, []);
            return (

                <div className="home">

                    {loading ?

                        <h4>Chargement...</h4>
                    :

                        <div className={'cardholder'}>


                            {
                                offers != null && offers.map((u,i) =>

                                    <Card key={i} pos={i} title={u.title} image={u.image} price={u.price}/>

                                )
                            }

                            <div className={"addcard"}
                                 onClick={
                                     toggle}

                            >
                                <div>
                                    <span>+ Créer une <br/>  nouvelle offre</span>
                                </div>
                            </div>

                            <Modal isShowing={isShowing} hide={toggle} title={"créer une nouvelle offre"} >

                                <AddOffer hide={toggle}  />

                            </Modal>


                        </div>



                    }

                </div>

            );
        }

export default Home;


