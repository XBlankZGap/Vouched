const url = 'https://real-time-amazon-data.p.rapidapi.com/best-sellers?category=software&type=BEST_SELLERS&page=1&country=US';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0fe013526emsh1277669536c7192p1ea6e3jsn10cbd6a273ac',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}