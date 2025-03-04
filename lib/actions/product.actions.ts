'use server'
import {prisma} from '@/db/prisma'
import { convertToJSObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";


export async function getProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt:'desc'}
    });

    return convertToJSObject(data);
}

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: {
            slug: slug
        },
    })
}