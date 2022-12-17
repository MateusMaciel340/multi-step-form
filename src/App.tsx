import { Router } from "./routes/Router";
import { FormProvider } from "./contexts/FormContext";

import "./styles/AppStyle.css";

const App = () => {
    return (
        <FormProvider>
            <Router />
        </FormProvider>
    );
}

export default App;