import { atom, useRecoilState } from "recoil";

interface EditModalStore{
    isOpen: boolean;
};

export const editModalState = atom<EditModalStore>({
    key: 'editModalState',
    default: {
        isOpen: false
    }
});

export default function useEditModal(){
    const[modalState, setModalState] = useRecoilState(editModalState);

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