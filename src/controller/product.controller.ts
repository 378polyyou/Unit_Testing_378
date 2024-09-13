import { Router, Request, Response } from 'express';
import { Product } from '../model/product';
const productList: Product[] = [
    {
        id: 1,
        name: 'Bombril',
        price: 8
    },
    {
        id: 1,
        name: 'Sausage',
        price: 3
    }
]
const getAll = (req: Request, res: Response) => {
    res.status(200).send(productList);
}
export default { getAll }