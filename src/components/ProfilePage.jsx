import TopHeader from "./TopHeader";
import StatCard from "./StatCard";
import PersonalInfoCard from "./personalInfoCard";
import AccountDetailsCard from "./AccountDetailsCard";
export default function ProfilePage({user}){
    return (
        <div className="layout">
           <TopHeader 
        name={user.name} 
        username={user.username} 
        avatarImage={user.avatarImage}>

        </TopHeader> 
        <div className="statsGrid">
            <StatCard
            title="XP"
            bigValue={user.xp}
            footerText={`Last Active: ${user.lastActive}`}
            >   
            </StatCard>
               <StatCard
            title="STREAK"
            bigValue={`${user.streakDays} days`}
            footerText={`Longest Streak: ${user.longestStreak} days`}
            icon="🎶"
            >   
            </StatCard>
               <StatCard
            title="RECENT BADGES"
            bigValue=""
            footerText={user.recentBadgesText}
            icon="⭐"
            >   
            </StatCard>
            </div> 
            <div className="bottomGrid">
                <PersonalInfoCard info={user.personalInfo}></PersonalInfoCard>
                <AccountDetailsCard details={user.accountDetails}></AccountDetailsCard>
            </div>
        </div>
        
       
    );
}