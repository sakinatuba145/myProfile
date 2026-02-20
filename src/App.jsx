
import './App.css'
import Badge from "./components/Badge.jsx";
import AyekaImage from "./assets/Ayeka.png"
import ProfilePage from './components/ProfilePage.jsx'
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

 }
};

return(
 <div className='page'>
<ProfilePage user={user}></ProfilePage>
      <h1>Reusable Badge Component</h1>
      <Badge label="Course" value="React" />
      <Badge label="role" value="Studentt"/>
      <Badge label="duration" value="six month"/>
      <Badge label="Score" value="+A"/>
      <Badge label="Week" value="1" />
      <Badge label="Topic" value="Props" />
      <Badge label="Level" value="Beginner" />
    </div>
  );
}
