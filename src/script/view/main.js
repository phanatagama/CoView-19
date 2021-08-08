import '../component/container-box.js';
import '../component/search-bar.js';
import DataSource from '../data/DataSource.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const containerBoxElement = document.querySelector("container-box");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchCountry(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        containerBoxElement.items = results;
    };

    const fallbackResult = message => {
        containerBoxElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;