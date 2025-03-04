import {Prisma, PrismaClient} from '@prisma/client';
import sampleData from './sample-data';


async function seed() {
    const prisma = new PrismaClient();

    await prisma.product.deleteMany();
    await prisma.product.createMany({data: sampleData.products});

    console.log('Seeding complete');
}

seed();

