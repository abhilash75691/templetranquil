import { temple } from "../models/temple.js";

export const CreateTemple = async (req, res) => {
    try {
        const { description, id } = req.body;
        if (!description || !id) {
            return res.status(401).json({
                message: "Fileds are require",
                success: false
            })
        };
        await temple.create({
            description,
            userId:id
        })
        return res.status(201).json({
            message:"temple created successfully",
            success:true,
        })
    } catch { error } {
        console.log(error);
    }
}