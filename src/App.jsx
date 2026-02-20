

import './App.css'
import BadgeContainer from './components/BadgeContainer.jsx';
import ProfilePage from './components/ProfilePage.jsx'
import AyekaImage from "./assets/Ayeka.png"

  export default function App() {
const user = {
 name: "Sakina Karimi",
 username: "@saka145",
 avatarImage:  AyekaImage,
 xp: 90,
 lastActive: "Jun 1 2026",
 streakDays: 3,
 longestStreak: 1,
 recentBadgesText: "No badges earned yet",

 personalInfo: {
  Email: 'sakintuba145@gmail.com',
  Gender: 'famle',
  Country: 'Afghanistan',
  "Province or State": 'Ghazni',
  "Work Experience": '10',
  "Date of birth": "9/1/1995",
  "Online Portfolio Link": "N/A",
  "Linkedin Link": "Sakina Karimi",
  Languages: "Farsi,English,Urdo",
  Bio: "Artist and Web devloper",
 },
 accountDetails: {
  Role: "Artist, Web developer & Mobile App Developer",
  Status: "Active",
  Verification: "Verified",

 },
};

const badges = [
  { label: "Course", value: "React", icon: "🎓" },
  { label: "Role", value: "Student", icon: "🧑‍🎓" },
  { label: "Duration", value: "6 Months", icon: "⏳" },
  { label: "Score", value: "A+", icon: "⭐" },
  { label: "Week", value: "1", icon: "📅" },
  { label: "Topic", value: "Props", icon: "📌" },
  { label: "Level", value: "Beginner", icon: "🥇" },
];

  return (
    <div className="page">
        <ProfilePage user={user}/>
      <BadgeContainer badges={badges} />
    </div>
  );
}