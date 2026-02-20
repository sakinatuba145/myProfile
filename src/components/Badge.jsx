export default function Badge({ label, value , icon}) {
  return (
    
    <div className="badge">
        {icon && <span className="badgeIcon">{icon}</span>}
        <div className="badgeContent">
   <span className="badgeLabel">{label}</span>
      <span className="badgeValue">{value}</span>
        </div>
    </div>
  );
}