import Badge from "./Badge";

export default function BadgeContainer({ badges }) {
  return (
    <div className="badgeCardContainer">
      <h2 className="badgeCardTitle">My Badges</h2>
      <div className="badgeGrid">
        {badges.map((b, index) => (
          <Badge
            key={index}
            label={b.label}
            value={b.value}
            icon={b.icon}
          />
        ))}
      </div>
    </div>
  );
}