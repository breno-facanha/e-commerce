import { FaChevronLeft } from "react-icons/fa";
import CustomButton from "../CustomButton";

interface BreadCrumbProps {
  items: {
    title: string;
  }[];
}

export default function Breadcrumb({ items }: BreadCrumbProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <CustomButton
        variant="ghost"
        className="w-[100px] text-sm gap-2 hover:bg[#5593f7] h-[30px] hover:bg-transparent"
      >
        <FaChevronLeft />
        Voltar
      </CustomButton>

      {items.map((item, index) => (
        <>
            <span className="text-gray-500"> /</span>
            <span className={`${index === items.length - 1 ? "font-medium" : "text-gray-400"}`}>
                {item.title}
            </span>
        </>
      ))}
    </div>
  );
}
