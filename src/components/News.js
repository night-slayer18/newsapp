import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "2024 NFL divisional round playoffs, facts to know: Patrick Mahomes on road, Lamar Jackson's struggles and more - CBS Sports",
      "description": "Plus, Houston can make history with its improbable run",
      "url": "https://www.cbssports.com/nfl/news/2024-nfl-divisional-round-playoffs-facts-to-know-patrick-mahomes-on-road-lamar-jacksons-struggles-and-more/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/01/03/de0c00f3-6314-46a9-9d68-b6b3ac107618/thumbnail/1200x675/c7ad9f72387eda303d22094cf578dd04/usatsi-lamar-jackson-ravens.jpg",
      "publishedAt": "2024-01-19T02:17:00Z",
      "content": "The headliner for this weekend's games is top shelf. Patrick Mahomes vs. Josh Allen, again. The opening acts are pretty good, too. A rookie (C.J. Stroud) can upset the MVP (Lamar Jackson). The Packer… [+5515 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Melissa Quinn, Andres Triay",
      "title": "DOJ Uvalde report says law enforcement response to school shooting was a failure - CBS News",
      "description": "The Justice Department's report points to \"cascading failures\" by the police chief and other law enforcement responding to the shooting at Robb Elementary School in Uvalde, Texas, on May 4, 2022.",
      "url": "https://www.cbsnews.com/news/uvalde-mass-shooting-justice-dept-report-law-enforcement-response/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/18/71c1bc11-35ff-4855-9af5-d2eb93798d2b/thumbnail/1200x630/33eb996a93c41525dfe581e067c3d786/gettyimages-1399367048.jpg?v=47479038714af14683e43d6675dccca0",
      "publishedAt": "2024-01-19T01:41:00Z",
      "content": "Washington — The Justice Department on Thursday released a hard-hitting report on the response by law enforcement to the 2022 mass shooting in Uvalde, Texas, pointing to a series of \"cascading failur… [+9031 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "NFL Network’s Jane Slater Talks Cowboys Retaining Mike McCarthy with Rich Eisen | Full Interview - The Rich Eisen Show",
      "description": "NFL Network reporter Jane Slater and Rich Eisen discuss the Dallas Cowboys bringing back head coach Mike McCarthy after another early playoff exit. Tune in t...",
      "url": "https://www.youtube.com/watch?v=OphZMVlghh0",
      "urlToImage": "https://i.ytimg.com/vi/OphZMVlghh0/maxresdefault.jpg",
      "publishedAt": "2024-01-19T00:30:11Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "Fox Business" },
      "author": "Eric Revell",
      "title": "Nelson Peltz: Disney's board has 'self-inflicted' wounds - Fox Business",
      "description": "Activist investor Nelson Peltz continued his attacks on The Walt Disney Company's board Thursday after the panel called on shareholders to reject his nomination for a seat.",
      "url": "https://www.foxbusiness.com/markets/nelson-peltz-disneys-board-has-self-inflicted-wounds",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/Disney-2.jpg?ve=1&tl=1",
      "publishedAt": "2024-01-19T00:03:00Z",
      "content": "Activist shareholder Nelson Peltz is firing back at Disney after the entertainment giant urged shareholders to vote against adding him and another nominee pushed by his hedge fund to its board.\r\nIn a… [+4318 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Prince William visits Princess Kate in hospital after surgery | 9 News Australia - 9 News Australia",
      "description": "Following her major abdominal surgery, Princess Kate was visited by her husband Prince William in hospital at the London Clinic. This comes as fellow Royal, ...",
      "url": "https://www.youtube.com/watch?v=GxxHwDM0N2c",
      "urlToImage": "https://i.ytimg.com/vi/GxxHwDM0N2c/maxresdefault.jpg",
      "publishedAt": "2024-01-18T23:59:22Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Full UFC 297 Press Conference | UFC 297 | MMA Fighting - MMAFightingonSBN",
      "description": "Check out the full #UFC297 press conference featuring #UFC stars Sean Strickland, Dricus du Plessis, Raquel Pennington, Mayra Buena Silva, Neil Manny, Mike M...",
      "url": "https://www.youtube.com/watch?v=F7iFpW32Wc4",
      "urlToImage": "https://i.ytimg.com/vi/F7iFpW32Wc4/maxresdefault.jpg",
      "publishedAt": "2024-01-18T23:28:16Z",
      "content": null
    },
    {
      "source": { "id": "bloomberg", "name": "Bloomberg" },
      "author": "Mark Gurman",
      "title": "Apple (AAPL) Vision Pro Chiefs Sees Potential Use in Surgery, Teaching - Bloomberg",
      "description": "Apple Inc., which is poised to launch its Vision Pro mixed-reality headset on Feb. 2, is already envisioning future workplace applications for the device, including using it for surgery, aircraft repair and teaching students.",
      "url": "https://www.bloomberg.com/news/articles/2024-01-18/apple-vision-pro-chief-sees-surgery-training-as-future-vision-pro-growth-areas",
      "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i38uY_0EqfKc/v1/1200x800.jpg",
      "publishedAt": "2024-01-18T23:09:05Z",
      "content": "Apple Inc., which is poised to launch its Vision Pro mixed-reality headset on Feb. 2, is already envisioning future workplace applications for the device, including using it for surgery, aircraft rep… [+358 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Devan Cole",
      "title": "Trump lawyers warn Supreme Court of ‘chaos and bedlam’ if states are allowed to bar him from 2024 ballot - CNN",
      "description": "Donald Trump is urging the US Supreme Court to reverse the Colorado Supreme Court’s ruling that removed him from that state’s ballot.",
      "url": "https://www.cnn.com/2024/01/18/politics/14th-amendment-supreme-court-trump-colorado/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1940861711.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-01-18T22:52:00Z",
      "content": "Former President Donald Trump is urging the US Supreme Court to reverse the Colorado Supreme Courts ruling that removed him from that states ballot.\r\nThe brief submitted by Trumps attorneys Thursday … [+3830 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "William Booth",
      "title": "With Rwanda deportation bill, U.K. evades human rights norms it established - The Washington Post",
      "description": "The House of Commons has passed migration legislation that departs from international human rights obligations the U.K. helped to write.",
      "url": "https://www.washingtonpost.com/world/2024/01/18/rwanda-bill-migrants-deportation-uk/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SXZZQYR4IX6MIVDNW2GSJ7Q47I_size-normalized.jpg&w=1440",
      "publishedAt": "2024-01-18T22:42:00Z",
      "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nLONDON At the World Economic Forum in Davos, Switzerland, British Foreign Minister David Cameron was asked whether his country should … [+8130 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "NAJIB JOBAIN, JOSEF FEDERMAN, JACK JEFFERY",
      "title": "Israel-Hamas war: Netanyahu opposes Palestinian state scenario - The Associated Press",
      "description": "Israeli Prime Minister Benjamin Netanyahu says he has informed the United States that he opposes the establishment of a Palestinian state as part of any postwar scenario. The announcement on Thursday exposed the deep divisions that have emerged between the cl…",
      "url": "https://apnews.com/article/israel-hamas-war-news-01-18-2024-73d552c6e73e0dc3783a0a11b2b5f67d",
      "urlToImage": "https://dims.apnews.com/dims4/default/491cebe/2147483647/strip/true/crop/5616x3159+0+293/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4b%2F27%2Fc247877a1f3e3231079180747718%2F9b566317b40f45e49ea0ca199d40efb3",
      "publishedAt": "2024-01-18T22:40:00Z",
      "content": "JERUSALEM (AP) Prime Minister Benjamin Netanyahu on Thursday rejected U.S. calls to scale back Israels military offensive in the Gaza Strip or take steps toward the establishment of a Palestinian sta… [+9284 chars]"
    },
    {
      "source": { "id": null, "name": "SFGate" },
      "author": "Stephen Council",
      "title": "Google CEO Sundar Pichai explains slew of layoffs and threatens more - SFGATE",
      "description": "Pichai explained the Bay Area tech giant's layoffs and said more are likely coming in a Wednesday memo.",
      "url": "https://www.sfgate.com/tech/article/google-ceo-layoffs-sundar-pichai-18615666.php",
      "urlToImage": "https://s.hdnux.com/photos/01/35/76/66/24636832/3/rawImage.jpg",
      "publishedAt": "2024-01-18T22:31:14Z",
      "content": "FILE: Google CEO Sundar Pichai speaks during the APEC CEO Summit at Moscone West on Nov. 16, 2023, in San Francisco.\r\nJustin Sullivan/Getty Images\r\nCEO Sundar Pichai acknowledged Googles newest spate… [+2868 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Samsung Galaxy S24 Ultra vs. Galaxy S23 Ultra vs. iPhone 15 Pro Max (Premium Phones Compared) - CNET",
      "description": "Samsung’s Galaxy S24 Ultra is here. How does it stack up against last year’s S23 Ultra? Or Apple’s premium iPhone 15 Pro Max?0:00 Intro0:42 Pricing1:06 Perfo...",
      "url": "https://www.youtube.com/watch?v=QlGwl0nCxMM",
      "urlToImage": "https://i.ytimg.com/vi/QlGwl0nCxMM/maxresdefault.jpg",
      "publishedAt": "2024-01-18T22:22:19Z",
      "content": null
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": "Trevor Hunnicutt, Steve Holland, Krishn Kaushik",
      "title": "US strikes Houthi anti-ship missiles, shipping disruptions grow - Reuters.com",
      "description": "The U.S. launched new strikes against Houthi anti-ship missiles aimed at the Red Sea on Thursday, as growing tensions in the region's sea lanes disrupted global trade and raised fears of supply bottlenecks that could reignite inflation.",
      "url": "https://www.reuters.com/business/indian-navy-rescues-crew-after-attack-ship-off-coast-yemen-2024-01-18/",
      "urlToImage": "https://www.reuters.com/resizer/KDvayAZBw-uyucybUsWv0KTOLqA=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U5MU2RDB2JKKZJNVOY7AAYLRKU.jpg",
      "publishedAt": "2024-01-18T21:54:00Z",
      "content": "ABOARD AIR FORCE ONE/WASHINGTON/NEW DELHI, Jan 18 (Reuters) - The U.S. launched new strikes against Houthi anti-ship missiles aimed at the Red Sea on Thursday, as growing tensions in the region's sea… [+6585 chars]"
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": "Graham Kates, Clare Hymes, Katrina Kaufman",
      "title": "Trump's comments about E. Jean Carroll caused up to $12.1 million in reputational damage, expert tells jury - CBS News",
      "description": "It could cost as much as $12.1 million to repair the harm to the writer E. Jean Carroll's​ reputation, an expert told the jury.",
      "url": "https://www.cbsnews.com/news/trump-e-jean-carroll-defamation-damages-reputation/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/18/1c08b6fa-0c90-4a33-b2fa-365522b9ab57/thumbnail/1200x630g2/7040cf1e069caec6fdd10e1ca3613582/20240118-134156-resized.jpg?v=47479038714af14683e43d6675dccca0",
      "publishedAt": "2024-01-18T21:34:01Z",
      "content": "It could cost as much as $12.1 million to repair the harm to the writer E. Jean Carroll's reputation caused by a pair of defamatory statements former President Donald Trump made in 2019, a professor … [+3604 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Jori Epstein",
      "title": "Ranking NFL's open head-coaching jobs: Coaches, execs pick league's gigs from least to most attractive - Yahoo Sports",
      "description": "We polled six highly positioned league sources — three on the coaching side, three on personnel — and asked them to rank the NFL's seven open jobs, with...",
      "url": "https://sports.yahoo.com/ranking-nfls-open-head-coaching-jobs-coaches-execs-pick-leagues-gigs-from-least-to-most-attractive-212448332.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Fxge7mddwQTB7mNCEC6ifw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Nzk-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/40e1ba30-b62e-11ee-8fb7-7e81daf6c165",
      "publishedAt": "2024-01-18T21:24:48Z",
      "content": "(Bruno Rouby/Yahoo Sports)\r\nTurning over a quarter of NFL head-coaching jobs in a single offseason isnt a new trend. The availability of so many high-end résumés is.\r\nFrom Bill Belichick and Jim Harb… [+22756 chars]"
    },
    {
      "source": { "id": null, "name": "[Removed]" },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Oppenheimer eclipses Barbie in Bafta nominations | BBC News - BBC News",
      "description": "Christopher Nolan's Oppenheimer leads this year's Bafta Film Award nominations with a total of 13.They include one for Cillian Murphy for playing J Robert Op...",
      "url": "https://www.youtube.com/watch?v=KStkdUvhEK8",
      "urlToImage": "https://i.ytimg.com/vi/KStkdUvhEK8/maxresdefault.jpg",
      "publishedAt": "2024-01-18T21:15:02Z",
      "content": null
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": "Rachel Looker",
      "title": "A change of tone? Nikki Haley ramps up Trump attacks ahead of New Hampshire primaries - USA TODAY",
      "description": "Former U.N. ambassador Nikki Haley has ramped up attacks on former president Donald Trump during New Hampshire campaign stops this week.",
      "url": "https://www.usatoday.com/story/news/politics/elections/2024/01/18/nikki-haley-tone-trump-desantis/72270169007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/18/USAT/72263178007-xxx-jc-16834.JPG?crop=2997,1686,x0,y82&width=2997&height=1686&format=pjpg&auto=webp",
      "publishedAt": "2024-01-18T21:07:52Z",
      "content": "WASHINGTON With less than one week until the New Hampshire primaries, Nikki Haley is shifting her tone when talking about her former boss: Donald Trump.\r\nHaley has ramped up attacks during campaign s… [+3043 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "Indiana Jones and the Great Circle - Official Gameplay Reveal Trailer | Xbox Direct 2024 - GameSpot",
      "description": "Uncover one of history’s greatest mysteries in Indiana Jones and the Great Circle™, a first-person, single-player adventure set between the events of Raiders...",
      "url": "https://www.youtube.com/watch?v=FmWvxUdTXyo",
      "urlToImage": "https://i.ytimg.com/vi/FmWvxUdTXyo/maxresdefault.jpg",
      "publishedAt": "2024-01-18T20:51:00Z",
      "content": null
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "Alex Stone, Dan Noyes, Meredith Deliso",
      "title": "Scott Peterson case taken up by Los Angeles Innocence Project - ABC News",
      "description": "Scott Peterson was convicted of killing his wife and unborn child in 2004.",
      "url": "https://abcnews.go.com/US/innocence-project-takes-case-notorious-killer-scott-peterson/story?id=106487571",
      "urlToImage": "https://i.abcnewsfe.com/a/da46e98d-add2-4f10-b202-89fb1df316c0/scott-peterson-ap-jef-240118_1705601845066_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2024-01-18T20:32:09Z",
      "content": "The Los Angeles Innocence Project has taken up the notorious case of convicted wife killer Scott Peterson in new court filings, ABC News was first to report on Thursday. The group is seeking new evid… [+4240 chars]"
    }
  ]
  constructor(){
    super();
    console.log("News constructor called");
    this.state = {
      articles:this.articles,
      loading:false,
    }
  }

  async componentDidMount(){
    let url = "";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsBuzz - Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}          
        </div>
      </div>
    )
  }
}

export default News
