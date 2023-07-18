const {
    express,
    http,
    mongoose,
    helmet,
    rateLimit,
    bodyParser,
} = require("$dependency");
require("dotenv").config();

const app = express();

const userRoutes = require("$routes/user");
const typeRoutes = require("$routes/type");
const rootRoutes = require("$routes/root");

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_URI}/Administration`;
mongoose
    .connect(uri)
    .then(console.log("Connected to Mongo"))
    .catch((err) => mongoose.connection.close());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const limiter = rateLimit({
    windowMS: 15 * 60 * 1000,
    max: 100,
});

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

app.use(limiter);
app.enable("trust proxy");

app.use((req, res, cb) => {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", `${process.env.FRONTEND_URL}`);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, ngrok-skip-browser, Access-Control-Allow-Origin"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    cb();
});

app.use("/", rootRoutes);
app.use("/user", userRoutes);
app.use("/type", typeRoutes);

app.use((err, req, res, cb) => {
    res.status(err.statusCode || 500).json({
        status: err.statusCode,
        message: err.message,
    });
});

const server = http.createServer(app);

server.listen(5000, () => {
    console.log("Server running");
});
