import React from "react";
import preloader from '../../../access/preloader.gif'
import style from "../../Users/Users.module.css";
let Preloader=(props)=>{
    return <div>
        <img className={style.imgUrl} src={preloader}/>
    </div>
}
export default Preloader;