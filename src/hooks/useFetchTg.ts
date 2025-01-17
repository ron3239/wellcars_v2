'use client';
import { useEffect, useState } from 'react';

export function useFetchTg() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ron323');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const tgData = await response.json(); 
        setData({ user: tgData }); 
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  // console.log(data); 

  return data;
}
import { init } from '@telegram-apps/sdk';

export async function useFetchTg(){
    const [data,setData] = useState({})

    useEffect( () => {
        try{
            const tgData = init()
            if (!tgData) return
            setData(tgData)
        }catch(e){
            console.log(e)
        }

    },[])

    return data
}


