export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '18844a8da2msh27c769207f86b64p19792cjsn617d2abbcd80',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}