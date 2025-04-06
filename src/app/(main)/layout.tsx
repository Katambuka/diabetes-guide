import Footer from "../components/Footer/page"
import Header from "../components/Header/page"
import VisitCounter from "../components/VisitCounter"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
        <VisitCounter />
      </main>
      <Footer />
    </div>
  )
}