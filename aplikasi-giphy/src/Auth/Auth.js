export const Auth = async (search) => {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.REACT_APP_GIPHYKEY}&limit=10`;
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const authTrending = async () => {
  try {
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHYKEY}&limit=10`;
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
