const Telegraf = require('telegraf');
const Koa = require('koa');
//const koaBody = require('koa-body');
const config = require('./config');
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser")

const bot = new Telegraf(config.TOKEN);
bot.telegram.setWebhook(`${config.URL}/bot`)

const app = new Koa();
const router = Router();
router.post('/bot', ctx => {
    const { body } = ctx.request;
    bot.handleUpdate(body)
    ctx.status = 200;   
});

app.use(bodyParser())
app.use(router.routes())

app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}`)
})
bot.command('Moshnega', (ctx) => {
    ctx.reply(' В президенти!!! 👍');
});