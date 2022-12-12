import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen text-white bg-[url(https://www.pixelstalk.net/wp-content/uploads/images1/Desktop-dark-space-wallpaper.jpg)] bg-cover">
      <Head>
        <title>Aleks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='pt-[50px] px-[250px]'>
          <h1 className='font-bold text-6xl'>Hey, im <span className='text-blue'>Aleks</span></h1>
          <p className='text-2xl pt-[20px]'>Im a 14 year old who really enjoys games, and coding.</p>
          <p className='text-2xl'>Im currently living in the UK. I love using</p>
          <p className='text-2xl'>javascript,java and NEXT.JS!</p>
          <br></br>
          <div className='pt-[25px]'>
            <h1 className='text-4xl font-bold'>PROJECTS</h1>
            <br></br>
          <div className='inline-block w-[200px] h-[200px] bg-[url(https://top.gg/_next/image?url=https%3A%2F%2Fimages.discordapp.net%2Favatars%2F1030807295661187163%2F9e3497c594db10441dade5d5d076010f.png%3Fsize%3D128&w=128&q=75)] bg-cover rounded-lg hover:translate-y-[-5px] transition duration-200 ease-in-out'>
            <h1 className='text-2xl font-bold text-center pt-[10px]'>NUCTORNO</h1>
            <p className='text-center pt-[30px]'>A powerful bot that will help you in any need!</p>
            <a href='https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100585757719&scope=bot%20applications.commands' className='flex justify-center pt-[30px]'><button className='w-[180px] h-[40px] rounded-full bg-black bg-opacity-50 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Invite</button></a>
          </div>

          <div className='ml-20 inline-block w-[200px] h-[200px] bg-blue rounded-lg hover:translate-y-[-5px] transition duration-200 ease-in-out'>
          <h1 className='text-1xl font-bold text-center pt-[20px]'>PROXY - STUDIOS</h1>
          <p className='text-center pt-[30px]'>A group of people making bots and having fun</p>
            <a href='https://discord.gg/Fwy6M9HNTs' className='flex justify-center pt-[30px]'><button className='w-[180px] h-[40px] rounded-full bg-black bg-opacity-50 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Join</button></a>
          </div>
          </div>
          <div className='pt-[55px]'>
          <h1 className='text-4xl font-bold'>SOCIALS</h1>
          <div className='pt-[10px]'>
        <a href='https://discord.gg/Fwy6M9HNTs' className='inline-block'> <div className='w-[100px] h-[100px] bg-[#7289DA] rounded-lg hover:translate-y-[-5px] transition duration-200 ease-in-out'>
          <h1 className='translate-y-[37px] text-center'>Discord</h1>
        </div></a> 

        <a href='https://github.com/AleksDevsCode' className='ml-12 inline-block'> <div className='w-[100px] h-[100px] bg-[#6e5494] rounded-lg hover:translate-y-[-5px] transition duration-200 ease-in-out'>
          <h1 className='translate-y-[37px] text-center'>Github</h1>
        </div></a> 
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
