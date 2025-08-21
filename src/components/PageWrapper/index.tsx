import Header from "../Header";

interface PageWrapperProps {
    showHeader?: boolean;
}

export default function PageWrapper({ showHeader = true }: PageWrapperProps) {
    return (
        <div className="min-h-screen bg-[#111418]">
            {showHeader && <Header />}
        </div>
    )
}