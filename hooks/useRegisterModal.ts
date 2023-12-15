import { atom, useRecoilState } from "recoil";

interface RegisterModalStore{
    isOpen: boolean;
};

export const registerModalState = atom<RegisterModalStore>({
    key: 'registerModalState',
    default: {
        isOpen: false
    }
});

export default function useRegisterModal(){
    const[modalState, setModalState] = useRecoilState(registerModalState);

    function onOpen(){
        setModalState({ isOpen: true });
    }

    function onClose(){
        setModalState({ isOpen: false });
    }

    return {
        isOpen: modalState.isOpen,
        onOpen,
        onClose
    };
};