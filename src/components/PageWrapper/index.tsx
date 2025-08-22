import Header from "../Header";

interface PageWrapperProps {
    showHeader?: boolean;
    children: React.ReactNode;
}

export default function PageWrapper({ showHeader = true , children}: PageWrapperProps) {
    return (
        <div className="min-h-screen bg-[#111418]">
            {showHeader && <Header />}
            {children}
        </div>
    )
}