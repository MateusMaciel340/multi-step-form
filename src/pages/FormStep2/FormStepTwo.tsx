import { Link } from "react-router-dom";

import * as C from "./FormStepTwoStyle";

import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme/Theme";
import { SelecteOption } from "../../components/SelectOption/SelectOption";
import { useEffect } from "react";

export const FormStepTwo = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === "") {
            navigate("/");
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== "") {
            navigate("/step3");
        } else {
            alert("Preencha os campos!");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name} O que melhor descreve você?</h1>
                <p>
                    Escolha a opção que melhor condiz com seu estado
                    atual, profissionalmente.
                </p>
                <hr />
                
                <SelecteOption
                    title={"Sou iniciante"}
                    description={"Comecei a programar há menos de 2 anos"}
                    icon={"🥳"}
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}/>

                <SelecteOption
                    title={"Sou programador"}
                    description={"Já programo há 2 anos ou mais"}
                    icon={"😎"}
                    selected={state.level === 1}
                    onClick={() => setLevel(1)} />
                
                <Link to={"/"} className="backButton">
                    Voltar
                </Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}