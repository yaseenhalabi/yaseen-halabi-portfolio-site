import { ChevronRight } from 'lucide-react'
import halabi from "./assets/halabi.png"
import delay from "./assets/delay.png"
import pathlit from "./assets/pathlit.png"
import zymbly from "./assets/zymbly.jpg"
import arcade from "./assets/arcade.png"
import events from "./assets/events.png"
import hack from "./assets/hack.png"
import { Link } from "wouter"

function Projects() {

  const PROJECT_DATA = [
    {
      title: "Delay",
      description: "A mobile app I made that makes you answer multiple choice questions for screen time. It has 10k downloads and is 4.8 stars on the App Store",
      image: delay,
      link: "https://apps.apple.com/us/app/delay-study-before-you-scroll/id6749641307"
    },
    {
      title: "Arcade",
      description: "I was the first intern at this awesome series A startup in SF. This was one of the first job experiences where I did 99% AI code, and got to ship some substantial features for thousands of users.",
      image: arcade,
      link: "https://arcade.software"
    },
    {
      title: "Pathlit",
      description: "My first job. They were a pre-seed startup who raised 1mil. I joined my freshman year of college as the 6th person on the team. Worked on optimizing the speed of the AI workflow builder in addition to adding more tools to its collection.",
      image: pathlit,
      link: "https://pathlit.com"
    },
    {
      title: "Zymbly",
      description: "A spontaneous summer job I took up in London. It was me and the two founders. I did a lot of coding as we tested out startup ideas and pivoted. They ended up getting into YCombinator soon after I left.",
      image: zymbly,
      link: "https://www.zymbly.com/"
    },
    {
      title: "EventsAtUIUC.com",
      description: "Over 10k total site visits. I scrape ~900 instagrams using distribution browser automation on a cron job every day. I also made it for Michigan, Purdue, and Wisconsin. I get a lot of free food this way. ",
      image: events,
      link: "https://eventsatuiuc.com"
    },
    {
      title: "HackIllinois Systems",
      description: "I was on the team building the mobile app for Hackillinois '26. Now I'm the 2027 Systems co-lead managing 10 developers across numerous projects.",
      image: hack,
      link: "https://hackillinois.org"
    },
    {
      title: "Halabi",
      description: "200 downloads - my first app. It was a contacts manager designed to make tagging contacts easy.",
      image: halabi,
      link: "https://apps.apple.com/us/app/halabi/id6667094995"
    },
  ]
  return (
    <div className="flex flex-col md:flex-row min-h-dvh md:items-stretch">
      <div>
        <div className="md:text-6xl text-3xl w-full text-center md:text-left px-5 changa-one-regular pt-5">Notable Projects/Work</div>
        <div className="flex flex-col justify-center items-start">
          {PROJECT_DATA.map(item => 
            <a target="_blank" href={item.link} className="flex flex-col md:flex-row gap-2 cursor-pointer hover:bg-gray-50 p-4 md:justify-between md:w-full">
              <div className="flex flex-col">
                <div className="font-bold" >{item.title}</div>
                <div>{item.description}</div>
              </div>
              <img src={item.image} className="md:w-40 w-full object-contain"/>
            </a>
          )}
        </div>
      </div>
      <div className="flex w-full md:w-auto flex-1 md:flex-none">
        <Link href="/" className="bg-red-400 md:w-70 w-full py-10 text-white text-xl font-bold flex justify-center items-center cursor-pointer"><span>Home</span><ChevronRight /></Link>
      </div>
      {/* <div class="subtitle">This code was handcrafted without AI code/design</div> */}
    </div>
  )
}

export default Projects
