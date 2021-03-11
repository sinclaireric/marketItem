import React, {useState,useContext} from 'react';
import cog from  '../images/cog.png';
import deleteicon from  '../images/delete.png';
import edit from  '../images/edit.png';
import {AxiosResponse} from "axios";
import axios from "axios";
import {URL} from "../urlapi";
import  {AppCtx} from '../App';





interface Props {

    title:string,
    image:string,
    price:number,
    pos:number
}


const Card: React.FC<Props> = (props) =>  {

  const [show,setShow] = useState<any>({})
    const [loading,setLoading] = useState<boolean> (false)
    const { deleteOffers } = useContext(AppCtx);

    const toggleAction = (id:number) => {
        setShow((prev:any) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };



      const deletecard = async (id:number): Promise<any> => {


          try {
              setLoading(true)
              const result:AxiosResponse<any> = await axios.delete(URL + '/api/offers',{data:{id}}
              )

              deleteOffers(id)
              setShow({})
              setLoading(false)

              return result.data;

          } catch(e) {
              setLoading(false)
              return e;
          }

      }




    return (

        <div className={"cardItem"}>

            <div style={{backgroundImage:"url(" + props.image + ")" , backgroundSize:'cover'}}>



            </div>


            <section>

                <span className={"title"}>{props.title}</span>

                <span className={"price"}>
                    <span className={"symbol"}>    $  </span>

                    <span className={"pricevalue"}>    {props.price}  </span>

                </span>

            </section>


            <div className={"action"} onClick={() => toggleAction(props.pos)} >
<img src={cog} height={16} width={16} />
            </div>
            {show[props.pos] ?
            <div className={"actionoptions"}>

                <span role="button" className={"flex"}> <img src={edit} height={16} width={16}  /> Modifier  </span>


                <span role="button" className={"flex"} onClick={() => deletecard(props.pos)}> <img src={deleteicon} height={16} width={16}  /> Supprimer définitivement </span>

            </div>
:
                null }


        </div>

    );
}

export default Card;