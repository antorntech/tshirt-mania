import { useEffect, useState } from "react";

const useTShirts = () => {
  const [tshirts, setTShirts] = useState([]);
  useEffect(() => {
    fetch("tshirt.json")
      .then((res) => res.json())
      .then((json) => setTShirts(json));
  }, []);
  return [tshirts, setTShirts];
};

export default useTShirts;
