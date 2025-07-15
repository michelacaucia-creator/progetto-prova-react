import axios from 'axios';
//import { ResponseControl } from '../utils/utilsFunction';
import config from '../config';

export const baseUrl = config.baseUrl;
const baseUrlRedirect = config.baseUrlRedirect;

const api = axios.create({
  baseURL : baseUrl
});


export const wrapperRestApi  = async (endpoint, type, body) => {

   const token = sessionStorage.getItem("tokenSession");
   const config = {
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Authorization': `Bearer ${token}`
    }
  };

  const requestBody = body;
        try {
            if(type==='GET'){
              // console.log("GET")
              const response = await api.get(
                endpoint,
                {
                  ...config,
                  params : requestBody
                }
                );
                if(response.data.hasOwnProperty("list"))
                  return {"list": response.data.list};
                else 
                  return response.data;
            }
            if(type==='POST'){
                endpoint="http://localhost:8080" + endpoint;
              alert("POST" + endpoint);
              const response = await api.post(
                endpoint,
                requestBody,
                {
                  ...config
                }
              );
              return response.data;
            }
            return false;
        } catch (error) {
          // throw new Error('R0002-32');
          if (error?.response?.status === 401) {
            console.log('Errore 401: Accesso non autorizzato');
            console.log("test");

            // sessionStorage.clear();
            // window.location.href = baseUrlRedirect;

            //wrapper
            let code = sessionStorage.getItem("tokenRefresh")
            let sem = sessionStorage.getItem("semaforo_refresh")
            if(sem == "0"){ 
              sessionStorage.setItem("semaforo_refresh", "1");            
              try{
                const resRefresh = await wrapperRestApi('/api/oauth/refreshtokenentraid', 'GET', {code: code});
                console.log("res test", resRefresh)
                sessionStorage.setItem("tokenSession", resRefresh.ID_TOKEN)
                // sessionStorage.setItem("tokenRefresh", resRefresh.REFRESH_TOKEN)
                try{
                  sessionStorage.setItem("semaforo_refresh", "0");
                  const res = await wrapperRestApi(endpoint, type, body)
                  return res;
                }catch(error){
                  console.log("Error error", error)
                }
              }catch(err){
                  console.log("error", err)
              }
            }else{
              while(Number(sem) < 15 && Number(sem)> 0){
                sem = sessionStorage.getItem("semaforo_refresh")
                sem = (Number(sem)+1).toString();
                sessionStorage.setItem("semaforo_refresh", sem); 
                setTimeout(async () => {
                  sem = sessionStorage.getItem("semaforo_refresh")
                  if(sem == '0'){
                    console.log("sblocco")
                    try{
                      const res = await wrapperRestApi(endpoint, type, body)
                      return res;
                    }catch(error){
                      console.log("Error ", error)
                    }
                  }else{
                    console.log("processo bloccato")
                    if(Number(sem)>13){
                      sessionStorage.clear();
                      window.location.href = baseUrlRedirect;
                    }   
                  }
                }, 500)
              }        
            }

          }else{
            if (error?.response?.status === 400)
              throw new Error('E0001');
            if(error?.message === 'E0097')
              throw new Error('E0097');
            else if(error?.response?.data.substr(0, 1) === "E" || error?.response?.data.substr(0, 1) === "R")
              throw new Error(error.response.data)
            else
              throw new Error('E0001');
          }
        }

};

export default wrapperRestApi;

export const wrapperRestApiForFile  = async (endpoint, type, body) => {
  const token = sessionStorage.getItem("tokenSession");
  const config = {
    headers: {
        //'Content-Type': 'application/json',
        //'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    },
      responseType: 'blob'
  };

  const requestBody = body;
        try {
            if(type==='GET'){
              // console.log("GET")
              const response = await api.get(
                endpoint,
                {
                  ...config,
                  params : requestBody
                }
                );
                if(response.data.hasOwnProperty("list"))
                  return {"list": response.data.list};
                else 
                  return response.data;
            }
            if(type==='POST'){
              // console.log("POST")
              const response = await api.post(
                endpoint,
                requestBody,
                {
                  ...config
                }
              );
              return response.data;
            }
            return false;
        } catch (error) {
          // throw new Error('R0002-32');
          if (error?.response?.status === 401) {
            console.log('Errore 401: Accesso non autorizzato');
            console.log("test");

            // sessionStorage.clear();
            // window.location.href = baseUrlRedirect;

            //wrapper
            let code = sessionStorage.getItem("tokenRefresh")
            let sem = sessionStorage.getItem("semaforo_refresh")
            if(sem == "0"){ 
              sessionStorage.setItem("semaforo_refresh", "1");            
              try{
                const resRefresh = await wrapperRestApiForFile('/api/oauth/refreshtokenentraid', 'GET', {code: code});
                console.log("res test", resRefresh)
                sessionStorage.setItem("tokenSession", resRefresh.ID_TOKEN)
                // sessionStorage.setItem("tokenRefresh", resRefresh.REFRESH_TOKEN)
                try{
                  sessionStorage.setItem("semaforo_refresh", "0");
                  const res = await wrapperRestApiForFile(endpoint, type, body)
                  return res;
                }catch(error){
                  console.log("Error error", error)
                }
              }catch(err){
                  console.log("error", err)
              }
            }else{
              while(Number(sem) < 15 && Number(sem)> 0){
                sem = sessionStorage.getItem("semaforo_refresh")
                sem = (Number(sem)+1).toString();
                sessionStorage.setItem("semaforo_refresh", sem); 
                setTimeout(async () => {
                  sem = sessionStorage.getItem("semaforo_refresh")
                  if(sem == '0'){
                    console.log("sblocco")
                    try{
                      const res = await wrapperRestApiForFile(endpoint, type, body)
                      return res;
                    }catch(error){
                      console.log("Error ", error)
                    }
                  }else{
                    console.log("processo bloccato")
                    if(Number(sem)>13){
                      sessionStorage.clear();
                      window.location.href = baseUrlRedirect;
                    }   
                  }
                }, 500)
              }        
            }

          }else{
            if (error?.response?.status === 400)
              throw new Error('E0001');
            if(error?.message === 'E0097')
              throw new Error('E0097');
            else if(error?.response?.data.substr(0, 1) === "E" || error?.response?.data.substr(0, 1) === "R")
              throw new Error(error.response.data)
            else
              throw new Error('E0001');
          }
        }

};

export const wrapperRestApiForExcel  = async (endpoint, type, body) => {
  const token = sessionStorage.getItem("tokenSession");
  const config = {
    headers: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/octet-stream',
        'Authorization': `Bearer ${token}`
    }
  };

  const requestBody = body;
        try {
            if(type==='GET'){
              // console.log("GET")
              const response = await api.get(
                endpoint,
                {
                  ...config,
                  params : requestBody
                }
                );
                if(response.data.hasOwnProperty("list"))
                  return {"list": response.data.list};
                else 
                  return response.data;
            }
            if(type==='POST'){
              // console.log("POST")
              const response = await api.post(
                endpoint,
                requestBody,
                {
                  ...config
                }
              );
              return response.data;
            }
            return false;
        } catch (error) {
          // throw new Error('R0002-32');
          if (error?.response?.status === 401) {
            console.log('Errore 401: Accesso non autorizzato');
            console.log("test");

            // sessionStorage.clear();
            // window.location.href = baseUrlRedirect;

            //wrapper
            let code = sessionStorage.getItem("tokenRefresh")
            let sem = sessionStorage.getItem("semaforo_refresh")
            if(sem == "0"){ 
              sessionStorage.setItem("semaforo_refresh", "1");            
              try{
                const resRefresh = await wrapperRestApi('/api/oauth/refreshtokenentraid', 'GET', {code: code});
                console.log("res test", resRefresh)
                sessionStorage.setItem("tokenSession", resRefresh.ID_TOKEN)
                // sessionStorage.setItem("tokenRefresh", resRefresh.REFRESH_TOKEN)
                try{
                  sessionStorage.setItem("semaforo_refresh", "0");
                  const res = await wrapperRestApi(endpoint, type, body)
                  return res;
                }catch(error){
                  console.log("Error error", error)
                }
              }catch(err){
                  console.log("error", err)
              }
            }else{
              while(Number(sem) < 15 && Number(sem)> 0){
                sem = sessionStorage.getItem("semaforo_refresh")
                sem = (Number(sem)+1).toString();
                sessionStorage.setItem("semaforo_refresh", sem); 
                setTimeout(async () => {
                  sem = sessionStorage.getItem("semaforo_refresh")
                  if(sem == '0'){
                    console.log("sblocco")
                    try{
                      const res = await wrapperRestApi(endpoint, type, body)
                      return res;
                    }catch(error){
                      console.log("Error ", error)
                    }
                  }else{
                    console.log("processo bloccato")
                    if(Number(sem)>13){
                      sessionStorage.clear();
                      window.location.href = baseUrlRedirect;
                    }   
                  }
                }, 500)
              }        
            }

          }else{
            if (error?.response?.status === 400)
              throw new Error('E0001');
            if(error?.message === 'E0097')
              throw new Error('E0097');
            else if(error?.response?.data.substr(0, 1) === "E" || error?.response?.data.substr(0, 1) === "R")
              throw new Error(error.response.data)
            else
              throw new Error('E0001');
          }
        }

};

export const esportaFileFromWrapperFV = async (endpoint, type, body, fileName) => {
  try {
    const res = await wrapperRestApiForFile(endpoint, type, body); 
    // Creare un URL blob dal file ricevuto
    const url = window.URL.createObjectURL(new Blob([res]));    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName); 
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  } 
  catch(error) {
    console.error("Errore di rete:", error)
  }

  
  //window.open(fileUrl, "_blank");

};
