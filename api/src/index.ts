import LoadEnv from "@infra/helper/LoadEnv";
import ExpressAdapter from "@infra/http/ExpressAdapter";

LoadEnv.load();

const expressAdapter = new ExpressAdapter();

expressAdapter.listen(3000);