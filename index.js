import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Connect the client
    await prisma.$connect()
    await prisma.subject.create({
        data: {
            name: 'DBMS',
            branch: 'BtechCS',
            sem: 4
        },
    },
    )
}

main()
    .then(async () => {
        console.log("Done")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })