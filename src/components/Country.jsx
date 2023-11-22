//TODO Realizar una petición al endpoint https://restcountries.com/v3.1/name/colombia y pintar la información del pais, como la bandera, el nombre, la poblacion y capital
import axios from 'axios'
import { useEffect, useState } from "react";
const Country = () => {
    const [country, setCountry] = useState(null)
    console.log(country)
    useEffect(() => {
      axios
      .get("https://restcountries.com/v3.1/name/mexico")
      .then(( {data} ) => setCountry(data[0]))
      .catch((err) => console.log(err));
    
    }, [])

  return (
    <div>
        <img src={country?.flags.svg} alt="" />
        <h2>Nombre oficial:{country?.name.official}</h2>
        <p>Población: {country?.population}</p>
        <span>Capital: {country?.capital}</span>
    </div>
  )
}
export default Country