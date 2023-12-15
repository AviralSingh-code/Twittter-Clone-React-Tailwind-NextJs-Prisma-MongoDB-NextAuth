import { atom, useRecoilState } from "recoil";

interface LoginModalStore{
    isOpen: boolean;
};

export const loginModalState = atom<LoginModalStore>({
    key: 'loginModalState',
    default: {
        isOpen: true
    }
});

export default function useLoginModal(){
    const[modalState, setModalState] = useRecoilState(loginModalState);

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