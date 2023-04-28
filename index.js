console.log("close (Suggested)/ctrl + C (Windows) to exit conversation and chat");
let conversationLog = [{ role: 'system', content: 'You are a friendly chatbot.' }];

    const { OpenAIApi, Configuration } = require('openai')
    const prompt = require('prompt-sync')();

    const chat = async () => {
        const configuration = new Configuration({
            apiKey: 'YOUR-OPENAI-API_KEY',
        })
        const openai = new OpenAIApi(configuration);

        const GPTquestion = prompt("Question : ")

        conversationLog.reverse();
        conversationLog.push({
            role: 'user',
            content: GPTquestion
        });
        
        try {
            const result = (await openai
                .createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: conversationLog,
            })).data.choices[0].message.content;

            console.log(`\n${result}\n====================`)
        } catch (error) {
            console.log(`\nERR: ${error}\n====================`);
        }

        chat();
    }
    
    chat();
