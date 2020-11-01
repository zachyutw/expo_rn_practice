import products from '../assets/data/products.json';

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchProducts = async (params: any) => {
    await sleep(300);
    console.log(params);
    return new Promise((resolve) => {
        resolve({
            data: products,
            message: 'success',
        });
    });
};
const productApi = { fetchProducts };
export default productApi;
