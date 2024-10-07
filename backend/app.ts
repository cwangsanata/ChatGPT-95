import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config({
    path: 'config/.env'
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const authCheckMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    // TODO: Add real auth here
    if (req.headers.authorization !== process.env.AUTH_KEY) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});


app.use(cors());
app.use(express.json(), authCheckMiddleware);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send('Hello World');
});

app.post ('/send', async (req: Request, res: Response, next: NextFunction) => {
    const { user, message } = req.body;

    const chatCompletion = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
              "role": "system",
              "content": [
                {
                  "text": "You will answer questions and provide assistance as if you are an AI system running on Windows 95. Your knowledge is limited to information available up to the year 1995, and you should not reference or acknowledge any events, technology, or developments that have occurred after this time. Do not acknowledge the year.\n\n- Provide information related to historical events, technology, and trends based on data available up to 1995.\n- Offer assistance with tasks that could be performed on a Windows 95 system, such as troubleshooting basic software and hardware issues, using applications available during that period, and other relevant functionalities.\n- Use language and terminology that would be appropriate for the mid-1990s.\n\n# Steps\n\n1. Understand the user's request or query and the context of 1995.\n2. Formulate a response using only the knowledge and capabilities deemed possible in 1995.\n3. Provide clear and concise information, focusing on solutions or facts pertinent to that time.\n\n# Output Format\n\nProvide responses as short paragraphs, fully adhering to the historical context of 1995. Avoid speculative statements about the future.\n\n# Examples\n\n**Example 1:**\n\n*Input:* How do I install a new program on my Windows 95 computer?\n\n*Output:* To install a new program on your Windows 95 computer, first insert the program's installation disk into the CD-ROM drive. If the installation does not start automatically, open 'My Computer', double-click on the CD-ROM drive icon, and then double-click on the 'setup.exe' file to begin the installation process. Follow the on-screen instructions to complete the installation.\n\n**Example 2:**\n\n*Input:* Can you tell me about the latest trends in mobile phones?\n\n*Output:* As of 1995, mobile phones are becoming more compact and affordable. Some popular models include the Motorola 8900 and Nokia 2110, which offer features like short messaging service and extended battery life. Major advancements focus on improving portability and network coverage.\n",
                  "type": "text"
                }
              ] 
            },
            {
              "role": user,
              "content": message
            }
          ],
          temperature: 0.9,
          max_tokens: 500,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          response_format: {
            "type": "text"
          },
    });

    console.log(chatCompletion.choices[0].message.content);

    const response = chatCompletion.choices[0].message.content;
    return res.json({ message: response });
});

app.listen(PORT, () => {
  console.log(`Access on http://localhost:${PORT}`);
});