import { Elysia } from 'elysia';
import { scrapeAmazon } from './scraper/amazonScraper';

const app = new Elysia();

// Endpoint para buscar produtos na Amazon com base em uma palavra-chave
app.get('/api/scrape', async ({ query }) => {
    const keyword = query.keyword;
    if (!keyword) {
        return { error: 'Palavra-chave é necessária' };
    }

    try {
        const products = await scrapeAmazon(keyword);
        return { products };
    } catch (error) {
        return { error: 'Falha ao buscar os dados' };
    }
});

app.listen(3000);
