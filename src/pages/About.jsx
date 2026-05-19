import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiDollarSign, FiGift, FiHeadphones, FiInstagram, FiLinkedin, FiShield, FiShoppingBag, FiTruck, FiTwitter } from 'react-icons/fi'
import { BsShop } from 'react-icons/bs'
import twoWomenImage from '../assets/images/two women.png'
import chrisHemsworthImage from '../assets/images/people/cris hasmworth.png'
import chrisEvansImage from '../assets/images/people/cris hevans.png'
import gigiHadidImage from '../assets/images/people/gigi hadid.png'
import hrithikRoshanImage from '../assets/images/people/hirthik roshan.png'
import jenniferLawrenceImage from '../assets/images/people/jennifer lawernce.png'
import kendallJennerImage from '../assets/images/people/kendal jenner.png'
import kylieJennerImage from '../assets/images/people/kyile jenner.png'
import nataliaDyerImage from '../assets/images/people/Natalia Dyer.png'
import sadieSinkImage from '../assets/images/people/sadie sink.png'
import tomCruiseImage from '../assets/images/people/tom cruize.png'
import tomHiddlestonImage from '../assets/images/people/tom hildonson.png'
import tomHollandImage from '../assets/images/people/tom holland.png'

const stats = [
  { value: '10.5k', label: 'Sellers active our site', icon: BsShop },
  { value: '33k', label: 'Monthly Product Sale', icon: FiDollarSign },
  { value: '45.5k', label: 'Customer active in our site', icon: FiGift },
  { value: '25k', label: 'Annual gross sale in our site', icon: FiShoppingBag },
]

const teamMembers = [
  { name: 'Tom Cruise', designation: 'Founder & Chairman', image: tomCruiseImage },
  { name: 'Gigi Hadid', designation: 'Managing Director', image: gigiHadidImage },
  { name: 'Chris Hemsworth', designation: 'Product Designer', image: chrisHemsworthImage },
  { name: 'Kendall Jenner', designation: 'Head of Merchandising', image: kendallJennerImage },
  { name: 'Chris Evans', designation: 'Operations Lead', image: chrisEvansImage },
  { name: 'Natalia Dyer', designation: 'Customer Success Lead', image: nataliaDyerImage },
  { name: 'Hrithik Roshan', designation: 'Brand Strategy Manager', image: hrithikRoshanImage },
  { name: 'Jennifer Lawrence', designation: 'Creative Director', image: jenniferLawrenceImage },
  { name: 'Kylie Jenner', designation: 'Marketing Director', image: kylieJennerImage },
  { name: 'Tom Holland', designation: 'Frontend Experience Lead', image: tomHollandImage },
  { name: 'Sadie Sink', designation: 'Community Manager', image: sadieSinkImage },
  { name: 'Tom Hiddleston', designation: 'Finance Controller', image: tomHiddlestonImage },
]

const teamSlides = Array.from({ length: Math.ceil(teamMembers.length / 3) }, (_, index) => teamMembers.slice(index * 3, index * 3 + 3))

const serviceHighlights = [
  {
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
    icon: FiTruck,
  },
  {
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
    icon: FiHeadphones,
  },
  {
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
    icon: FiShield,
  },
]

function ServiceHighlight({ item }) {
  const Icon = item.icon

  return (
    <article className="flex w-[249px] flex-col items-center text-center max-[760px]:w-full">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-[#2f2e30]">
        <div className="grid h-[58px] w-[58px] place-items-center rounded-full bg-black text-white">
          <Icon className="h-10 w-10" aria-hidden="true" />
        </div>
      </div>
      <h3 className="mb-0 mt-6 text-xl font-semibold leading-7 text-black">{item.title}</h3>
      <p className="mb-0 mt-2 text-sm leading-[21px] text-black">{item.description}</p>
    </article>
  )
}

function About() {
  const [activeTeamSlide, setActiveTeamSlide] = useState(0)
  const visibleTeamMembers = teamSlides[activeTeamSlide]

  return (
    <main className="bg-white pb-[140px] pt-20">
      <section className="mx-auto w-[min(calc(100vw-48px),1170px)] max-[760px]:w-[calc(100vw-32px)]">
        <nav className="text-sm leading-[21px]" aria-label="Breadcrumb">
          <Link className="text-black/50 no-underline" to="/">
            Home
          </Link>
          <span className="mx-3 text-black/50">/</span>
          <span className="text-black">About</span>
        </nav>

        <div className="mt-[122px] grid grid-cols-[525px_705px] items-center gap-[75px] max-[1280px]:grid-cols-[minmax(0,525px)_minmax(420px,1fr)] max-[1080px]:mt-16 max-[1080px]:grid-cols-1 max-[1080px]:gap-12">
          <section className="flex h-[336px] w-[525px] flex-col gap-10 max-[600px]:h-auto max-[600px]:w-full">
            <h1 className="m-0 text-[54px] font-semibold leading-[64px] tracking-[0.06em] text-black max-[600px]:text-4xl max-[600px]:leading-[46px]">
              Our Story
            </h1>
            <div className="flex flex-col gap-6 text-base leading-[26px] text-black">
              <p className="m-0">
                Launched in 2026 by Ridham Patel, Exclusive is a modern online shopping marketplace built to bring quality products, simple browsing, and a smooth customer experience together in one place.
              </p>
              <p className="m-0">
                Exclusive offers a growing range of products across fashion, electronics, lifestyle, beauty, and accessories, with a focus on reliable service and a shopping experience that feels fast, clear, and trustworthy.
              </p>
            </div>
          </section>

          <div className="h-[609px] w-[705px] overflow-hidden rounded-l max-[1280px]:w-full max-[760px]:h-auto">
            <img className="h-full w-full object-cover max-[760px]:aspect-[705/609]" src={twoWomenImage} alt="Two women shopping with bags" />
          </div>
        </div>

        <section className="mt-[140px] grid h-[230px] grid-cols-4 gap-[30px] max-[980px]:h-auto max-[980px]:grid-cols-2 max-[560px]:grid-cols-1" aria-label="Exclusive statistics">
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.label}
                className="group flex h-[230px] flex-col items-center justify-center rounded border border-black/30 bg-white text-black transition duration-200 hover:border-[#db4444] hover:bg-[#db4444] hover:text-white hover:shadow-[0_2px_10px_2px_rgba(0,0,0,0.2)]"
              >
                <div className="grid h-20 w-20 place-items-center rounded-full bg-[#2f2f2f]/30 transition group-hover:bg-white/30">
                  <div className="grid h-[58px] w-[58px] place-items-center rounded-full bg-black text-white transition group-hover:bg-white group-hover:text-black">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>
                <strong className="mt-6 text-[32px] font-bold leading-[30px] tracking-[0.04em]">{item.value}</strong>
                <p className="m-0 mt-3 text-base leading-6">{item.label}</p>
              </article>
            )
          })}
        </section>

        <section className="mt-[140px] flex min-h-[564px] flex-col gap-10" aria-label="Exclusive team">
          <div className="grid grid-cols-3 gap-[30px] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
            {visibleTeamMembers.map((member) => (
              <article key={member.name} className="text-black">
                <div className="flex h-[430px] items-end justify-center overflow-hidden rounded bg-[#f5f5f5] px-5 pt-8 max-[620px]:h-[360px]">
                  <img className="h-full w-full object-contain object-bottom" src={member.image} alt={member.name} />
                </div>
                <h2 className="m-0 mt-8 text-[32px] font-medium leading-[30px] tracking-[0.04em] max-[620px]:text-2xl">{member.name}</h2>
                <p className="m-0 mt-2 text-base leading-6">{member.designation}</p>
                <div className="mt-4 flex items-center gap-4">
                  <a className="text-black" href="#twitter" aria-label={`${member.name} on Twitter`}>
                    <FiTwitter className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a className="text-black" href="#instagram" aria-label={`${member.name} on Instagram`}>
                    <FiInstagram className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a className="text-black" href="#linkedin" aria-label={`${member.name} on LinkedIn`}>
                    <FiLinkedin className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-3" role="tablist" aria-label="Team slides">
            {teamSlides.map((slide, index) => (
              <button
                key={slide[0].name}
                className={`h-3 w-3 rounded-full border-2 p-0 transition ${
                  activeTeamSlide === index ? 'border-black/30 bg-[#db4444]' : 'border-transparent bg-black/30'
                }`}
                type="button"
                onClick={() => setActiveTeamSlide(index)}
                aria-label={`Show team slide ${index + 1}`}
                aria-selected={activeTeamSlide === index}
                role="tab"
              />
            ))}
          </div>
        </section>

        <section className="mt-[140px] flex min-h-[161px] items-start justify-center gap-[88px] max-[980px]:gap-10 max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-12" aria-label="Service highlights">
          {serviceHighlights.map((item) => (
            <ServiceHighlight key={item.title} item={item} />
          ))}
        </section>
      </section>
    </main>
  )
}

export default About
