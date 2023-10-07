const fetchData = {
  method: "GET",
  url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${
    import.meta.env.VITE_API_KEY
  }&maxResults=50`,
};
const searchResults = {
  method: "GET",
  url: `https://youtube.googleapis.com/youtube/v3/search?&key=${
    import.meta.env.VITE_API_KEY
  }`,
  params: {
    part: "snippet",
    maxResults: 20,
    q: "hello",
  },
};

const getTags = {
  method: "GET",
  url: "https://youtube-tags-generator.p.rapidapi.com/tags",
  params: {
    keyword: "Email Marketing",
  },
  headers: {
    "X-RapidAPI-Key": "79675575c1msh7435294a3fc8a37p19f42djsn0cb9621466f6",
    "X-RapidAPI-Host": "youtube-tags-generator.p.rapidapi.com",
  },
};

export { getTags, fetchData, searchResults };
