import { createTransport } from "nodemailer";

//creating transport to send mail
export const transport=createTransport({
    service:"gmail",
    auth:{
        user:"projectuserfullstack@gmail.com",
        pass:"krrt ivon wyys iibt"
    },
})