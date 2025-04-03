import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <div className="profile">
        <Image src="/me.png" height={200} width={200} alt="Myprofileimage" />        
        <div className="intro">
          <h1>Hi, I'm Yash Kamble
          </h1>
          <p>I am created assignment portfolio basic functionality.</p>
        </div>
      </div>
    </div>
  )
}