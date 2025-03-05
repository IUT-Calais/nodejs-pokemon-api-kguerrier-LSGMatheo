import{ Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../client';

export const createUser = async (req: Request, res: Response) => {
    try{
        const {
            id : id, 
            email : email, 
            password : password, 
        } = req.body;
        const crypted = await bcrypt.hash(password, 10);
        const user=await prisma.user.create({ data : {
            email,
            password: crypted,
        }});
        res.status(201).send("User créé");
    } catch (error) {
        const { email, password} = req.body;
        
        if (!email || !password ) {
            res.status(400).send("champs manquants");
            return;
        }
        
        const existingUser = await prisma.user.findFirst({
            where: { email }
        });
        
        if (existingUser) {
            res.status(400).send(" email deja utilisé");
            return;
        }
    }
};
