import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LikeSection as LikeSectionStyle } from "@/pages/DetailPage/components/LikeSection/LikeSection.style";

interface LikeSectionProps {
  isLiked: boolean;
  likeCount: number;
  onToggle: () => void;
}

export const LikeSection = ({
  isLiked,
  likeCount,
  onToggle,
}: LikeSectionProps) => {
  return (
    <LikeSectionStyle onClick={onToggle} style={{ cursor: "pointer" }}>
      {isLiked ? (
        <FaHeart size={14} color="#f44336" />
      ) : (
        <FaRegHeart size={14} color="#999" />
      )}
      <div>{likeCount}</div>
    </LikeSectionStyle>
  );
};

export default LikeSection;
