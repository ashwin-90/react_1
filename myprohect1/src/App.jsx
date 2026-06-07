import React from 'react'
import Card from './assets/components/Card'

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 day ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    payPerHour: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$75/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "7 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$50/hr",
    location: "Bangalore, India"
  }
];
const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        
        return <div key={idx}><Card company={elem.companyName} logo={elem.brandLogo} date={elem.datePosted} position={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App