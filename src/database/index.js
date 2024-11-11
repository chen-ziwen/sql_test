import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         email: "Nanxi@gmail.com",
    //         name: "南希",
    //         nick_name: "Nanxi"
    //     }
    // });
    // await prisma.user.update({
    //     where: {
    //         email: "anni@gmail.com"
    //     },
    //     data: {
    //         email: "Anni@gmail.com",
    //     }
    // })

    const users = await prisma.user.findUnique({
        where: {
            email: "Nuowa@gmail.com"
        }
    })

    console.log(users);
}

main().catch(e => {
    console.error(e)
}).finally(async () => {
    await prisma.$disconnect();
})