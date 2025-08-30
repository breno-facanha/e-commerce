import Header from "../Header";

interface PageWrapperProps {
    showHeader?: boolean;
    children: React.ReactNode;
}

export default function PageWrapper({ showHeader = true , children}: PageWrapperProps) {
    return (
        <div className="min-h-screen bg-[#111418]">
            {showHeader && <Header />}
            <div className="py-8 px-28 space-y-12">
                {children}
            </div>
        </div>
    )
}