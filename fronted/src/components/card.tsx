import React, {useState} from 'react';
import cog from  '../images/cog.png';
import deleteicon from  '../images/delete.png';
import edit from  '../images/edit.png';




interface Props {

    title:string,
    image:string,
    price:number,
    pos:number
}


const Card: React.FC<Props> = (props) =>  {

  const [show,setShow] = useState<any>({})
   const toggleAction = (id:number) => {
        setShow((prev:any) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };




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


                <span role="button" className={"flex"}> <img src={deleteicon} height={16} width={16}  /> Supprimer définitivement </span>

            </div>
:
                null }


        </div>

    );
}

export default Card;