import {DEFAULT_PAGE_TITLE, MainLayout} from "../components/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout title={DEFAULT_PAGE_TITLE + " | Главная"}>
        <div>
            MAIN PAGE
        </div>
    </MainLayout>
  )
}
