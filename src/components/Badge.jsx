export default function Badge({ label, value }) {
  return (
    
    <div className="badge">
      <span className="badgeLabel">{label}:</span>
      <span className="badgeValue">{value}</span>
    
    </div>
  );
}