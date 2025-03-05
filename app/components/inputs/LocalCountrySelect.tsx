 // change with kenyan counties
import { KenyanCities } from "@/app/KenyanCountries";
  
  const formattedCounties = KenyanCities.map((county) => ({
    value: county.city,
    label: county.admin_name,
    flag: county.iso2,
    latlng: county.lat ? { lat: parseFloat(county.lat), lng: parseFloat(county.lng) } : null,
    region: county.city,
  }));
  
 
 const useCountries = () => {
   const getAll = () => formattedCounties;
 
  const getByValue = (label: string) => {
    return formattedCounties.find((item) => item.value === label);
  }
 
   return {
     getAll,
     getByValue
   }
 };
 
 
 
 
 export default useCountries;
 