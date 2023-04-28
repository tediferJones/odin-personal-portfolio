function AboutMe() {
  return (
    <div className='w-4/5 pb-16'>
      <h3 className='text-2xl'>About Me Section</h3>
      <img className='float-left w-full md:w-3/5 lg:w-2/5 p-4' 
        src='https://via.placeholder.com/1080x1080?text=?'
      />
      <p className='text-xl'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Welcome to my portfolio, I am a fullstack web developer looking to learn as much as I can about
        the web, how it works, and why it works the way it does.  I really 
        enjoy challenging my current way of thinking by solving novel and 
        complex problems, I think that's part of what I truly find fascinating 
        about programming.  And with lots of previous troubleshooting experience 
        fixing cars, computers, house-hold appliances, and much more has 
        provided me with a diverse set of skills and perspectives for looking at 
        systems that are physical, digital, or some combination of the two.

        <br />
        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        In addition to this, I am very passionate about learning anything tech
        related, I just need to know how things work.  I built my first computer 
        when I was about 12 years old, and ever since then I have been trying to 
        dig further and further in how things work.  I think this is were my 
        passion for things like linux comes into play.  It can be difficult, 
        frustrating, and even down right demeaning, but if you stick with it, 
        by the time you have solved whatever problem you're having, you will 
        have undoubtly learned something, even if its just something as simple 
        as having a better understanding of how syntax plugins are loaded into VIM.

        <br />
        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        At its core, I think I just love solving problems, breaking down complex 
        problems into understandable pieces and then figuring out how these 
        pieces relate to each other and work together, what is needed and what
        is nice to have, and the implications these changes could have on other 
        systems.  It's a mental workout and I love it.
      </p>
      {/*
          being able to work through and build up different perspectives for certain situations and then being able to see how much further your understanding of the problem has become is like crack to me
          */}
        {/* Give a little biography, why you're in tech, what you're interested in, etc... */}
    </div>
  )
}

export default AboutMe;
