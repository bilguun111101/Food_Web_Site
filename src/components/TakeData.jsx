import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useTopTittleContext } from "../context";

const useGetData = (path) => {
  const [data, setData] = useState([]);
  const { setLoading } = useTopTittleContext();
  const connect = async () => {
    try {
      const response = await getDocs(collection(db, path));
      response.forEach((doc) => {
        setData((old) => {
          return [...old, { data: doc.data().data, uid: doc.id }];
        });
      });
    } catch (err) {}
  };
  useEffect(() => {
    connect();
  }, []);
  setLoading(true);
  return data;
};

export default useGetData;
