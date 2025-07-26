import SkeletonButton from "../skeleton-button"
import SkeletonCartTotals from "../skeleton-cart-totals"

const SkeletonOrderSummary = () => {
  return (
    <div className="grid-cols-1">
      <SkeletonCartTotals header={false} />
      <div className="mt-6">
        <SkeletonButton className="w-full" />
      </div>
    </div>
  )
}

export default SkeletonOrderSummary
