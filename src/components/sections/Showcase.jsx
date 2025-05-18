import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function Showcase() {
  return (
    <div id="work" className="app-showcase">

   <div className="w-full">
<div className="showcaselayout">
{/*left*/}
<div className="first-project-wrapper" data-aos="fade-up"
     data-aos-duration="2000" >
<div className="image-wrapper">
<img src="/images/project1.png" alt="Ryde"/>
</div>
<div className="text-wrapper">

<h2>0n-Demand Rides Made Simple with a powerfull, user-friendly App called Ryde</h2>
<p className="text-white-50 md:text-xl"> an app built with react native,expo, & TailwindCSS for a fast user friendly experience</p>
</div>
</div>
{/*right*/}
<div className="project-list-wrapper overflow-hidden" >
<div className="project" data-aos="fade-up"
     data-aos-duration="3000">
<div className="image-wrapper bg-[#ffefdb]">
    <img src="images/project2.png" alt="library" />
</div>
<h2>Library Management Platform</h2>
</div>
<div className="project" data-aos="fade-up"
     data-aos-duration="3000">
<div className="image-wrapper bg-[#ffe7eb]">
    <img src="images/project3.png" alt="YC directory" />
</div>
<h2>YC directory - A Startup ShowCase App</h2>
</div>
</div>

</div>
   </div>
    </div>
  )
}
AOS.init();