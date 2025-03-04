'use server'
import { PrismaClient } from "@prisma/client";
import { convertToJSObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";


export async function getProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt:'desc'}
    });

    return convertToJSObject(data);
}