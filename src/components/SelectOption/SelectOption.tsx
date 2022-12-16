import * as C from "./SelectOptionStyle";

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelecteOption = ({ title, description, icon, selected, onClick }: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
}