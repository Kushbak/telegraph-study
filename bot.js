const { default: Telegraf } = require("telegraf")
const { default: axios } = require("axios")
const fs = require("fs")


const bot = new Telegraf('1487917134:AAHxMx9M265zKs7Gl-URvzF33oIyccT7EVg')

// ! Crypto bot 
// // Just copied code
// //api key from https://min-api.cryptocompare.com/
// const apikey = "da070e2781369c2446227b7e2cf515cdee789f3d853e03569f40c608492471dd";

// //start command handler
// bot.command('start', ctx => {
//     sendStartMessage(ctx);
// })

// //start callback query - for back to menu buttons
// bot.action('start', ctx => {
//     ctx.deleteMessage();
//     sendStartMessage(ctx);
// })

// //function to send startMessage so we don't have repeated code
// function sendStartMessage(ctx) {
//     let startMessage = `Welcome, this bot gives you cryptocurrency information`;
//     bot.telegram.sendMessage(ctx.chat.id, startMessage,
//         {
//             reply_markup: {
//                 inline_keyboard: [
//                     //each inner array in inline_keyboard represents a row
//                     //doc: https://core.telegram.org/bots/api#inlinekeyboardmarkup
//                     [
//                         { text: "Crypto Prices", callback_data: 'price' }
//                     ],
//                     [
//                         { text: "CoinMarketCap", url: 'https://coinmarketcap.com/' }
//                     ],
//                     [
//                         { text: "Bot Info", callback_data: 'info' }
//                     ]
//                 ]
//             }
//         })
// }

// //callback query handler for 'price'
// bot.action('price', ctx => {
//     let priceMessage = `Get Price Information. Select one of the cryptocurrencies below`;

//     //delete main menu message
//     ctx.deleteMessage();
//     //send new message for price page
//     bot.telegram.sendMessage(ctx.chat.id, priceMessage,
//         {
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: "BTC", callback_data: 'price-BTC' },
//                         { text: "ETH", callback_data: 'price-ETH' }
//                     ],
//                     [
//                         { text: "BCH", callback_data: 'price-BCH' },
//                         { text: "LTC", callback_data: 'price-LTC' }
//                     ],
//                     [
//                         { text: "Back to Menu", callback_data: 'start' },
//                     ],
//                 ]
//             }
//         })
// })

// //string array to input into action middleware so it will be triggered whenever any string is matched
// let priceActionList = ['price-BTC', 'price-ETH', 'price-BCH', 'price-LTC'];
// //callback query handlers for price buttons
// bot.action(priceActionList, async ctx => {
//     //extract symbol from callback data eg. BTC
//     let symbol = ctx.match.split('-')[1];

//     try {
//         //call cryptocompare API with symbol gotten from button
//         let res = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${apikey}`);
//         //store data object into a variable named data
//         let data = res.data.DISPLAY[symbol].USD;

//         //prepares message for user
//         let message =
//             `
// Symbol: ${symbol}
// Price: ${data.PRICE}
// Open: ${data.OPENDAY}
// High: ${data.HIGHDAY}
// Low: ${data.LOWDAY}
// Supply: ${data.SUPPLY}
// Market Cap: ${data.MKTCAP}
// `;

//         //delete price page
//         ctx.deleteMessage();
//         //send new message containing crypto info with back button
//         bot.telegram.sendMessage(ctx.chat.id, message, {
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: 'Back to prices', callback_data: 'price' }
//                     ]
//                 ]
//             }
//         })

//     } catch (err) {
//         console.log(err);
//         ctx.reply('Error Encountered');
//     }

// })

// //callback query handler for info
// bot.action('info', ctx => {
//     //answer callback query so that loading icon on button goes away
//     ctx.answerCbQuery();
//     //send message to invoke and open reply keyboard
//     bot.telegram.sendMessage(ctx.chat.id, "Bot Info", {
//         reply_markup: {
//             keyboard: [
//                 [
//                     { text: "Credits" },
//                     { text: "API" }
//                 ],
//                 [
//                     { text: "Remove Keyboard" },
//                 ]
//             ],
//             resize_keyboard: true,
//             one_time_keyboard: true
//         }
//     })
// })

// //handles text message for 'Credits'
// bot.hears('Credits', ctx => {
//     ctx.reply('This bot was made by @name');
// })

// //handles text message for 'API'
// bot.hears('API', ctx => {
//     ctx.reply('This bot uses cryptocompare API');
// })

// //handles text message for 'Remove Keyboard' and removes keyboard on user's telegram interface
// bot.hears("Remove Keyboard", ctx => {
//     bot.telegram.sendMessage(ctx.chat.id, "Removed Keyboard",
//         {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         })
// })

// bot.launch(); 


// ! Search bot  
// const API_KEY = '10859277-0490c15f70016a5bfb092c18f'

// //handler for /start and /help command
// bot.command(['start', 'help'], ctx => {
//     //set welcome message
//     let message = `
// Welcome to Search Bot!
// Use the inline mode below
// @s300bot p <search image>
// @s300bot w <search wiki>
// `;
//     //ctx.reply(text, [extra params])
//     ctx.reply(message, {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     // Use switch inline query current chat to pre-type "@s300bot p " 
//                     { text: 'Search Pixabay Image', switch_inline_query_current_chat: 'p ' }
//                 ],
//                 [
//                     // Use switch inline query current chat to pre-type "@s300bot w " 
//                     { text: 'Search Wiki', switch_inline_query_current_chat: 'w ' }
//                 ]
//             ]
//         }
//     })
// })

// bot.inlineQuery(['start', 'help'], ctx => {
//     let message = `
// Welcome to Search Bot!
// Use the inline mode below
// @qweasdzxcqweasdxzcbot p <search image>
// @qweasdzxcqweasdxzcbot w <search wiki>
//   `;

//     //results array containing 1 inlinequeryresult article for ctx.answerInlineQuery method
//     let results = [
//         {
//             type: 'article',
//             id: '1',
//             title: 'Help Reference',
//             input_message_content: {
//                 message_text: message
//             },
//             description: 'Sends help message on how to use the bot',
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: 'Search Pixabay Image', switch_inline_query_current_chat: 'p ' }
//                     ],
//                     [
//                         { text: 'Search Wiki', switch_inline_query_current_chat: 'w ' }
//                     ]
//                 ]
//             }
//         }
//     ]

//     ctx.answerInlineQuery(results);
// })

// bot.inlineQuery(/p\s.+/, async ctx => {
//     let input = ctx.inlineQuery.query.split(' '); //split string by spaces into array eg. ['p', 'search', 'term']
//     input.shift(); //remove first element in array eg. ['search', 'term']
//     let query = input.join(' '); //join elements in array into string separated by spaces eg. "search term"

//     //call pixabay api with request using axios
//     let res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}`);
//     //main data is stored in hits array in res.data
//     let data = res.data.hits;

//     //process the data using javascript's array map method to loop each element in array and return something as an element in the results array
//     let results = data.map((item, index) => {
//         return {
//             type: 'photo',
//             id: String(index),
//             photo_url: item.webformatURL,
//             thumb_url: item.previewURL,
//             photo_width: 300,
//             photo_height: 200,
//             caption: `[Source](${item.webformatURL})\n[Large Image](${item.largeImageURL})`,
//             parse_mode: 'Markdown'
//         }
//     })
//     ctx.answerInlineQuery(results)
// })

// bot.inlineQuery(/w\s.+/, async ctx => {
//     let input = ctx.inlineQuery.query.split(' ');
//     input.shift();
//     let query = input.join(' ');

//     //call wiki api with get request using axios
//     let res = await axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}&limit=50`);
//     let data = res.data;
//     let allTitles = data[1]; //store titles array from data into a variable named allTitles
//     let allLinks = data[3]; //store links array from data into a variable named allLinks

//     //if user types inline query slow, search query may be empty,
//     //this if statement checks if allTitles array is empty, if true then stop the entire inlinequery handler with "return" 
//     if (allTitles == undefined) {
//         return;
//     }

//     //process the data using javascript's array map method to loop each element in array and return something as an element in the results array
//     let results = allTitles.map((item, index) => {
//         return {
//             type: 'article',
//             id: String(index),
//             title: item,
//             input_message_content: {
//                 message_text: `${item}\n${allLinks[index]}`
//             },
//             description: allLinks[index],
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: `Share ${item}`, switch_inline_query: `w ${item}` }
//                     ]
//                 ]
//             }
//         }
//     })
//     ctx.answerInlineQuery(results);
// })

// bot.launch()

// TODO Изучить zapier, rss и сделать этого бота
// ! Instagram & Facebook channel bot 

// !Zapier code 
// let newDescription = inputData.description.replace("(Feed generated with FetchRSS )", "");

// let message = `
// <a href="${inputData.link}">Source</a>

// Description:
// ${newDescription}
// `;

// let token = "1060753066:AAHx8IBhD52RNZ2SMnGPYc4mzS7rbyKsYvs";
// let data = {
//     chat_id: "-1001141776715",
//     text: message,
//     parse_mode: "HTML",
//     reply_markup: {
//         inline_keyboard: [
//             [
//                 { text: "Go to Post", url: inputData.link }
//             ]
//         ]
//     }
// };

// await fetch(`https://api.telegram.org/bot${token}/sendMessage`,
//     {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
// )

// output = [{ id: 123, hello: "world" }];
// !

// bot.launch()

// ! Facts bot with google sheet  

//Data store from gsheet
// let dataStore = [];

//invoke getData function when script starts
// getData();

// bot.command('fact', ctx => {
//     //get max row number
//     let maxRow = dataStore.filter(item => {
//         return (item.row == '1' && item.col == '2');
//     })[0].val;
//     //generate random number from 1 to max row
//     let k = Math.floor(Math.random() * maxRow) + 1;
//     //get fact object that matches row with randomly generated number
//     let fact = dataStore.filter(item => {
//         return (item.row == k && item.col == '5');
//     })[0];
//     //output message
//     let message =
//         `
// Fact #${fact.row}:
// ${fact.val}
//   `;
//     //reply user
//     ctx.reply(message);
// })

// bot.command('update', async ctx => {
//     try {
//         //update data
//         await getData();
//         ctx.reply('updated');
//     } catch (err) {
//         console.log(err);
//         ctx.reply('Error encountered');
//     }
// })

// async function getData() {
//     try {
//         //send http request to gs link to get information back in json format
//         let res = await axios('https://spreadsheets.google.com/feeds/cells/1qwunC72mqNN2Vfy2tIiOrwpxOnHn3AnWmLfsf18llIA/1/public/full?alt=json');

//         //store entry array into data variable
//         let data = res.data.feed.entry;
//         //make sure dataStore is empty
//         dataStore = [];
//         //process data into dataStore
//         data.forEach(item => {
//             dataStore.push({
//                 row: item.gs$cell.row,
//                 col: item.gs$cell.col,
//                 val: item.gs$cell.inputValue,
//             })
//         })
//     } catch (err) {
//         console.log(err);
//         throw new Error;
//     }
// } 

// bot.launch()


// ! SIMPLE API BOT

// bot.help(ctx => {
//     bot.telegram.sendMessage(ctx.chat.id, `
// Thats's simple API bot
// /fortune - get a fortune cookie
// /cat - get a random cat picture
// /cat \`<text>\` - get a cat pic with text
// /dogbreeds - get list of dog breeds
// /dog \`<breed>\` - get image of dog breed
// `, { parse_mode: 'Markdown' })
// })

// bot.command('fortune', ctx => {
//     bot.telegram.sendChatAction(ctx.chat.id, 'typing')
//     axios.get('http://www.yerkee.com/api/fortune')
//         .then(res => ctx.reply(res.data.fortune))
//         .catch(err => {
//             ctx.reply('Произошла непредвиденная ошибка')
//             console.log(err);
//         })
// })

// bot.command('cat', async ctx => {
//     let input = ctx.message.text
//     let inputArr = input.split(' ') 
//     if(inputArr.length === 1){
//         try {
//             bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
//             const res = await axios.get('https://aws.random.cat/meow') 
//             ctx.replyWithPhoto(res.data.file)
//         } catch (error) { 
//             console.log(error);
//         }
//     } else {
//         inputArr.shift()
//         input = inputArr.join(' ')
//         bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
//         ctx.replyWithPhoto(`https://cataas.com/cat/says/${input}`)
//     }
// })

// bot.command('dogbreeds', ctx => { 
//     let rawdata = fs.readFileSync('./dogbreeds.json', 'utf8')
//     let data = JSON.parse(rawdata)
//     let message = 'Dog breeds:\n'
//     data.forEach(item => {
//         message += `-${item}\n`
//     })
//     ctx.reply(message)
// })

// bot.command('dog', ctx => {
//     let input = ctx.message.text.split(' ')
//     if(input.length != 2){
//         ctx.reply('Напиши породу собаки вторым словом')
//         return 
//     }
//     let breedInput = input[1]

//     let rawdata = fs.readFileSync('./dogbreeds.json', 'utf8')
//     let data = JSON.parse(rawdata)

//     if(data.includes(breedInput)){
//         bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
//         axios.get(`https://dog.ceo/api/breed/${breedInput}/images/random`)
//             .then(res => { 
//                 ctx.replyWithPhoto(res.data.message)
//             })
//             .catch(err => console.log(err))
//     } else {
//         let suggestions = data.filter(item => item.startsWith(breedInput)) 
//         let msg = 'Вы имели в виду \n' 
//         suggestions.forEach(item => msg += `-${item} \n`) 
//         ctx.reply(msg)
//     }
// })

// bot.launch()



// ! MEDIA BOT 

// bot.command(['start', 'help'], ctx => { 
//     ctx.reply(`   
// /photo - Чтобы отправить photo  
// /gif - Чтобы отправить gif  
// /images - Чтобы отправить images  
// /file - Чтобы отправить file  
// /location - Чтобы отправить location  
// `   )
// })

// bot.command('photo', ctx => {
//     bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
//     bot.telegram.sendPhoto(
//         ctx.chat.id, 
//         'https://i.pinimg.com/564x/3f/2d/63/3f2d63492508a295e555a668f201a5ac.jpg',
//         { reply_to_message_id: ctx.message.message_id }
//     )
// })

// bot.command('gif', ctx => {
//     bot.telegram.sendChatAction(ctx.chat.id, 'upload_video')
//     bot.telegram.sendAnimation(
//         ctx.chat.id,
//         'https://i.pinimg.com/originals/33/72/d6/3372d678b04aed9ebb924e103d55f383.gif',
//         { reply_to_message_id: ctx.message.message_id }
//     )
// })

// bot.command('images', ctx => {
//     const images = ['https://i.pinimg.com/564x/07/77/75/0777758841f391a17183f612379b6930.jpg', 'https://i.pinimg.com/564x/3a/50/9a/3a509a785d16d3aa12a8fefa5b70e95f.jpg', 'https://i.pinimg.com/564x/86/10/44/86104436ff3cc362a6ab445f5d2c24ba.jpg', 'https://i.pinimg.com/564x/c0/75/61/c07561cac5b705929bd73ae73e95da03.jpg']

//     bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
//     bot.telegram.sendMediaGroup(
//         ctx.chat.id,
//         images.map(img => ({
//             type: 'photo',
//             media: img
//         }))
//     )
// })

// bot.command('file', ctx => {
//     bot.telegram.sendChatAction(ctx.chat.id, 'upload_document')
//     bot.telegram.sendDocument(
//         ctx.chat.id,
//         { source: 'res/text.txt' },
//         { thumb: 'https://i.pinimg.com/564x/c0/75/61/c07561cac5b705929bd73ae73e95da03.jpg' }
//     )
// })

// bot.command('location', ctx => { 
//     bot.telegram.sendLocation(ctx.chat.id, 1.3521, 103.8198)
// })

// ? DANGER, bot will send his token in link, so talker can use your bot with this token
// bot.on('message', async ctx => {
//     if(ctx.updateSubTypes[0] === 'document') {
//         try{
//             let link = await bot.telegram.getFileLink(ctx.message.document.file_id)
//             ctx.reply(link)
//         }catch(e) {
//             console.log(e)
//             ctx.reply(e.description)
//         }
//     } else if (ctx.updateSubTypes[0] === 'photo'){ 
//         try {
//             let link = await bot.telegram.getFileLink(ctx.message.photo[0].file_id)
//             ctx.reply(link)
//         } catch (e) {
//             console.log(e)
//             ctx.reply(e.description)
//         }
//     }
// })

// bot.launch()



// ! --------- ECHO BOT --------------

// const helpMsg = `
// Hey, say something
// /start - start bot
// /help - command reference
// `

// bot.use((ctx, next) => {  
//     if (ctx.updateSubTypes[0] === 'text') {
//         ctx.reply(ctx.from.username + ' said: ' + ctx.message.text) 
//        // bot.telegram.sendMessage(idOfGroup, message) // to send message to group with bot name
//     } else { 
//         ctx.reply(ctx.from.username + ' sent ' + ctx.updateSubTypes[0]) 
//         // bot.telegram.sendMessage(idOfGroup, message) // to send message to group with bot name
//     }
    
//     next()
// })

// bot.start(ctx => { 
//     ctx.reply("Hey, I'm echo bot")
//     ctx.reply(helpMsg)
// })

// bot.help(ctx => {  
//     ctx.reply(helpMsg)
// })

// bot.command('echo', ctx => { 
//     const input = ctx.message.text
//     const inputArr = input.split(' ')
//     let message = ''
//     if(inputArr.length === 1){
//         message = 'You said echo'
//     } else {
//         inputArr.shift()
//         message = inputArr.join(' ')
//     }
//     ctx.reply(message)
// }) 

// bot.launch()



// ! --------- INTRODUCTION --------------

// next parameter allows bot to call function below this
// bot.use((ctx, next) => { 
    // ctx.reply(ctx.update.message.text && ctx.update.message.sticker[0] && ctx.update.message.voice)
// })

// Function that called when we type /start on bot
// bot.start((ctx) => {
//     ctx is updates on every request and contains following props
//     ctx.reply('@botfather @mamytovv ') 
// })


// creating new command kinda /start, which work with slash
// bot.command('test', (ctx) => {
// })

// that the function that hears the simple text(not command) and do smth if it hears
// bot.hears('cat', (ctx, next) => { 
//     ctx.reply(ctx.state.apple)
// })

// on method gets the string, and if string equals type of sent msg he do smth 
// bot.on('text', (ctx) => {
//     ctx.reply(`this is text msg`)
// })

// Function that called when we type /help on bot
// bot.help((ctx) => {
//     ctx.reply(ctx.state.apple)
// })

// Function that called when we type /settings on bot
// bot.settings((ctx) => {
//     ctx.reply('настроечка')
// })

// bot.mention('botfather', (ctx) => {
//     ctx.reply('Упоминание отца ботов')
// })

// bot.phone('+996551680027', (ctx) => {
//     ctx.reply('Присутствие номера в сообщении')
// })

// bot.hashtag('report', (ctx) => {
//     ctx.reply('Хеееештегииии')
// })


// Function that start our bot 
// bot.launch()