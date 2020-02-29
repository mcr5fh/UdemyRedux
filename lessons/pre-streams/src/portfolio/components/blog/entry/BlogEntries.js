import React from "react";
import Text from "./Text";

import { Header as Week2Header, modular, five_rand } from "./Week2";

const BlogEntries = [
  {
    date: "June 02, 2019",
    title: "Beantown to Shebeentown: Week 1",
    subtitle: "I ramble..",
    content: (
      <Text
        content={`Having rounded out a huge weekend in Boston
        , which included activities ranging from drinking in multi-million
        dollar penthouses, having some drinks with an INTERPOL officer, 
        and some good 'ol canolies in the north end, I set
        off for BOS... with Kbow’s **new apartment** keys.
        Thankfully, I realized this while emptying my pockets at security and did not
        take them along for my 8,000 miles journey -- Shoutout to TSA for having a safe Lost&Found bin.
        I arrived in Cape Town 23 hours later to a modern flat in the heart of City Bowl; 
        living in town is cool, but it is fucking LOUD. With or without the mustic, I fell asleep 
        gitty like a kid before the first day of school.<br/>

        The next morning, Jansen, Ollie and the rest of the Metering team gave me a warm welcome, thus kicked
        off the migration of EC2 Instance Metering. I was incredibly surprised at the attitude I was met with.
        My surprise came from the fact that all the guys on the Instance Metering team here in Cape  Town
        were essentialy now nomads, looking for new teams; 3 out of the 4 engineers didn't even know where they 
        were going to go next. Nevertheless, the helped me onboard quickly.
        
        Later in the week, I grabbed a coffee with Luchelle's 
        (a family friend) brother who started a Colored Business Network to facilitate venture capital, 
        mentorship, and just general networking in the colored, South African community. 
        I am totally in for the cause and the next email is going out some time this week.<br/>
        
        My coworkers took me out for **First Thursdays**, and it was lit. People just selling and drinking 
        beers in the streets. Progression: Tacos --> Some thrift store going on in the street --> BeerHouse 
        --> Village Idiot --> Reset. This place is like Flash
        but two floors and cigs inside.<br/>
        
        Needless to say, I missed my 8am physical therapy session the next morning.
        But hey, hungover comradery in the office is a beautiful thing.<br/>

        I won't bore you with too much more, but the rest of that weekend was filled
        with rugby, a warm, homey lunch at some relatives, and exploring
        the City until I felt that it was too dodgy. Like wow, Cape Town is an absolute
        ghost town on Sundays. My only thought is that it must be everyone's
        hangovers from their First Thursdays weekend...`}
      />
    ),
    header: null,
    footer: null
  },
  {
    date: "June 16, 2019",
    title: "Week 2",
    subtitle: (
      <div>
        "Swaar werk het niemand dood gemaak nie"
        <div>
          <i className="ui content">"Hard work never killed anyone"</i>
        </div>
      </div>
    ),
    header: Week2Header,
    content: (
      <div>
        <img
          className="ui left floated small image"
          src={modular}
          alt="Modular"
        />
        <Text
          content={`
        This week, I spent most of my Sunday afternoon listening to a wide range of stories from Granny (my dad’s mom). She turns 90 this year, and I have seen/her about 10 times in my life. 
        While listening to her recount different phases of her life, I looked back at mine and an (un)surprising amount of (people/their values) started to make sense (root cause?). 
                  <br/>
          My relatives’ recounting of apartheid always intrigue me. Apartheid started on <>, when my Granny was ___. As the segregation started to become integrated into the law and enforced, many Coloureds in the Western Cape began to emigrate to Canada for <its equality>, reduced racism, and ease of getting a visa. 
                  Granny’s husband, Harold, was <also colored?> almost emigrated the family to Canada. My grandfather actually 		went to the Department of Home Affairs to get visa papers to bring the family to Canada,, but while he was there, waiting in line, he changed his mind. The Ruiters were staying in Cape Town. 
                  <br/>
        The reasoning? Despite the lower standards of living that they were subject to, it was not terribly difficult for Coloured people to find work in Cape Town in the services industry. Further, the Coloured were still treated miles better than the blacks. So it was settled. No questions asked; that was how the family was run. My grandfather picked up plumbing and raised his family (on a farm) just outside Durbanville (I think). 
        
        My aunt mentioned that my dad and his brothers would ride the horses, without saddles, and just hold onto the manes as they galloped around. Wild wild West (Cape) out there man.
                  <br/>
                  Talk about the Butterfly Effect. Canada, 'eh? Maybe if we moved then my French would be better...
                  `}
        />
        <div className="ui right floated small image">
          <img
            //className="ui centered right floated small image"
            src={five_rand}
            alt="5 rand coin"
          />
          <p className="content">Mandella Inauguration Coin</p>
        </div>
        <Text
          content={`But this is where the quote comes in, “Swaar werk het niemand dood gemaak nie." Granny told me that my grandfather always used to say that, and so did my father.
         Before leaving, Granny gave me a 5 rand coin that was minted exclusively for Nelson Mandela’s presidential inauguration . 
                  There was a <limited> amount minted in 1994, and some searches online list bids that reach 
                  thousands of dollars (link?).  Moving to the United States with two suitcases and an infant doesn't really promote 
                  "relics/things" being passed down, so this little coin that was worth ~$0.30 really meant a lot. 
                  <br/> 
        In other news, I went to my first professional, Super Rugby match with my coworkers. The Stormers (Cape Town team) unfortunately lost to the Sharks (Durban team) on a try in the LAST play of the match. We proceeded to have ourselves a night hitting the classic Reset-Modular duo. Oh, and we bought the bouncers to Modular Steers (think late night Mcdonalds). Unfortunately, right before I left Modular, my phone died, so once of the bouncers offered to drive me home. Little did I know he expected 100 rand (usual uber is 20), and I only had 50. He said it was not problem, I just had to buy him 50 rands worth of stuff at the gas station. He bought some biltong and that was my night.
      `}
        />
      </div>
    ),
    footer: null
  },
  {
    date: "June 23, 2019",
    title: "Week 3",
    subtitle: (
      <div>
        <i>Lekker</i>
      </div>
    ),
    header: null,
    content: (
      <Text
        content={`
        Lorem Ipsum. 

        I got a lip tat
      `}
      />
    ),
    footer: null
  }
];

export default BlogEntries;
