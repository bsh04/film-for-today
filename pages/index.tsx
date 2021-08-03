import {DEFAULT_PAGE_TITLE, MainLayout} from "../components/MainLayout/MainLayout";
import {useGetFilmsQuery} from "../redux/slices/topFilmsSlice"

export default function Home() {
    const {} = useGetFilmsQuery("")
    return (
        <MainLayout title={DEFAULT_PAGE_TITLE + " | Главная"}>
            <div>
                MAIN PAGE
            </div>
        </MainLayout>
    )
}
