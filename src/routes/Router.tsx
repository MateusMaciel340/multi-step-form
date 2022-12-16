import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormStepOne } from "../pages/FormStep1/FormStepOne";
import { FormStepTwo } from "../pages/FormStep2/FormStepTwo";
import { FormStepThree } from "../pages/FormStep3/FormStepThree";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormStepOne/>} />
                <Route path="/step2" element={<FormStepTwo />} />
                <Route path="/step3" element={<FormStepThree/>} />
            </Routes>
        </BrowserRouter>
    );
}