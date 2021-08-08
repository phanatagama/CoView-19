const axios = require('axios');  
class DataSource{
    static searchCountry(keyword){
        const getKeyword = keyword.toString();
        const restrictedPattern = /[^a-zA-Z,]/g;
        const searchKeyword = getKeyword.replace(restrictedPattern, '');
        if(searchKeyword !== ""){
            return axios.get(`https://covid19.mathdro.id/api/countries/${searchKeyword}`)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(`"Country '${searchKeyword}' not found in JHU database"`) );
        } else {
            return Promise.reject(`Please insert a country name!`);
        }

    }
}

export default DataSource