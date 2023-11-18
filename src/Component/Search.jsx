import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "./Api"

const Search = ({ onSearchChange }) => {

    const [Search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)

            .then(response => response.json())
            .then((response) => {
                // console.log(responses)
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch((err) => console.log(err))
    };  
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    };
    return (
        <AsyncPaginate placeholder="Search for city"
            debounceTimeout={2000}
            value={Search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;








// import React, { useState } from 'react'
// import { AsyncPaginate } from "react-select-async-paginate"
// import { GEO_API_URL, geoApiOptions } from "./Api"

// const Search = ({ onSearchChange }) => {
//     const [Search, setSearch] = useState(null);



//     const loadOptions = (inputValue) => {
//         return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)

//             .then(response => response.json())
//             .then((response) => {
//                 return {
//                     options: response.data.map((city) => {
//                         return {
//                             value: `${city.latitude} ${city.longitude}`,
//                             label: `${city.name} ${city.countryCode}`,
//                         }
//                     })
//                 }
//             })
//             .catch((err) => console.log(err))
//     };


//     const handleOnChange = (searchData) => {
//         setSearch(searchData)
//         onSearchChange(searchData)
//     };
//     return (
//         <>
//             <AsyncPaginate placeholder="Search for city"
//                 debounceTimeout={2000}
//                 value={Search}
//                 onChange={handleOnChange}
//                 loadOptions={loadOptions}
//             />
//         </>
//     )
// }

// export default Search
