const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();

router.get("home", "/", (ctx) => {
  ctx.body = "hi";
});

router.get("other", "/other", (ctx) => {
  ctx.body = "Other stuff";
});

const PORT = 3030;

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT);
