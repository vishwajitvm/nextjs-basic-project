"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  //=========OLD METHOD =============
  /*const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });
      if (!res.ok) {
        setErr(true);
      }
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []); */

  //====SWR=====
  //============
  const session  = useSession() ;
  console.log(session);
  console.log("SESSION ND");

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
 const getApiUrl = "https://jsonplaceholder.typicode.com/posts" ;

  const { data, error, isLoading } = useSWR( getApiUrl , fetcher)
  

  console.log(data);
  return (
    <div className={styles.container}>
      dashboard
    </div>
  )
}

export default Dashboard
