import React from "react";
import Text from "./Text";

import { Header as HeaderJune072019 } from "./June072019";

const BlogEntries = [
  {
    date: "June 02, 2019",
    title: "Beantown to Shebeentown: Week 1",
    subtitle: "I ramble..",
    content: (
      <Text
        content={`Having rounded out a fun weekend with my girlfriend (who I fucking
        love), which included activities ranging from drinking in multi-million
        dollar penthouses to smoothie bowls and canolies in the north end, I set
        off for the BOS airport… with Kbow’s *new apartment* keys in my pockets.
        Thankfully, I realized this while emptying them at security, and did not
        travel 8,000 miles with them. Package secured. I arrived in Cape Town
        22+ hours later to a dope flat in the heart of City Bowl, excited like a
        kid before the first day of school.

        Jansen, Ollie and the team gave me a warm welcome and the migration of
        EC2 Instance Metering began. Living in town is cool, but it is fucking
        LOUD. I grabbed a coffee with Luchelle's (a family friend) brother who
        started a Colored Business Network to facilitate networking and
        mentorship in the colored community. I am totally in for the cause and
        the next email is going out some time next week.
        
        First Thursdays is lit, people selling and drinking beers in the
        streets. BeerHouse --> Village Idiot --> Reset. This place is like Flash
        but two floors.
        
        Needless to say, I missed my 8am physical therapy the next morning.
        Hungover comradery in the office is a beautiful thing.

        I won't bore you with too much more, but the weekend was filled
        with rugby, a warm, homey lunch at some relatives,\ and walking around
        the City until I felt that it was too dodgy. Cape Town is an absolute
        ghost town on Sundays.\ My only thought is that it must be everyone's
        hangovers from their First Thursdays weekend...`}
      />
    ),
    header: null,
    footer: null
  },
  {
    date: "June 16, 2019",
    title: "Welcome (back) to Cape Town",
    header: HeaderJune072019,
    content:
      "ultricies ipsum, in lobortis ante. Vestibulum lobortis justo risus, ac egestas risus sodales ac. Nulla et aliquet sapien. Sed sed justo id diam euismod mattis id et dui. Curabitur \
    lacinia placerat quam, vel convallis dui accumsan quis. In hac habitasse platea dictumst. Vestibulum vel tortor porta elit iaculis bibendum at ut mi. Donec placerat vestibulum lorem \
    vel pharetra.",
    footer: null
  }
];

export default BlogEntries;
