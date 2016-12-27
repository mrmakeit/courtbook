import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logfmt from "logfmt";
import path from "path";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpack from "webpack";
import webpackConfig from "../../webpack.config";
import expressJwt from "express-jwt";
import dotenv from "dotenv";

const app = express();

const dotEnvVars = dotenv.config();

const jwt = expressJwt({
    secret: dotEnvVars["AUTH0_CLIENT_SECRET"] || process.env.AUTH0_CLIENT_SECRET
});

const localDevelopment = process.env.NODE_ENV !== 'production';
if (localDevelopment) {
    const options = {
        publicPath: `/public`,
        stats: {colors: true}
    };
    app.use(webpackDevMiddleware(webpack(webpackConfig), options));
}

app.use(logfmt.requestLogger());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const publicDir = path.join(__dirname, '../../public');
app.use(`/public`, express.static(publicDir));

app.get("/secured-stuff", jwt, (req, res) => res.send("Congrats!"));

app.get('/*', (req, res) => res.sendFile(`${publicDir}/index.html`));

const port = Number(process.env.PORT || 5000);
app.listen(port, () => console.log("Listening on " + port));

export default app;
