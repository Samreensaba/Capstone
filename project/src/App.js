import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from './components/MyNav';
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Footer from "./components/Footer";
import AllJobs from "./components/AllJobs";
import SearchList from "./components/SearchList";
import JobDetails from "./components/JobDetails";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    
      <BrowserRouter>
        <div className="app">
          <MyNav />
          <div className="pt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Register />} />
              <Route path="/AllJobs" element={<AllJobs />} />
              <Route path="/BigData" element={<SearchList query="big data" heading="Big Data/Data Science" description="Big Data and Data science is a broad career path that is undergoing developments and thus promises abundant opportunities in the future.Discover popular careers for Big Data & Data Science graduates." image="https://www.parallelconsulting.com/uploads/headerdatasciencebigdata.jpg" />} />
              <Route path="/software" element={<SearchList query="software engineer" heading="Software Engineering" description="There is huge scope for IT and CS students due to the rapid growth of IT industries. A plethora of career options are available in the field of software engineering. An ample of jobs are available in a software company for software engineers. There is also a need for software engineers in the government sector." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCNd-DsabCAETDRSYb5tVWAAZxAoZXPwkHw&usqp=CAU" />} />
              <Route path="/cloud" element={<SearchList query="cloud engineer" heading="Cloud Computing" description="High Earning Potential: With the rising demand for cloud technologies, the pay scale of these jobs is also increasing rapidly in the market. You will find better-paid jobs in cloud computing." image="https://www.networkerstechnology.com/sites/networkers/files/wysiwyg/images/articles/large-image/cloud-for-web.jpg" />} />
              <Route path="/ITSecurity" element={<SearchList query="cyber Security" heading="IT Security" description=" Cyber Security is an essential component of any company or enterprise across the world, hence the scope of Cyber Security is immense. Starting salaries for cyber security analysts typically fall between £25,000 and £35,000." image="https://s27389.pcdn.co/wp-content/uploads/2021/04/creating-rolling-out-effective-cyber-security-strategy-1024x440.jpeg.optimal.jpeg" />} />
              <Route path="/analytics" element={<SearchList query="data analytics" heading="Data Analytics" description="The scope of data analytics includes companies in policing, banking, healthcare, fraud detection, e-commerce, energy, telecommunications, and risk management." image="https://miro.medium.com/max/702/1*Ra02AqsQlC0KV229EvM98g.png" />} />
              <Route path="/projectmanagement" element={<SearchList query="project manager" heading="Project Management" description="Project managers are the driving force behind the success of every key project or program your organization seeks to accomplish. Day to day, they align projects with business goals, construct detailed work plans, manage teams, achieve milestones, and communicate the result across a stakeholder audience." image="https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2018/03/istock-844535646.jpg" />} />
              <Route path="/jobDetails/:jobId" element={<JobDetails />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
   

  );
}

export default App;
