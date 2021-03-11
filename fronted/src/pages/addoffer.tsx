import React,{useState,useContext} from 'react';
import axios,{AxiosResponse} from "axios";
import {URL} from "../urlapi";
import  {AppCtx} from '../App';

export interface offerAction {
    offer: string;
}

export interface Addprops {

    hide:any,

}


 const AddOffer: React.FC<Addprops> = (props) => {
    const [title,setTitle] = useState<string>();
    const [price,setPrice] = useState<number>();
     const [loading,setLoading] = useState<boolean> (false)
     const [loadingImg,setLoadingImg] = useState<boolean> (false)

     const [image,setImage] = useState<string | null>();
     const { addOffer } = useContext(AppCtx);


     const changeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
         setTitle(e.target.value);
     };

     const changePrice = (e: React.ChangeEvent<HTMLInputElement>): void => {

         setPrice(parseInt(e.target.value));

     };


     const changeFile = function (e: React.ChangeEvent<HTMLInputElement>) {
         const fileList = e.target.files;

         if (!fileList) return;


         const formData = new FormData();
         formData.append('file', fileList[0]);
         formData.append('upload_preset', 'p8ppgwkh');

         const options = {
             method: 'POST',
             body: formData,
         };

         setLoadingImg(true)
         return fetch('https://api.cloudinary.com/v1_1/dbxswktcp/image/upload', options)
             .then(res => res.json())
             .then(res => {
                     setImage(res.secure_url)
                 setLoadingImg(false)
             })
             .catch(err => setLoading(false));




     };






     const addOfferForm = async (): Promise<offerAction> => {


         try {
             setLoading(true)
             const result:AxiosResponse = await axios.post(URL + '/api/offers',
                 {title,price,image}
             )
             setLoading(false)

             props.hide()

             addOffer(result.data)
             return result.data;


         } catch(e) {
             setLoading(false)
             return e;
         }

     }

     return(


        <form className={"addform"} >

            {loadingImg ?

                <h4 style={{width:'100%',textAlign:'center',marginTop:150}}>Envoi de l'image ...</h4>

                :
                loading ?
                    <h4 style={{width:'100%',textAlign:'center',marginTop:150}}>Envoi de l'offre ...</h4>

                    :

                <>
                    <div className={"img"}>
                        {image != null &&
                        <img src={image} height={100} width={100} />
                        }

                        <input type="file" className="imginput" onChange={ (e) => changeFile(e)} />
                    </div>

                    <input placeholder={"titre"} value={title} onChange={changeTitle} />
                    <input placeholder={"prix"}  value={price} onChange={changePrice} />

                    <button onClick={addOfferForm}> Ajouter une offre </button>

                </>


            }


        </form>

    );



}


export default AddOffer;