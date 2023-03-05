import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Achievements from '../components/Achievements'
import AllProjects from '../components/AllProjects'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Research from '../components/Research'
import Skills from '../components/Skills'
import { Achievement, Experiences, PageInfo, Project, Skill , Social} from '../typing'
import { fetchAchievements } from '../utils/fetchAchievements'
import { fetchExperiences } from '../utils/fetchExperience'
import { fetchFeatured } from '../utils/fetchFeatured'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'


type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]; 
  featured: Project[];
  prizes: Achievement[];
}

const Home = ({pageInfo, experiences, skills, projects, socials, featured, prizes}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <Header socials={socials}/>

      
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      

      <section id="experience" className='snap-center'>
        <Experience experiences={experiences}/>
      </section>

    
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

    

      <section id="projects" className='snap-center'>
        <Projects projects={featured}/>
      </section>

      <section id="allprojects" className='snap-start'>
        <AllProjects projects={projects}/>
      </section>

      <section id="research" className='snap-start'>
        <Research/>
      </section>

      <section id="achievements" className='snap-start'>
        <Achievements prizes={prizes}/>
      </section>

      {/*Contact me*/}

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/326023190_733425464661141_791998025936142238_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHLf1PU932f5PtDaSVXfJIDva0BJ97zz_29rQEn3vPP_bxIPNH59d-xXMlEUnqgESu_6QB2mYoeZOXdkBF_plg-&_nc_ohc=4sW_M1Ryx2IAX9eQ0ZP&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBs4hoTELPpHaElYfT_zKBqjreZDaqgFTc9CCsPa5HM6A&oe=6409A3C7"
              alt=""
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              />
          </div>
        </footer>
      </Link>
      
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props>= async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experiences[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const featured: Project[] = await fetchFeatured();
  const prizes: Achievement[] = await fetchAchievements();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      featured,
      prizes
    },

    revalidate: 10,
  }
}