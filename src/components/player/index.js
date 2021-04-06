import {  useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from "axios";

const ApiResponsePlayer = () => {
    let { id } = useParams();
    const riotKey = process.env.REACT_APP_API_KEY;
    const defaultState ={
        isSet: false
    }

    console.log(id)

  return(id);
}

export { ApiResponsePlayer };
