import rooms from '../assets/data/rooms.json';

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export type Room = {
    id: string;
    hostBy: string;
    displayName: string;
    imageUrls: Array<string>;
    cover: string;
    bed: string;
    colors: Array<string>;
    currency: string;
    price: string;
    description: string;
    people: string;
};

export const fetchRooms = async (params: any) => {
    await sleep(300);
    // console.log(params);
    return new Promise((resolve) => {
        resolve({
            data: rooms as Array<Room>,
            message: 'success',
        });
    });
};
const api = { fetchRooms };
export default api;
