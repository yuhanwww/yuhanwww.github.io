import {React,useState} from 'react';

const [data, setData] = useState([]);
const [done, setDone] = useState(undefined);

const Loading = () => {
  return (
    <div>Loading</div>
  )
}

export default Loading;