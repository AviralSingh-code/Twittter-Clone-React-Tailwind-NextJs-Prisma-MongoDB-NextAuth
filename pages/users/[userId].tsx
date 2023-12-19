import Header from "@/components/Header";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;
    const { data: fetchedUser, isLoading } = useUser(userId as string);

    if(isLoading || !fetchedUser)
    {
        return (
            <div className="
                flex
                justify-center
                items-center
                h-full"
            >
                <ClipLoader />
            </div>
        );
    }
    return (
        <>
            <Header showBackArrow label={fetchedUser?.name}></Header>
            <UserHero userId={userId as string} />
        </>
    );
};

export default UserView;