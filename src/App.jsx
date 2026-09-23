
import React from 'react'
import Card from './component/card.jsx'

const App = () => {
  
let users = [
  {
    username: "kanika",
    role: "Mobile Designer",
    job: "Freelancer",
    skills: ["Figma", "UI/UX", "Android"],
    bio: "Creative mobile designer who loves building simple and user-friendly app interfaces.",
    image: "https://i.pravatar.cc/300?img=1"
  },
  {
    username: "rohan",
    role: "Software Developer",
    job: "Full-time",
    skills: ["JavaScript", "React", "Node.js"],
    bio: "Software developer focused on creating fast and scalable web applications.",
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    username: "aisha",
    role: "Frontend Developer",
    job: "Freelancer",
    skills: ["HTML", "CSS", "JavaScript"],
    bio: "Frontend developer who enjoys turning creative designs into responsive websites.",
    image: "https://i.pravatar.cc/300?img=5"
  },
  {
    username: "arjun",
    role: "Backend Developer",
    job: "Full-time",
    skills: ["PHP", "MySQL", "Laravel"],
    bio: "Backend developer who builds secure APIs and database-driven applications.",
    image: "https://i.pravatar.cc/300?img=13"
  },
  {
    username: "mehak",
    role: "Android Developer",
    job: "Part-time",
    skills: ["Android", "Java", "Kotlin"],
    bio: "Android developer passionate about creating useful and smooth mobile applications.",
    image: "https://i.pravatar.cc/300?img=9"
  },
  {
    username: "aditya",
    role: "UI/UX Designer",
    job: "Freelancer",
    skills: ["Figma", "Photoshop", "Wireframing"],
    bio: "UI/UX designer who loves solving user problems through clean and attractive designs.",
    image: "https://i.pravatar.cc/300?img=11"
  },
  {
    username: "priya",
    role: "Data Analyst",
    job: "Full-time",
    skills: ["Python", "SQL", "Excel"],
    bio: "Data analyst who enjoys finding useful insights from complex datasets.",
    image: "https://i.pravatar.cc/300?img=47"
  },
  {
    username: "rahul",
    role: "DevOps Engineer",
    job: "Full-time",
    skills: ["Docker", "AWS", "Linux"],
    bio: "DevOps engineer interested in automation, cloud infrastructure, and deployment systems.",
    image: "https://i.pravatar.cc/300?img=14"
  },
  {
    username: "simran",
    role: "Graphic Designer",
    job: "Freelancer",
    skills: ["Photoshop", "Illustrator", "Canva"],
    bio: "Graphic designer creating modern visuals, posters, and brand identities.",
    image: "https://i.pravatar.cc/300?img=44"
  },
  {
    username: "vivek",
    role: "Python Developer",
    job: "Part-time",
    skills: ["Python", "Django", "MongoDB"],
    bio: "Python developer who builds backend applications and enjoys learning new technologies.",
    image: "https://i.pravatar.cc/300?img=15"
  }
];
  return (

    <div className="parent">
      {users.map(function (elem,idx) {
       return <div key={idx}> <Card  name={elem.username} role={elem.role} job={elem.job} skill1={elem.skills[0]} skill2={elem.skills[1]} skill3={elem.skills[2]} bio={elem.bio} image={elem.image}/></div>

      
      })}

      
    </div>
  )
}

export default App
