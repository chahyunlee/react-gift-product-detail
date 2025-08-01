import { useState, useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import {
  Wrapper,
  Title,
  ButtonGroup,
} from "@/pages/Home/components/RankingSection/RankingSection.style";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import AgeSelectionButton from "@/components/AgeSelectionButton/AgeSelectionButton";
import RankSelectionBar from "@/components/RankSelectionBar/RankSelectionBar";
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";
import CardList from "@/components/CardList/CardList";
import { useRanking } from "@/hooks/useRanking";
import type { CardItemData } from "@/types/DTO/productDTO";
import { AGE_SELECT } from "@/constants/age";
import { RANK_SELECT } from "@/constants/rank";
import type { TargetType } from "@/constants/age";
import type { RankType } from "@/constants/rank";

const MIN_VISIBLE_CARDS = 6;

const RankingSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAll, setShowAll] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!params.has("targetType")) {
      params.set("targetType", "ALL");
    }
    if (!params.has("rankType")) {
      params.set("rankType", "MANY_WISH");
    }
    setSearchParams(params, { replace: true });
  }, [searchParams, setSearchParams]);

  const selectedTarget = searchParams.get("targetType") as TargetType;
  const selectedRank = searchParams.get("rankType") as RankType;

  const { data, isLoading, error } = useRanking({
    targetType: selectedTarget,
    rankType: selectedRank,
  });

  const cards = (data || []).map((item: CardItemData) => ({
    id: item.id,
    imageUrl: item.imageURL,
    brand: item.brandInfo.name,
    name: item.name,
    price: item.price.sellingPrice,
  }));

  const visibleCards = showAll ? cards : cards.slice(0, MIN_VISIBLE_CARDS);

  const handleTargetSelect = (target: TargetType) => {
    const params = new URLSearchParams(searchParams);
    params.set("targetType", target);
    setSearchParams(params);
  };

  const handleRankSelect = (rank: RankType) => {
    const params = new URLSearchParams(searchParams);
    params.set("rankType", rank);
    setSearchParams(params);
  };

  const handleCardClick = (cardId: number) => {
    if (!auth?.user) {
      navigate("/login", { state: { from: `/product/${cardId}` } });
    } else {
      navigate(`/product/${cardId}`);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner size={48} />;
    }
    if (error) {
      return (
        <p style={{ textAlign: "center", padding: "24px" }}>
          데이터를 불러오는 중 오류가 발생했습니다.
        </p>
      );
    }
    if (cards.length === 0) {
      return (
        <p style={{ textAlign: "center", padding: "24px" }}>상품이 없습니다.</p>
      );
    }

    return (
      <>
        <CardList cards={visibleCards} showRank onCardClick={handleCardClick} />
        {!showAll && cards.length > MIN_VISIBLE_CARDS && (
          <ShowMoreButton onClick={() => setShowAll(true)}>
            더보기
          </ShowMoreButton>
        )}
        {showAll && (
          <ShowMoreButton onClick={() => setShowAll(false)}>
            접기
          </ShowMoreButton>
        )}
      </>
    );
  };

  return (
    <Wrapper>
      <Title>실시간 급상승 선물랭킹</Title>
      <ButtonGroup>
        {AGE_SELECT.map((btn) => (
          <AgeSelectionButton
            key={btn.ageType}
            ageType={btn.ageType}
            label={btn.label}
            emoji={btn.emoji}
            selected={selectedTarget === btn.ageType}
            onClick={handleTargetSelect}
          />
        ))}
      </ButtonGroup>
      <RankSelectionBar
        tabs={RANK_SELECT}
        selected={selectedRank}
        onSelect={handleRankSelect}
      />
      <section>{renderContent()}</section>
    </Wrapper>
  );
};

export default RankingSection;
