import axios from 'axios';
import { JSDOM } from 'jsdom';

export async function scrapeAmazon(keyword: string) {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

    try {
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        const products: { title: any; rating: any; reviews: any; image: any; }[] = [];

        document.querySelectorAll('.s-result-item').forEach((item) => {
            const title = item.querySelector('h2 a span')?.textContent || '';
            const rating = item.querySelector('i span')?.textContent || '';
            const reviews = item.querySelector('.s-link-style')?.textContent || '';
            const image = item.querySelector('.s-image')?.src || '';

            if (title) {
                products.push({ title, rating, reviews, image });
            }
        });

        return products;
    } catch (error) {
        throw new Error('Erro ao acessar a Amazon');
    }
}
