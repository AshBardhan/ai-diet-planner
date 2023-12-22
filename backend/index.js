const express = require("express");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(express.json());

const configuration = new Configuration({
	apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

const mealTypeEnum = {
    BREAKFAST: 'Breakfast',
    SNACKS: 'Snacks',
    LUNCH: 'Lunch',
    PRE_WORKOUT: 'Pre-Workout',
    POST_WORKOUT: 'Post-Workout',
    DINNER: 'Dinner',
};

app.post("/gpt", async (req, res) => {
    let prompt = req.body.prompt;
    let response = await promptAI(prompt);
    res.send(response);
})

app.get('/send-weekly-meal', async(req, res) => {
    let response = await JSON.parse(fs.readFileSync('./data/sample-meal-list.json', 'utf8'));
    res.send(response);
});

app.post('/get-recipe', async(req, res) => {
    let prompt = `Share me the recipe for ${req.body.food} in HTML format with Ingredients and Directions as 'h4' titles`;
    let response = await promptAI(prompt);
    res.send(response);
});

const getRandomIndices = (range, count) => {
    let arr = [];
    while(arr.length < count){
        let r = Math.floor(Math.random() * range);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
};

const getCount = (mealType) => {
    if(mealType === mealTypeEnum.PRE_WORKOUT || mealType === mealTypeEnum.SNACKS) { return 2; }
    if(mealType === mealTypeEnum.POST_WORKOUT) { return 3; }
    return 4;
};

app.post('/send-food-alt', async(req, res) => {
    let mealType = req.body.mealType;
    let altMealList = await JSON.parse(fs.readFileSync('./data/sample-meal-alternate-list.json', 'utf8'))[mealType];
    let response = getRandomIndices(altMealList.length, 1).map(randomIndex => altMealList[randomIndex]);
    res.send(response);
});

app.post('/send-meal-alt', async(req, res) => {
    let mealType = req.body.mealType;
    let altMealList = await JSON.parse(fs.readFileSync('./data/sample-meal-alternate-list.json', 'utf8'))[mealType];
    let response = getRandomIndices(altMealList.length, getCount(mealType)).map(randomIndex => altMealList[randomIndex]);
    res.send(response);
});

let promptAI = async (prompt) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    return response.data.choices[0].text;
}



app.post("/test", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
              ${prompt}
      
              The time complexity of this function is
              ###
            `,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on the server",
    });
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server listening on port ${port}`));