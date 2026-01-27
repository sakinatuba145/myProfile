export default function TopHeader({name, username, avatarImage}){
    return(
        <header className="topHeader">
          <div className="topHeaderInner">
            <div className="avatarRing" style={{width: '100px', height: '100px',borderRedius:'50%', display: 'flex'}}>
              <div className="avatarCircle avatarImageWrapper" style={{width: '90px', height: '90px', borderRedius: '50%',overflow: 'hidden'}}>
                <img src={avatarImage} alt={name} className="avatarImage" />
              </div>
            </div>
            <div className="topHeaderContent">
                <h1 className="profileName"> {name} </h1>
                <p className="profileHandle"> {username} </p>
            <div className="topHeaderButtons">
                <button className="btnHeader primary">Edit Profile</button>
                <button className="btnHeader ghost"> Sign Out</button>
            </div>
         </div> 
         </div> 
        </header>
    )
}