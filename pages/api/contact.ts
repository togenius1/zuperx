import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { insertContact } from '@/helpers/db-util';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<CustomResponse>
) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ errorMessage: 'Invalid input.' });
        }

        // Store in database
        const newMessage: newMessage = {
            id: '',
            email,
            name,
            message,
        };

        try {
            const result = await insertContact(newMessage);

            newMessage.id = String(result?.id);

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', // Gmail's SMTP server
                port: 587, // for Gmail
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.username,
                    pass: process.env.app_pass,
                },
            });

            // Send email
            const mailOptions = {
                from: email,
                to: 'togenius1@gmail.com',
                subject: 'Finaci user',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
        } catch (error) {
            res.status(500).json({ errorMessage: 'Storing message failed!' });
            return;
        }

        res.status(201).json({
            message: 'Successfully stored message!',
            feedback: newMessage,
        });
    }
}

export default handler;

//############ Type #################
interface newMessage {
    id: string;
    email: string;
    name: string;
    message: string;
}

type FeedbackType = {
    email: string;
    name: string;
    message: string;
};

type SuccessResponse = {
    message: string;
    feedback: FeedbackType;
};

type ErrorResponse = {
    errorMessage: string;
};

type CustomResponse = SuccessResponse | ErrorResponse;
