const API_KEY = '078c2d85b30fb53f6105458366f8ff43';
const URL = 'https://api.mediastack.com/v1/news?countries=gb&categories=sports';
let REQUEST_LIMIT = 20;
let request_offset = REQUEST_LIMIT;

export async function fetchNews(limit) { 
    const news = [];

    while(news.length !== limit) { 
        const data = await fetchSomeNews(REQUEST_LIMIT, request_offset);
        console.log("limit: ", REQUEST_LIMIT, " offset: ", request_offset);
        console.log(data);

        data.map((article) => { 
            if(news.length >= limit) return;
            if(article.image !== null) news.push(article);
        })

        request_offset = request_offset + REQUEST_LIMIT;
    }

    return formatNewsData(news);
}

async function fetchSomeNews(limit, offset) {
    const url = URL + `&access_key=${API_KEY}&limit=${limit}&offset=${offset}`;
    console.log(url);

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch news');
        }

        return data.data;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

function formatNewsData(articles) {
    return articles.map((article, index) => {
        const timePassed = calculateTimePassed(new Date(article.published_at));
        return {
            id: `${article.source || 'unknown'}-${index}`,  
            img: article.image || '',  
            timePassed,
            title: article.title || 'No title available',
            type: article.source || 'Unknown source',
        };
    });
}

function calculateTimePassed(publishedDate) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - publishedDate) / 1000);

    const timeIntervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
    ];

    for (let interval of timeIntervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
}
