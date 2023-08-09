import fullStar from "../../public/full-star.png";
import halfStar from "../../public/half-star.png";
import emptyStar from "../../public/empty-star.png";

import Image from "next/image";
import { Review } from "@prisma/client";
import { calculateReviewRating } from "../../utils/calculateReviewRating";

export default function Stars({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating = rating || calculateReviewRating(reviews);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));

      switch (true) {
        case difference >= 1:
          stars.push(fullStar);
          break;
        case difference < 1 && difference > 0:
          switch (true) {
            case difference <= 0.2:
              stars.push(emptyStar);
              break;
            case difference > 0.2 && difference <= 0.6:
              stars.push(halfStar);
              break;
            default:
              stars.push(fullStar);
              break;
          }
          break;
        default:
          stars.push(emptyStar);
          break;
      }
    }

    return stars.map((star) => (
      <Image src={star} alt="" className="w-4 h-4 mr-1" />
    ));
  };

  return <div className="flex items-center">{renderStars()}</div>;
}
