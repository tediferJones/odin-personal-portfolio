import portrait from '../assets/images/image0.jpeg';

function AboutMe() {
  return (
    <div className='w-4/5 pb-16'>
      <img className='float-left w-full md:w-3/5 lg:w-2/5 p-4' 
        src={portrait}
        alt='Portrait'
      />
      <p className='text-xl'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Welcome to my portfolio, I am a junior full stack web developer who is 
        especially interested in back-end systems.  I really enjoy trying to find 
        new ways to solve novel and complex problems, I think that's part of what 
        I find truly fascinating about programming.  And with lots of previous 
        troubleshooting experience fixing cars, computers, house-hold appliances, 
        and much more has provided me with a diverse set of skills and perspectives 
        for looking at systems that are physical, digital, or some combination of the two.

        <br />
        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        In addition to this, I am very passionate about learning anything tech
        related, I just need to know how things work.  I built my first computer 
        when I was about 12 years old, and ever since then I have been trying to 
        dig further and further into how computers work.  I think that's a big part
        of why I push myself to use things like linux, that force you to dive deeper 
        and gain a higher level of understanding about how the software you are using 
        actually works.  It can be difficult, frustrating, and sometimes even down 
        right demeaning. But, if you stick with it, by the time you have solved whatever 
        problem you're having, you will have undoubtedly learned something.  Even if 
        it's something as simple as having a better understanding of how syntax 
        plugins are loaded into VIM.

        <br />
        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        At its core, I think I just love solving problems.  There is something so 
        empowering about breaking down complex problems into understandable pieces 
        and then figuring out how these pieces relate to each other and work together.  
        And with that information, determining what is needed, what is nice to have, and the 
        implications that changes could have on other systems.  It's a mental workout and 
        I love it.
      </p>
    </div>
  )
}

export default AboutMe;
